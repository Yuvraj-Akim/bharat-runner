import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'
import type { WorldData, WorldPOI } from './WorldData'

// ── Spawn counts & speeds ──────────────────────────────────────────────────────
const BICYCLE_COUNT = 15
const SCOOTER_COUNT = 10
const AUTO_COUNT    = 5

const BICYCLE_SPEED: [number, number] = [5,  9]
const SCOOTER_SPEED: [number, number] = [11, 17]
const AUTO_SPEED:    [number, number] = [7,  11]

type VehicleKind = 'bicycle' | 'scooter' | 'autorickshaw'

// ── Shared geometry pool — one GPU upload each, reused by every vehicle ────────
const GEO_WHEEL_BIKE  = new THREE.CylinderGeometry(0.24, 0.24, 0.07, 8)
const GEO_WHEEL_SCOOT = new THREE.CylinderGeometry(0.20, 0.20, 0.09, 8)
const GEO_WHEEL_AUTO  = new THREE.CylinderGeometry(0.22, 0.22, 0.13, 8)
const GEO_HL_SMALL    = new THREE.SphereGeometry(0.055, 4, 4)
const GEO_HL_LARGE    = new THREE.SphereGeometry(0.075, 4, 4)

// ── Shared material pool ───────────────────────────────────────────────────────
const MAT_WHEEL    = new THREE.MeshLambertMaterial({ color: 0x111111 })
const MAT_SKIN     = new THREE.MeshLambertMaterial({ color: 0xc68642 })
const MAT_DARK     = new THREE.MeshLambertMaterial({ color: 0x1a1a2e })
const MAT_SEAT     = new THREE.MeshLambertMaterial({ color: 0x222222 })
const MAT_CHROME   = new THREE.MeshLambertMaterial({ color: 0xaaaaaa })
const MAT_AUTO_Y   = new THREE.MeshLambertMaterial({ color: 0xf5c100 })
const MAT_AUTO_B   = new THREE.MeshLambertMaterial({ color: 0x111111 })
const MAT_AUTO_G   = new THREE.MeshLambertMaterial({ color: 0x88aacc, transparent: true, opacity: 0.45 })

// Headlight — single shared material updated once per frame in VehicleSystem.update()
export const MAT_HEADLIGHT = new THREE.MeshBasicMaterial({ color: 0x000000 })

// Bike frame colours (4 options, shared across 15 bicycles)
const BIKE_FRAME_MATS = [0x333355, 0x553333, 0x335533, 0x555555]
  .map(c => new THREE.MeshLambertMaterial({ color: c }))

// Scooter body colours (10 options, one per scooter)
const SCOOT_BODY_MATS = [
  0xb81c1c, 0x003087, 0x888888, 0xf5c542,
  0x222222, 0x0050dd, 0x227722, 0x992211,
  0xcc6600, 0x4400aa,
].map(c => new THREE.MeshLambertMaterial({ color: c }))

// ── Sphere-surface helpers ─────────────────────────────────────────────────────

/** Spherical linear interpolation between two on-surface positions. */
function slerpSurface(a: THREE.Vector3, b: THREE.Vector3, t: number): THREE.Vector3 {
  const na  = a.clone().normalize()
  const nb  = b.clone().normalize()
  const dot = Math.max(-1, Math.min(1, na.dot(nb)))
  const ang = Math.acos(dot)
  if (ang < 1e-6) return nb.multiplyScalar(PLANET_RADIUS)
  const s = Math.sin(ang)
  return na
    .multiplyScalar(Math.sin((1 - t) * ang) / s)
    .addScaledVector(nb, Math.sin(t * ang) / s)
    .multiplyScalar(PLANET_RADIUS)
}

/** Finite-difference tangent along the slerp arc at parameter t. */
function arcTangent(a: THREE.Vector3, b: THREE.Vector3, t: number): THREE.Vector3 {
  const e  = 2e-3
  const p0 = slerpSurface(a, b, Math.max(0, t - e))
  const p1 = slerpSurface(a, b, Math.min(1, t + e))
  p1.sub(p0)
  return p1.lengthSq() > 1e-12 ? p1.normalize() : new THREE.Vector3(0, 0, -1)
}

