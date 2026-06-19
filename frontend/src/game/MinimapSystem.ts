import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'
import { type WorldData, type WorldPOI } from './WorldData'

// ── Player-relative azimuthal projection ──────────────────────────────────────
//
// Build a local tangent frame at the player's surface position:
//   up      = normalize(playerPos)         (away from planet centre)
//   right   = cross(up, worldY).normalize()
//   forward = cross(right, up).normalize()
//
// Then for each world point P, compute:
//   delta   = P - playerPos
//   dx      = delta · right
//   dy      = delta · forward    (positive = ahead of player)
//
// Scale: MAP_WORLD_RADIUS world-units maps to DISPLAY_RADIUS canvas px
// This shows ~60% of the full planet at once; points beyond MAP_WORLD_RADIUS
// are clamped to the circle edge with an arrow indicator.

const MAP_WORLD_RADIUS  = 120  // world units captured in minimap
const DISPLAY_RADIUS    = 72   // canvas px radius of the map circle
const CANVAS_SIZE       = 180  // total canvas width/height (px)
const CX = CANVAS_SIZE / 2
const CY = CANVAS_SIZE / 2

interface MinimapPOI { poi: WorldPOI; wx: number; wy: number }  // world-space projection

function hexColor(hex: number): string {
  return `#${hex.toString(16).padStart(6, '0')}`
}

export class MinimapSystem {
  private pois: MinimapPOI[] = []
  private roads: Array<{ ax: number; ay: number; bx: number; by: number }> = []
  private _poiWorldDirs: Array<THREE.Vector3> = []
  private worldData: WorldData | null = null

  constructor(private canvas: HTMLCanvasElement) {
    canvas.width  = CANVAS_SIZE
    canvas.height = CANVAS_SIZE
  }

  loadWorld(world: WorldData) {
    this.worldData = world
    // Pre-cache world positions
    this._poiWorldDirs = world.pois.map(p =>
      new THREE.Vector3(p.position.x, p.position.y, p.position.z)
    )
  }

