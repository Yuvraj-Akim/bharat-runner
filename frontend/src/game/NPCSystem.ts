import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'
import { type WorldPOI } from './WorldData'

// ── Constants ─────────────────────────────────────────────────────────────────

const NPC_COUNT   = 50
const SPEED_MIN   = 2.5    // world units / sec
const SPEED_MAX   = 4.5
const ARRIVE_DIST = 4.0    // units — considered "at destination"
const WAIT_MIN    = 3.0    // seconds to wait at a POI
const WAIT_MAX    = 10.0

// Indian kurta/saree colours palette
const BODY_PALETTE = [
  0xe63946, 0xf77f00, 0xffd166, 0x06d6a0, 0x118ab2,
  0x7b2d8b, 0xef476f, 0x3a86ff, 0xff6b35, 0xfb8500,
  0x2dc653, 0xf72585, 0x8338ec, 0x48cae4, 0xa2d729,
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function lmat(c: number) { return new THREE.MeshLambertMaterial({ color: c }) }

function randomSphereDir(): THREE.Vector3 {
  const theta = Math.random() * Math.PI * 2
  const phi   = Math.acos(2 * Math.random() - 1)
  return new THREE.Vector3(
    Math.sin(phi) * Math.cos(theta),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta),
  )
}

// ── NPC ───────────────────────────────────────────────────────────────────────

class NPC {
  readonly group: THREE.Group

  private surfPos:    THREE.Vector3   // on-surface position (|pos| = PLANET_RADIUS + 1)
  private speed:      number
  private targetPOI:  WorldPOI
  private state:      'walking' | 'waiting' = 'walking'
  private waitTimer   = 0
  private legPhase    = 0
  private legL:       THREE.Mesh
  private legR:       THREE.Mesh

  constructor(scene: THREE.Scene, pois: WorldPOI[], bodyColor: number) {
    this.speed     = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN)
    this.surfPos   = randomSphereDir().multiplyScalar(PLANET_RADIUS + 1)
    this.targetPOI = pois[Math.floor(Math.random() * pois.length)]

    const { group, legL, legR } = this.buildMesh(bodyColor)
    this.group = group
    this.legL  = legL
    this.legR  = legR

    this.group.position.copy(this.surfPos)
    scene.add(this.group)
  }

  // ── Called every frame ──────────────────────────────────────────────────────

  update(dt: number, pois: WorldPOI[]) {
    if (this.state === 'waiting') {
      this.waitTimer -= dt
      if (this.waitTimer <= 0) {
        this.state = 'walking'
        this.pickTarget(pois)
      }
      return
    }

    // Target world position on surface
    const target = new THREE.Vector3(
      this.targetPOI.position.x,
      this.targetPOI.position.y,
      this.targetPOI.position.z,
    )

    // Arrive check
    if (this.surfPos.distanceTo(target) < ARRIVE_DIST) {
      this.state     = 'waiting'
      this.waitTimer = WAIT_MIN + Math.random() * (WAIT_MAX - WAIT_MIN)
      this.legL.rotation.x = 0
      this.legR.rotation.x = 0
      return
    }

    // Tangent direction toward target on sphere surface.
    // Project (target - pos) onto the tangent plane (remove up component).
    const up    = this.surfPos.clone().normalize()
    const delta = target.clone().sub(this.surfPos)
    delta.sub(up.clone().multiplyScalar(delta.dot(up)))  // tangent projection

    const tLen = delta.length()
    if (tLen < 1e-6) { this.pickTarget(pois); return }
    const tangent = delta.divideScalar(tLen)

    this.surfPos.addScaledVector(tangent, this.speed * dt)
    this.surfPos.normalize().multiplyScalar(PLANET_RADIUS + 1)

    this.group.position.copy(this.surfPos)
    this.alignToSurface(up, tangent)
    this.animateLegs(dt)
  }

  remove(scene: THREE.Scene) { scene.remove(this.group) }

  // ── Private ─────────────────────────────────────────────────────────────────

  private pickTarget(pois: WorldPOI[]) {
    let next = this.targetPOI
    for (let i = 0; i < 10 && next === this.targetPOI; i++) {
      next = pois[Math.floor(Math.random() * pois.length)]
    }
    this.targetPOI = next
  }

  private alignToSurface(up: THREE.Vector3, forward: THREE.Vector3) {
    const right = new THREE.Vector3().crossVectors(forward, up)
    if (right.lengthSq() < 1e-6) return
    right.normalize()
    const mat = new THREE.Matrix4().makeBasis(right, up, forward.clone().negate())
    this.group.quaternion.setFromRotationMatrix(mat)
  }

  private animateLegs(dt: number) {
    this.legPhase += dt * 8
    const swing = Math.sin(this.legPhase) * 0.3
    this.legL.rotation.x =  swing
    this.legR.rotation.x = -swing
  }

  private buildMesh(color: number): { group: THREE.Group; legL: THREE.Mesh; legR: THREE.Mesh } {
    const g       = new THREE.Group()
    const bodyMat = lmat(color)
    const headMat = lmat(0xc68642)
    const legMat  = lmat(0x111122)

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.8, 0.35), bodyMat)
    body.position.y = 0.4; body.castShadow = true

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), headMat)
    head.position.y = 1.01; head.castShadow = true

    const legGeo = new THREE.BoxGeometry(0.2, 0.45, 0.25)
    const legL   = new THREE.Mesh(legGeo, legMat)
    legL.position.set(-0.15, -0.22, 0); legL.castShadow = true
    const legR   = new THREE.Mesh(legGeo, legMat)
    legR.position.set(0.15, -0.22, 0); legR.castShadow = true

    g.add(body, head, legL, legR)
    return { group: g, legL, legR }
  }
}

// ── NPCSystem ─────────────────────────────────────────────────────────────────

export class NPCSystem {
  private npcs: NPC[] = []

  constructor(scene: THREE.Scene, pois: WorldPOI[]) {
    for (let i = 0; i < NPC_COUNT; i++) {
      const color = BODY_PALETTE[i % BODY_PALETTE.length]
      this.npcs.push(new NPC(scene, pois, color))
    }
  }

  update(dt: number, pois: WorldPOI[]) {
    for (const npc of this.npcs) npc.update(dt, pois)
  }

  dispose(scene: THREE.Scene) {
    for (const npc of this.npcs) npc.remove(scene)
    this.npcs = []
  }
}