/** Orient a group so +Y = surface normal, −Z = forward direction of travel. */
function alignGroup(g: THREE.Group, up: THREE.Vector3, fwd: THREE.Vector3) {
  const right = new THREE.Vector3().crossVectors(fwd, up)
  if (right.lengthSq() < 1e-12) return
  right.normalize()
  g.quaternion.setFromRotationMatrix(
    new THREE.Matrix4().makeBasis(right, up, fwd.clone().negate())
  )
}

// ── Mesh build helpers ─────────────────────────────────────────────────────────

function bx(w: number, h: number, d: number, mat: THREE.Material): THREE.Mesh {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
}

/**
 * Wheel pivot group.  The cylinder's Y-axis is rotated to align with the
 * vehicle's X-axis (right), so incrementing pivot.rotation.x rolls the wheel.
 */
function mkWheel(
  geo: THREE.BufferGeometry, mat: THREE.Material,
  x: number, y: number, z: number,
): THREE.Group {
  const pivot = new THREE.Group()
  pivot.position.set(x, y, z)
  const cyl = new THREE.Mesh(geo, mat)
  cyl.rotation.z = Math.PI / 2   // Y-axis → X-axis
  pivot.add(cyl)
  return pivot
}

// ── Vehicle ────────────────────────────────────────────────────────────────────

class Vehicle {
  readonly group = new THREE.Group()

  private fromIdx: number
  private toIdx:   number
  private prevIdx: number
  private progress: number
  private speed: number
  private adj: number[][]

  private fromPos = new THREE.Vector3()
  private toPos   = new THREE.Vector3()

  private wheels: THREE.Group[] = []
  private spinAngle: number

  // scratch — allocated once, reused each frame
  private readonly _up = new THREE.Vector3()

  constructor(
    scene:     THREE.Scene,
    pois:      WorldPOI[],
    adj:       number[][],
    kind:      VehicleKind,
    speed:     number,
    edges:     { from: number; to: number }[],
    spreadIdx: number,
  ) {
    this.speed     = speed
    this.adj       = adj
    this.spinAngle = Math.random() * Math.PI * 2

    // Spread across edges so vehicles don't all start in one place
    const e      = edges[spreadIdx % edges.length]
    this.fromIdx = e.from
    this.toIdx   = e.to
    this.prevIdx = e.from
    this.progress = (spreadIdx / Math.max(1, edges.length)) % 1

    const fp = pois[this.fromIdx].position
    const tp = pois[this.toIdx].position
    this.fromPos.set(fp.x, fp.y, fp.z)
    this.toPos.set(tp.x, tp.y, tp.z)

    if (kind === 'bicycle')      this.buildBicycle()
    else if (kind === 'scooter') this.buildScooter()
    else                         this.buildAuto()

    this.group.position.copy(slerpSurface(this.fromPos, this.toPos, this.progress))
    scene.add(this.group)
  }

  update(dt: number, pois: WorldPOI[]) {
    // ── Advance along great-circle arc ───────────────────────────────────────
    const na  = this.fromPos.clone().normalize()
    const nb  = this.toPos.clone().normalize()
    const ang = Math.acos(Math.max(-1, Math.min(1, na.dot(nb))))
    const arc = Math.max(0.5, ang * PLANET_RADIUS)

    this.progress += (this.speed / arc) * dt

    // ── Destination reached → pick next road ─────────────────────────────────
    if (this.progress >= 1) {
      this.progress = 0
      this.prevIdx  = this.fromIdx
      this.fromIdx  = this.toIdx

      const neighbors = this.adj[this.fromIdx]
      if (neighbors && neighbors.length > 0) {
        const noBacking = neighbors.filter(n => n !== this.prevIdx)
        const choices   = noBacking.length > 0 ? noBacking : neighbors
        this.toIdx = choices[Math.floor(Math.random() * choices.length)]
      }

      const fp = pois[this.fromIdx].position
      const tp = pois[this.toIdx].position
      this.fromPos.set(fp.x, fp.y, fp.z)
      this.toPos.set(tp.x, tp.y, tp.z)
    }

    // ── Position + surface alignment ─────────────────────────────────────────
    const t   = Math.min(1, this.progress)
    const pos = slerpSurface(this.fromPos, this.toPos, t)
    const fwd = arcTangent(this.fromPos, this.toPos, t)
    this._up.copy(pos).normalize()

    this.group.position.copy(pos)
    alignGroup(this.group, this._up, fwd)

    // ── Wheel animation ───────────────────────────────────────────────────────
    // spinAngle accumulated; mod 2π prevents float growth over long sessions
    this.spinAngle = (this.spinAngle + this.speed * dt * 2.8) % (Math.PI * 2)
    for (const w of this.wheels) w.rotation.x = this.spinAngle
  }

