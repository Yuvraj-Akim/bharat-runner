import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'
import type { WorldPOI } from './WorldData'

// Vertical light beam marking the active mission destination.
// Positioned on the POI surface normal so it stabs straight up from the planet.

const BEAM_HEIGHT = 240   // tall enough to see from anywhere on a R=50 planet
const BEAM_GEO = new THREE.CylinderGeometry(0.15, 1.2, BEAM_HEIGHT, 8, 1, true)
const RING_GEO = new THREE.RingGeometry(4, 7, 32)
const PULSE_GEO = new THREE.RingGeometry(2, 8, 32)

export class BeaconSystem {
  private group:    THREE.Group
  private beamMat:  THREE.MeshBasicMaterial
  private ringMat:  THREE.MeshBasicMaterial
  private pulseMat: THREE.MeshBasicMaterial
  private pulseRing: THREE.Mesh
  private pulseT = 0

  constructor(private scene: THREE.Scene) {
    this.beamMat = new THREE.MeshBasicMaterial({
      color: 0x00ffaa, transparent: true, opacity: 0.3,
      side: THREE.DoubleSide, depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    this.ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ffaa, transparent: true, opacity: 0.8,
      side: THREE.DoubleSide, depthWrite: false,
    })
    this.pulseMat = new THREE.MeshBasicMaterial({
      color: 0x00ffaa, transparent: true, opacity: 0.5,
      side: THREE.DoubleSide, depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const beam = new THREE.Mesh(BEAM_GEO, this.beamMat)
    beam.position.y = BEAM_HEIGHT / 2

    const ring = new THREE.Mesh(RING_GEO, this.ringMat)
    ring.rotation.x = -Math.PI / 2
    ring.position.y = 0.15

    this.pulseRing = new THREE.Mesh(PULSE_GEO, this.pulseMat)
    this.pulseRing.rotation.x = -Math.PI / 2
    this.pulseRing.position.y = 0.1

    this.group = new THREE.Group()
    this.group.add(beam, ring, this.pulseRing)
    this.group.visible = false
    scene.add(this.group)
  }

  setDestination(poi: WorldPOI | null, cssColor: string) {
    if (!poi) { this.group.visible = false; return }

    const up  = new THREE.Vector3(poi.dir.x, poi.dir.y, poi.dir.z).normalize()
    const pos = up.clone().multiplyScalar(PLANET_RADIUS + 0.5)
    this.group.position.copy(pos)

    // Orient group so +Y = surface normal (beam extends outward)
    const worldY = new THREE.Vector3(0, 1, 0)
    let right = new THREE.Vector3().crossVectors(up, worldY)
    if (right.lengthSq() < 0.001) right.set(1, 0, 0)
    right.normalize()
    const forward = new THREE.Vector3().crossVectors(right, up).normalize()
    this.group.quaternion.setFromRotationMatrix(
      new THREE.Matrix4().makeBasis(right, up, forward)
    )

    const col = new THREE.Color(cssColor)
    this.beamMat.color.copy(col)
    this.ringMat.color.copy(col)
    this.pulseMat.color.copy(col)
    this.group.visible = true
  }

  update(dt: number) {
    if (!this.group.visible) return
    this.pulseT += dt * 1.8
    const p = 0.5 + 0.5 * Math.sin(this.pulseT)
    this.pulseMat.opacity = 0.15 + 0.35 * p
    const s = 1 + 0.6 * p
    this.pulseRing.scale.setScalar(s)
    this.beamMat.opacity = 0.15 + 0.15 * p
  }

  dispose() { this.scene.remove(this.group) }
}
