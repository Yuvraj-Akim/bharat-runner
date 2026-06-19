import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'
import {
  type WorldPOI,
  type WorldData,
  type POIDefinition,
  POI_DEFS,
  poiDir,
} from './WorldData'

// ── POI definition lookup ─────────────────────────────────────────────────────

const DEF_MAP: Record<string, POIDefinition> = {}
for (const d of POI_DEFS) DEF_MAP[d.type] = d

// ── Surface placement ─────────────────────────────────────────────────────────

export function alignToSurface(obj: THREE.Object3D, dir: THREE.Vector3, heightAbove = 0) {
  const up    = dir.clone().normalize()
  obj.position.copy(up.clone().multiplyScalar(PLANET_RADIUS + heightAbove))

  const worldY = new THREE.Vector3(0, 1, 0)
  let   right  = new THREE.Vector3().crossVectors(up, worldY)
  if (right.lengthSq() < 1e-6) right.set(1, 0, 0)
  right.normalize()
  const forward = new THREE.Vector3().crossVectors(right, up).normalize()
  const mat = new THREE.Matrix4().makeBasis(right, up, forward.negate())
  obj.quaternion.setFromRotationMatrix(mat)
}

// ── Canvas-sprite label ───────────────────────────────────────────────────────

function hexToRgb(hex: number): string {
  return `rgb(${(hex >> 16) & 0xff},${(hex >> 8) & 0xff},${hex & 0xff})`
}

function makeLabelSprite(poi: WorldPOI): THREE.Sprite {
  const W = 320, H = 72
  const canvas  = document.createElement('canvas')
  canvas.width  = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!

  // Rounded-rect pill background
  const r = H / 2
  ctx.fillStyle = 'rgba(0,0,0,0.78)'
  ctx.beginPath()
  ctx.moveTo(r, 0); ctx.lineTo(W - r, 0)
  ctx.arcTo(W, 0, W, H, r); ctx.lineTo(W, H - r)
  ctx.arcTo(W, H, 0, H, r); ctx.lineTo(r, H)
  ctx.arcTo(0, H, 0, 0, r); ctx.lineTo(0, r)
  ctx.arcTo(0, 0, W, 0, r); ctx.closePath()
  ctx.fill()

  // Left color bar
  ctx.fillStyle = hexToRgb(poi.color)
  ctx.fillRect(0, 0, 8, H)

  // Emoji
  ctx.font = '36px serif'
  ctx.textBaseline = 'middle'
  ctx.fillText(poi.emoji, 18, H / 2)

  // Name
  ctx.font = 'bold 22px "Segoe UI", sans-serif'
  ctx.fillStyle = '#ffffff'
  ctx.fillText(poi.name, 66, H / 2 - 5)

  // Type sub-label
  ctx.font = '15px "Segoe UI", sans-serif'
  ctx.fillStyle = 'rgba(255,255,255,0.5)'
  ctx.fillText(poi.type.replace(/_/g, ' ').toLowerCase(), 67, H / 2 + 17)

  const tex = new THREE.CanvasTexture(canvas)
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false })
  const spr = new THREE.Sprite(mat)
  spr.scale.set(10, 2.25, 1)
  spr.renderOrder = 999
  return spr
}

// ── Material helpers ──────────────────────────────────────────────────────────

function lmat(color: number) { return new THREE.MeshLambertMaterial({ color }) }

const M = {
  white:  lmat(0xffffff), grey:  lmat(0x8d99ae),
  red:    lmat(0xe63946), navy:  lmat(0x1d4e89),
  yellow: lmat(0xffd166), green: lmat(0x2dc653),
}

function box(w: number, h: number, d: number, mat: THREE.Material, cy = h / 2) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  m.position.y = cy; m.castShadow = true; return m
}
function cyl(rt: number, rb: number, h: number, seg: number, mat: THREE.Material, cy = h / 2) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat)
  m.position.y = cy; m.castShadow = true; return m
}
function cone(r: number, h: number, seg: number, mat: THREE.Material, cy = h / 2) {
  const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat)
  m.position.y = cy; m.castShadow = true; return m
}

// ── Building factories ────────────────────────────────────────────────────────

type BuildFn = () => THREE.Group