  remove(scene: THREE.Scene) { scene.remove(this.group) }

  // ── Builders ──────────────────────────────────────────────────────────────

  private buildBicycle() {
    const g   = this.group
    const frm = BIKE_FRAME_MATS[Math.floor(Math.random() * BIKE_FRAME_MATS.length)]

    // Frame tubes
    const chainStay = bx(0.05, 0.05, 1.02, frm); chainStay.position.set(0, 0.25, 0)
    const seatTube  = bx(0.05, 0.44, 0.05, frm); seatTube.position.set(0, 0.47, 0.32)
    const topTube   = bx(0.05, 0.05, 0.76, frm); topTube.position.set(0, 0.70, 0)
    const downTube  = bx(0.05, 0.05, 0.80, frm); downTube.position.set(0, 0.46, -0.18); downTube.rotation.x = 0.35
    const seat      = bx(0.22, 0.04, 0.28, MAT_SEAT); seat.position.set(0, 0.71, 0.28)
    const bars      = bx(0.50, 0.05, 0.05, frm); bars.position.set(0, 0.77, -0.46)

    // Rider
    const rBody = bx(0.27, 0.36, 0.21, MAT_DARK); rBody.position.set(0, 0.97, 0.1)
    const rHead = bx(0.21, 0.21, 0.21, MAT_SKIN); rHead.position.set(0, 1.24, -0.06)

    // Wheels
    const wF = mkWheel(GEO_WHEEL_BIKE, MAT_WHEEL, 0, 0.24, -0.48)
    const wR = mkWheel(GEO_WHEEL_BIKE, MAT_WHEEL, 0, 0.24,  0.48)
    this.wheels.push(wF, wR)

    // Headlight (shared MAT_HEADLIGHT — color toggled by VehicleSystem)
    const hl = new THREE.Mesh(GEO_HL_SMALL, MAT_HEADLIGHT)
    hl.position.set(0, 0.68, -0.52)

    g.add(chainStay, seatTube, topTube, downTube, seat, bars, rBody, rHead, wF, wR, hl)
  }

  private buildScooter() {
    const g    = this.group
    const body = SCOOT_BODY_MATS[Math.floor(Math.random() * SCOOT_BODY_MATS.length)]

    const mainBody  = bx(0.52, 0.42, 1.04, body); mainBody.position.set(0, 0.44, 0)
    const fairing   = bx(0.46, 0.50, 0.35, body); fairing.position.set(0, 0.52, -0.52)
    const footboard = bx(0.44, 0.10, 0.38, body); footboard.position.set(0, 0.21, 0.06)
    const handlebar = bx(0.62, 0.07, 0.07, MAT_CHROME); handlebar.position.set(0, 0.88, -0.53)

    const rBody = bx(0.36, 0.38, 0.26, MAT_DARK); rBody.position.set(0, 0.92, 0.18)
    const rHead = bx(0.26, 0.26, 0.26, MAT_SKIN); rHead.position.set(0, 1.22, 0.14)

    const wF = mkWheel(GEO_WHEEL_SCOOT, MAT_WHEEL, 0, 0.20, -0.55)
    const wR = mkWheel(GEO_WHEEL_SCOOT, MAT_WHEEL, 0, 0.20,  0.55)
    this.wheels.push(wF, wR)

    // Twin headlights (share geometry + shared MAT_HEADLIGHT)
    const hlL = new THREE.Mesh(GEO_HL_SMALL, MAT_HEADLIGHT)
    const hlR = new THREE.Mesh(GEO_HL_SMALL, MAT_HEADLIGHT)
    hlL.position.set(-0.15, 0.55, -0.57)
    hlR.position.set( 0.15, 0.55, -0.57)

    g.add(mainBody, fairing, footboard, handlebar, rBody, rHead, wF, wR, hlL, hlR)
  }