  /** Call once per frame with current player state */
  draw(playerPos: THREE.Vector3, playerQuat: THREE.Quaternion) {
    const ctx = this.canvas.getContext('2d')
    if (!ctx || !this.worldData) return

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

    // --- Build local tangent frame at player position ---
    const up = playerPos.clone().normalize()
    const worldY = new THREE.Vector3(0, 1, 0)
    let right = new THREE.Vector3().crossVectors(up, worldY)
    if (right.lengthSq() < 1e-6) right.set(1, 0, 0)
    right.normalize()
    const forward = new THREE.Vector3().crossVectors(right, up).normalize()

    const project = (worldPoint: THREE.Vector3): { cx: number; cy: number; inside: boolean } => {
      const delta = worldPoint.clone().sub(playerPos)
      const dx    =  delta.dot(right)   / MAP_WORLD_RADIUS * DISPLAY_RADIUS
      const dy    = -delta.dot(forward) / MAP_WORLD_RADIUS * DISPLAY_RADIUS  // Y flipped for canvas
      const dist  = Math.sqrt(dx * dx + dy * dy)
      const inside = dist <= DISPLAY_RADIUS
      if (inside) {
        return { cx: CX + dx, cy: CY + dy, inside: true }
      }
      // Clamp to circle edge
      const scale = DISPLAY_RADIUS / dist
      return { cx: CX + dx * scale, cy: CY + dy * scale, inside: false }
    }

    // --- Draw background circle ---
    ctx.save()
    ctx.beginPath()
    ctx.arc(CX, CY, DISPLAY_RADIUS, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(10,14,26,0.82)'
    ctx.fill()
    ctx.strokeStyle = 'rgba(255,255,255,0.18)'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.restore()

    // Clip everything inside the circle
    ctx.save()
    ctx.beginPath()
    ctx.arc(CX, CY, DISPLAY_RADIUS - 1, 0, Math.PI * 2)
    ctx.clip()

    // --- Grid rings (distance indicators) ---
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'
    ctx.lineWidth = 1
    for (const frac of [0.33, 0.66]) {
      ctx.beginPath()
      ctx.arc(CX, CY, DISPLAY_RADIUS * frac, 0, Math.PI * 2)
      ctx.stroke()
    }

    // --- Roads ---
    if (this.worldData.roads.length > 0) {
      const poiMap = new Map(this.worldData.pois.map(p => [p.id, p]))
      ctx.strokeStyle = 'rgba(150,120,80,0.45)'
      ctx.lineWidth   = 2
      for (const edge of this.worldData.roads) {
        const a = poiMap.get(edge.from)
        const b = poiMap.get(edge.to)
        if (!a || !b) continue
        const pa = project(this._poiWorldDirs[edge.from])
        const pb = project(this._poiWorldDirs[edge.to])
        ctx.beginPath()
        ctx.moveTo(pa.cx, pa.cy)
        ctx.lineTo(pb.cx, pb.cy)
        ctx.stroke()
      }
    }

    // --- POI dots ---
    for (let i = 0; i < this.worldData.pois.length; i++) {
      const poi = this.worldData.pois[i]
      const { cx, cy, inside } = project(this._poiWorldDirs[i])
      const clr = hexColor(poi.color)

      if (inside) {
        // Full dot
        ctx.beginPath()
        ctx.arc(cx, cy, 5, 0, Math.PI * 2)
        ctx.fillStyle = clr
        ctx.fill()
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Emoji label for very nearby POIs
        const dist = playerPos.distanceTo(this._poiWorldDirs[i])
        if (dist < 30) {
          ctx.font = '11px serif'
          ctx.fillText(poi.emoji, cx + 7, cy + 4)
        }
      } else {
        // Arrow at edge pointing to out-of-view POI
        ctx.save()
        ctx.translate(cx, cy)
        const angle = Math.atan2(cy - CY, cx - CX)
        ctx.rotate(angle + Math.PI / 2)
        ctx.beginPath()
        ctx.moveTo(0, -5); ctx.lineTo(4, 3); ctx.lineTo(-4, 3); ctx.closePath()
        ctx.fillStyle = clr
        ctx.globalAlpha = 0.7
        ctx.fill()
        ctx.restore()
      }
    }

    ctx.restore()  // restore clip

    // --- Player dot at centre (always) ---
    // Player heading: project facing direction onto tangent plane
    const facing = new THREE.Vector3(0, 0, -1).applyQuaternion(playerQuat)
    const facingX =  facing.dot(right)
    const facingY = -facing.dot(forward)
    const headingAngle = Math.atan2(facingX, facingY)

    ctx.save()
    ctx.translate(CX, CY)
    ctx.rotate(headingAngle)

    // Outer glow
    ctx.beginPath()
    ctx.arc(0, 0, 8, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255,255,255,0.25)'
    ctx.fill()

    // Player arrow
    ctx.beginPath()
    ctx.moveTo(0, -8); ctx.lineTo(5, 5); ctx.lineTo(0, 2); ctx.lineTo(-5, 5); ctx.closePath()
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.restore()

    // --- Border ring ---
    ctx.beginPath()
    ctx.arc(CX, CY, DISPLAY_RADIUS, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(255,200,100,0.5)'
    ctx.lineWidth = 2
    ctx.stroke()

    // --- "N" north indicator ---
    const northDir = new THREE.Vector3(0, 1, 0)  // approximate north
    const northProj = project(playerPos.clone().add(northDir.multiplyScalar(MAP_WORLD_RADIUS * 0.8)))
    ctx.font = 'bold 10px sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.5)'
    ctx.fillText('N', northProj.cx - 4, northProj.cy + 4)
  }

  /** Canvas element to mount in Vue template */
  get element(): HTMLCanvasElement { return this.canvas }
}