const BUILDERS: Record<string, BuildFn> = {
  RAILWAY_STATION() {
    const g = new THREE.Group()
    g.add(box(7, 4, 3, M.navy))
    g.add(box(10, 0.4, 4, M.grey, 0.2))
    const tower = cyl(0.5, 0.7, 4, 8, M.grey); tower.position.set(3.5, 0, 0); g.add(tower)
    const dome  = cyl(0.5, 0, 0.8, 8, M.white); dome.position.set(3.5, 4.4, 0); g.add(dome)
    g.add(box(1.2, 5, 1.2, lmat(0x3a86ff), 2.5))
    return g
  },

  BUS_STAND() {
    const g = new THREE.Group()
    g.add(box(6, 0.3, 3, lmat(0xf77f00), 3.3))
    for (const x of [-2.2, 2.2]) { const c = cyl(0.15, 0.15, 3.3, 6, M.grey); c.position.x = x; g.add(c) }
    for (const x of [-1.5, 0, 1.5]) { const b = box(1.2, 0.2, 0.5, M.white, 0.8); b.position.set(x, 0, 0.8); g.add(b) }
    g.add(box(6, 2.5, 0.2, M.yellow, 1.25))
    return g
  },

  TEMPLE() {
    const g = new THREE.Group()
    const t = lmat(0xffd166)
    g.add(box(4, 2, 4, t), box(3, 1.5, 3, t, 2.75), box(2, 1.5, 2, t, 4.5))
    g.add(cyl(0.5, 0.5, 0.8, 8, lmat(0xffa500), 6))
    const k = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 8), lmat(0xffa500)); k.position.y = 6.8; g.add(k)
    const post = cyl(0.06, 0.06, 3, 6, M.grey); post.position.x = 2.5; g.add(post)
    const flag = box(0.9, 0.5, 0.05, M.red, 2.75); flag.position.x = 2.95; g.add(flag)
    return g
  },

  HOSPITAL() {
    const g = new THREE.Group()
    g.add(box(5, 5, 3, M.white), box(3, 5, 5, M.white))
    g.add(box(1.8, 0.5, 0.5, M.red, 5.3), box(0.5, 1.8, 0.5, M.red, 5.3))
    return g
  },

  IT_PARK() {
    const g = new THREE.Group()
    const gl = lmat(0x06d6a0)
    g.add(box(3, 7, 3, gl), box(4, 0.2, 4, M.grey, 0))
    const dish = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 4, 0, Math.PI), gl)
    dish.rotation.z = Math.PI / 2; dish.position.set(1.5, 7.7, 0); g.add(dish)
    g.add(cyl(0.05, 0.05, 1.5, 4, M.grey, 7.75))
    const side = box(2, 4, 2, lmat(0x048a68)); side.position.x = 3; g.add(side)
    return g
  },

  COLLEGE() {
    const g = new THREE.Group()
    g.add(box(7, 4, 3, lmat(0x7b2d8b)))
    for (const x of [-2.5, -1, 0.5, 2]) { const c = cyl(0.15, 0.2, 4, 6, M.white); c.position.set(x, 0, 1.7); g.add(c) }
    g.add(box(2.5, 0.3, 0.4, M.white, 4.15), cone(4, 1, 4, M.white, 4.5))
    return g
  },

  RESIDENTIAL() {
    const g = new THREE.Group()
    const pts:   [number, number][] = [[-1.5, -1], [1.5, -1], [-1.5, 1.2], [1.5, 1.2]]
    const cols   = [0xfb8500, 0xffb703, 0xef476f, 0xfb8500]
    pts.forEach(([x, z], i) => {
      const h = box(2, 2, 2, lmat(cols[i])); h.position.set(x, 0, z); g.add(h)
      const r = cone(1.6, 1, 4, lmat(0x8b1a1a), 2.5); r.position.set(x, 0, z); r.rotation.y = Math.PI / 4; g.add(r)
    })
    g.add(box(4.5, 0.15, 0.4, M.grey, 0.08))
    return g
  },

  MARKET() {
    const g    = new THREE.Group()
    const clrs = [0xef476f, 0xffd166, 0x06d6a0, 0xf77f00, 0x3a86ff, 0xa8dadc]
    const pos: [number, number][] = [[-2, 0], [-2, 1.8], [0, 0], [0, 1.8], [2, 0], [2, 1.8]]
    pos.forEach(([x, z], i) => {
      const m = lmat(clrs[i])
      const s = box(1.5, 2, 1.5, m); s.position.set(x, 0, z)
      const a = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.15, 0.8), m); a.position.set(x, 2.08, z - 0.5)
      g.add(s, a)
    })
    return g
  },

  GOVT_OFFICE() {
    const g = new THREE.Group()
    g.add(box(7, 5, 4, lmat(0x023e8a)))
    for (const x of [-3, -1.5, 0, 1.5, 3]) { const p = cyl(0.2, 0.25, 5, 8, M.white); p.position.set(x, 0, 2.2); g.add(p) }
    const dome = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), M.white)
    dome.position.y = 5; g.add(dome)
    g.add(cyl(0.06, 0.06, 2, 4, M.grey, 6.2), box(0.8, 0.4, 0.05, M.red, 7.4))
    return g
  },

  PETROL_PUMP() {
    const g = new THREE.Group()
    for (const [x, z] of [[-2.5, -2], [2.5, -2], [-2.5, 2], [2.5, 2]] as [number, number][]) {
      const p = cyl(0.12, 0.12, 3, 6, M.grey); p.position.set(x, 0, z); g.add(p)
    }
    g.add(box(6.5, 0.25, 5.5, lmat(0x48cae4), 3.1))
    for (const x of [-1, 1]) { const p = box(0.8, 1.5, 0.6, lmat(0xf77f00)); p.position.x = x; g.add(p) }
    g.add(box(4, 0.5, 0.1, M.yellow, 3.5))
    return g
  },

  CHAI_STALL() {
    const g = new THREE.Group()
    g.add(box(2, 1.8, 1.5, lmat(0xa2d729)), box(2, 0.15, 0.4, M.white, 1.2))
    g.add(cyl(0.06, 0.06, 2, 4, M.grey, 1.9))
    const canopy = new THREE.Mesh(new THREE.ConeGeometry(1.4, 0.6, 8, 1, true), M.yellow)
    canopy.position.y = 2.9; g.add(canopy)
    const kettle = cyl(0.25, 0.3, 0.4, 8, lmat(0xaaaaaa)); kettle.position.set(0.5, 1.35, 0); g.add(kettle)
    return g
  },

  PHARMACY() {
    const g = new THREE.Group()
    g.add(box(2.5, 2.5, 2, M.green), box(1.0, 0.3, 0.1, M.white, 1.5), box(0.3, 1.0, 0.1, M.white, 1.5))
    g.add(box(3, 0.2, 2.5, M.white, 2.6))
    return g
  },

  MALL() {
    const g = new THREE.Group()
    g.add(box(7, 4, 6, lmat(0xf72585)))
    const atrium = new THREE.Mesh(new THREE.CylinderGeometry(2, 2.2, 1.5, 16), lmat(0x99d5e8))
    atrium.position.y = 4.75; g.add(atrium)
    g.add(box(3, 0.2, 1.5, M.yellow, 2.6), box(5, 0.7, 0.1, lmat(0xff006e), 3.8))
    return g
  },

  POLICE_STATION() {
    const g = new THREE.Group()
    const bl = lmat(0x3a86ff)
    g.add(box(5, 4, 3.5, bl))
    const tower = box(1.2, 5, 1.2, bl); tower.position.x = 2.5; g.add(tower)
    const cap   = cone(1, 0.8, 4, lmat(0x1d4e89), 5.4); cap.position.x = 2.5; g.add(cap)
    g.add(box(3, 2, 0.2, M.grey, 1), cyl(0.06, 0.06, 2.5, 4, M.grey, 4.25), box(0.8, 0.4, 0.05, M.red, 5.65))
    return g
  },

  WAREHOUSE() {
    const g = new THREE.Group()
    g.add(box(9, 3, 6, lmat(0x8d99ae)), box(9, 0.3, 6.2, M.grey, 3.15))
    for (const x of [-3, 0, 3]) { const b = box(2, 2, 0.2, M.grey, 1); b.position.set(x, 0, 3.1); g.add(b) }
    g.add(cyl(0.2, 0.2, 1.5, 6, M.grey, 3.75))
    return g
  },
}