  private buildAuto() {
    const g = this.group

    const chassis = bx(1.00, 0.14, 1.72, MAT_AUTO_B); chassis.position.set(0,    0.18,  0.05)
    const cabin   = bx(0.92, 0.88, 1.18, MAT_AUTO_Y); cabin.position.set(0,    0.78,  0.2)
    const roof    = bx(1.02, 0.12, 1.28, MAT_AUTO_Y); roof.position.set(0,    1.28,  0.2)
    const stripe  = bx(0.94, 0.14, 1.20, MAT_AUTO_B); stripe.position.set(0,    0.37,  0.2)
    const nose    = bx(0.80, 0.52, 0.52, MAT_AUTO_B); nose.position.set(0,    0.54, -0.66)
    const windsh  = bx(0.85, 0.48, 0.07, MAT_AUTO_G); windsh.position.set(0,    0.82, -0.34)

    // 3-wheel layout: 1 front centre, 2 rear
    const wFront = mkWheel(GEO_WHEEL_AUTO, MAT_WHEEL,  0,    0.22, -0.72)
    const wRL    = mkWheel(GEO_WHEEL_AUTO, MAT_WHEEL, -0.46, 0.22,  0.66)
    const wRR    = mkWheel(GEO_WHEEL_AUTO, MAT_WHEEL,  0.46, 0.22,  0.66)
    this.wheels.push(wFront, wRL, wRR)

    // Twin headlights on nose
    const hlL = new THREE.Mesh(GEO_HL_LARGE, MAT_HEADLIGHT)
    const hlR = new THREE.Mesh(GEO_HL_LARGE, MAT_HEADLIGHT)
    hlL.position.set(-0.24, 0.60, -0.90)
    hlR.position.set( 0.24, 0.60, -0.90)

    g.add(chassis, cabin, roof, stripe, nose, windsh, wFront, wRL, wRR, hlL, hlR)
  }
}

// ── VehicleSystem ──────────────────────────────────────────────────────────────

export class VehicleSystem {
  private vehicles: Vehicle[] = []

  constructor(scene: THREE.Scene, worldData: WorldData) {
    const { pois, roads } = worldData

    // Adjacency list indexed by POI id
    const adj: number[][] = pois.map(() => [])
    for (const r of roads) {
      adj[r.from].push(r.to)
      adj[r.to].push(r.from)
    }

    const edges = roads.map(r => ({ from: r.from, to: r.to }))

    let spreadIdx = 0
    const spawn = (kind: VehicleKind, count: number, range: [number, number]) => {
      for (let i = 0; i < count; i++, spreadIdx++) {
        const speed = range[0] + Math.random() * (range[1] - range[0])
        this.vehicles.push(new Vehicle(scene, pois, adj, kind, speed, edges, spreadIdx))
      }
    }

    spawn('bicycle',      BICYCLE_COUNT, BICYCLE_SPEED)
    spawn('scooter',      SCOOTER_COUNT, SCOOTER_SPEED)
    spawn('autorickshaw', AUTO_COUNT,    AUTO_SPEED)
  }

  /**
   * @param dt           Frame delta in seconds (capped upstream at 0.05)
   * @param pois         Live POI list from WorldData
   * @param daytimeRatio 0 = midnight, 1 = noon (from DayNightCycle)
   */
  update(dt: number, pois: WorldPOI[], daytimeRatio: number) {
    // Headlights on when daytimeRatio < 0.25 (dusk / night / dawn)
    // Single shared material — one color write covers every headlight mesh
    MAT_HEADLIGHT.color.setHex(daytimeRatio < 0.25 ? 0xffffaa : 0x000000)

    for (const v of this.vehicles) v.update(dt, pois)
  }

  dispose(scene: THREE.Scene) {
    for (const v of this.vehicles) v.remove(scene)
    this.vehicles = []
  }
}
