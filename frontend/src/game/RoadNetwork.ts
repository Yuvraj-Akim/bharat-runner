import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'
import { type WorldData, type RoadEdge, type WorldPOI } from './WorldData'

const ROAD_ABOVE   = 0.28   // metres above planet surface
const ROAD_RADIUS  = 0.22   // tube radius
const ARC_SEGMENTS = 28     // sample points along great-circle arc
const TUBE_RADIAL  = 6      // tube cross-section segments

// ── Great-circle arc geometry ─────────────────────────────────────────────────
// Slerp between two unit-sphere directions, then scale to (PLANET_RADIUS + offset)

function greatCirclePoints(
  fromDir: THREE.Vector3,
  toDir:   THREE.Vector3,
  segments: number
): THREE.Vector3[] {
  const out: THREE.Vector3[] = []
  const dot = Math.max(-1, Math.min(1, fromDir.dot(toDir)))
  const omega = Math.acos(dot)

  for (let i = 0; i <= segments; i++) {
    const t = i / segments

    let pt: THREE.Vector3
    if (Math.abs(omega) < 1e-6) {
      pt = fromDir.clone()
    } else {
      // Proper slerp
      const s0 = Math.sin((1 - t) * omega) / Math.sin(omega)
      const s1 = Math.sin(t       * omega) / Math.sin(omega)
      pt = fromDir.clone().multiplyScalar(s0).addScaledVector(toDir, s1)
    }

    out.push(pt.normalize().multiplyScalar(PLANET_RADIUS + ROAD_ABOVE))
  }
  return out
}

// ── Road materials ────────────────────────────────────────────────────────────

const ROAD_MAT = new THREE.MeshLambertMaterial({ color: 0x3d3d3d })
const LINE_MAT = new THREE.LineBasicMaterial({
  color: 0xffff99,
  transparent: true,
  opacity: 0.25,
})

// ── RoadNetwork ───────────────────────────────────────────────────────────────

export class RoadNetwork {
  private roadMeshes: THREE.Mesh[]    = []
  private lineMeshes: THREE.Line[]    = []

  constructor(private scene: THREE.Scene) {}

  buildAll(world: WorldData) {
    const poiMap = new Map<number, WorldPOI>(world.pois.map(p => [p.id, p]))

    for (const edge of world.roads) {
      const a = poiMap.get(edge.from)
      const b = poiMap.get(edge.to)
      if (!a || !b) continue
      this.buildRoad(edge, a, b)
    }
  }

  private buildRoad(_edge: RoadEdge, a: WorldPOI, b: WorldPOI) {
    const dirA = new THREE.Vector3(a.dir.x, a.dir.y, a.dir.z)
    const dirB = new THREE.Vector3(b.dir.x, b.dir.y, b.dir.z)
    const pts  = greatCirclePoints(dirA, dirB, ARC_SEGMENTS)

    // Tube road
    const curve = new THREE.CatmullRomCurve3(pts)
    const tube  = new THREE.TubeGeometry(curve, ARC_SEGMENTS, ROAD_RADIUS, TUBE_RADIAL, false)
    const mesh  = new THREE.Mesh(tube, ROAD_MAT)
    mesh.receiveShadow = true
    this.scene.add(mesh)
    this.roadMeshes.push(mesh)

    // Yellow centre-line dashes (overlay)
    const lineGeo = new THREE.BufferGeometry().setFromPoints(pts)
    const line    = new THREE.Line(lineGeo, LINE_MAT)
    line.renderOrder = 2
    this.scene.add(line)
    this.lineMeshes.push(line)
  }

  dispose() {
    for (const m of this.roadMeshes) {
      m.geometry.dispose()
      this.scene.remove(m)
    }
    for (const l of this.lineMeshes) {
      l.geometry.dispose()
      this.scene.remove(l)
    }
    this.roadMeshes = []
    this.lineMeshes = []
  }
}
