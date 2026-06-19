import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'
import { alignToSurface } from './POIManager'
import { type WorldData } from './WorldData'

// ── Constants ─────────────────────────────────────────────────────────────────

const LAMP_HEX    = 0xffe566   // warm sodium yellow
const POLE_COLOR  = 0x7a7a8c
const POST_HEIGHT = 3.5        // world units tall

// ── StreetLights ──────────────────────────────────────────────────────────────
//
// Two emissive lamp posts flank every POI.
// No PointLights — they force a complex fragment-shader compile for every
// MeshLambertMaterial in the scene and can silently fail on some GPUs.
// The emissive glow is sufficient for a visual "lights on at night" effect.

export class StreetLights {
  private headMats: THREE.MeshLambertMaterial[] = []

  constructor(scene: THREE.Scene, world: WorldData) {
    for (const poi of world.pois) {
      const dir = new THREE.Vector3(poi.dir.x, poi.dir.y, poi.dir.z)
      this.headMats.push(this.buildPost(scene, this.sideDir(dir, +5)))
      this.headMats.push(this.buildPost(scene, this.sideDir(dir, -5)))
    }
  }

  // daytimeRatio: 0 = night, 1 = noon (from DayNightCycle)
  update(daytimeRatio: number) {
    const nightT = Math.max(0, Math.min(1, 1 - daytimeRatio * 4))
    for (const mat of this.headMats) {
      mat.emissiveIntensity = nightT
    }
  }

  // ── Private ───────────────────────────────────────────────────────────────

  private buildPost(scene: THREE.Scene, dir: THREE.Vector3): THREE.MeshLambertMaterial {
    const group   = new THREE.Group()
    alignToSurface(group, dir)

    const poleMat = new THREE.MeshLambertMaterial({ color: POLE_COLOR })

    // Vertical pole
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.09, POST_HEIGHT, 6),
      poleMat,
    )
    pole.position.y = POST_HEIGHT / 2
    pole.castShadow = true
    group.add(pole)

    // Horizontal arm extending in local +X
    const arm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 1.1, 4),
      poleMat,
    )
    arm.rotation.z = Math.PI / 2
    arm.position.set(0.55, POST_HEIGHT, 0)
    group.add(arm)

    // Shade cap
    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.18, 0.25, 8),
      poleMat,
    )
    cap.position.set(1.1, POST_HEIGHT + 0.3, 0)
    group.add(cap)

    // Glowing lamp globe — emissive intensity driven by update()
    const headMat = new THREE.MeshLambertMaterial({
      color:             LAMP_HEX,
      emissive:          new THREE.Color(LAMP_HEX),
      emissiveIntensity: 0,
    })
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), headMat)
    head.position.set(1.1, POST_HEIGHT, 0)
    group.add(head)

    scene.add(group)
    return headMat
  }

  // Offset `baseDir` by `units` world-units in the surface tangent-right direction,
  // then renormalize back to the unit sphere.
  private sideDir(baseDir: THREE.Vector3, units: number): THREE.Vector3 {
    const up = baseDir.clone().normalize()
    const worldY = new THREE.Vector3(0, 1, 0)
    let right = new THREE.Vector3().crossVectors(up, worldY)
    if (right.lengthSq() < 1e-6) right.set(1, 0, 0)
    right.normalize()
    return up.clone()
      .multiplyScalar(PLANET_RADIUS)
      .addScaledVector(right, units)
      .normalize()
  }
}