// ── POISceneObject ─────────────────────────────────────────────────────────────

export interface POISceneObject {
  poi:      WorldPOI
  group:    THREE.Group
  label:    THREE.Sprite
  position: THREE.Vector3
}

// ── POIManager ─────────────────────────────────────────────────────────────────

export class POIManager {
  private objects: POISceneObject[] = []

  constructor(private scene: THREE.Scene) {}

  buildAll(world: WorldData) {
    for (const poi of world.pois) this.buildOne(poi)
  }

  private buildOne(poi: WorldPOI) {
    const dir  = poiDir(poi)
    const def  = DEF_MAP[poi.type]

    // 3D building
    const builder = BUILDERS[poi.type]
    const group   = builder ? builder() : new THREE.Group()
    alignToSurface(group, dir)
    this.scene.add(group)

    // Floating label sprite
    const labelH  = (def?.buildingHeight ?? 3) + 3.5
    const label   = makeLabelSprite(poi)
    label.position.copy(dir.clone().multiplyScalar(PLANET_RADIUS + labelH))
    this.scene.add(label)

    // Ground ring marker
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.8, 2.5, 16),
      new THREE.MeshBasicMaterial({ color: poi.color, side: THREE.DoubleSide, depthWrite: false, transparent: true, opacity: 0.85 })
    )
    ring.renderOrder = 1
    alignToSurface(ring, dir, 0.12)
    this.scene.add(ring)

    this.objects.push({
      poi,
      group,
      label,
      position: new THREE.Vector3(poi.position.x, poi.position.y, poi.position.z),
    })
  }

  /** Nearest POI within `radius` world units of `point`, or null */
  nearestPOI(point: THREE.Vector3, radius = 8): WorldPOI | null {
    let best: WorldPOI | null = null
    let bestD = radius
    for (const obj of this.objects) {
      const d = point.distanceTo(obj.position)
      if (d < bestD) { bestD = d; best = obj.poi }
    }
    return best
  }

  getObjects(): POISceneObject[] { return this.objects }
}
