import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'

// Places ambient vegetation and rocks on the planet surface.
// POI buildings are handled by POIManager — no landmark duplication here.
export function addDecorations(scene: THREE.Scene) {
  addTrees(scene, 120)
  addRocks(scene, 60)
}

function placeOnSurface(obj: THREE.Object3D, direction: THREE.Vector3, height: number = 0) {
  const up = direction.clone().normalize()
  const pos = up.clone().multiplyScalar(PLANET_RADIUS + height)
  obj.position.copy(pos)

  // Align +Y to surface normal
  const worldY = new THREE.Vector3(0, 1, 0)
  const tangent = new THREE.Vector3().crossVectors(up, worldY).normalize()
  if (tangent.lengthSq() < 0.001) tangent.set(1, 0, 0)
  const mat = new THREE.Matrix4().makeBasis(
    tangent,
    up,
    new THREE.Vector3().crossVectors(tangent, up).normalize()
  )
  obj.quaternion.setFromRotationMatrix(mat)
}

function randomSphereDir(): THREE.Vector3 {
  const theta = Math.random() * Math.PI * 2
  const phi   = Math.acos(2 * Math.random() - 1)
  return new THREE.Vector3(
    Math.sin(phi) * Math.cos(theta),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta)
  )
}

function addTrees(scene: THREE.Scene, count: number) {
  const trunkGeo  = new THREE.CylinderGeometry(0.15, 0.25, 1.5, 6)
  const crownGeo  = new THREE.ConeGeometry(0.8, 2.0, 6)
  const trunkMat  = new THREE.MeshLambertMaterial({ color: 0x6b3d0f })
  const crownMat  = new THREE.MeshLambertMaterial({ color: 0x2d7a2d })

  for (let i = 0; i < count; i++) {
    const dir = randomSphereDir()
    // Only place trees in grass/forest latitudes
    if (Math.abs(dir.y) > 0.7) continue

    const tree = new THREE.Group()
    const trunk = new THREE.Mesh(trunkGeo, trunkMat)
    trunk.position.y = 0.75
    trunk.castShadow = true
    const crown = new THREE.Mesh(crownGeo, crownMat)
    crown.position.y = 2.2
    crown.castShadow = true
    tree.add(trunk, crown)

    placeOnSurface(tree, dir)
    scene.add(tree)
  }
}

function addRocks(scene: THREE.Scene, count: number) {
  const rockMat = new THREE.MeshLambertMaterial({ color: 0x888888 })
  for (let i = 0; i < count; i++) {
    const dir = randomSphereDir()
    const scale = 0.3 + Math.random() * 0.7
    const geo = new THREE.DodecahedronGeometry(scale, 0)
    const rock = new THREE.Mesh(geo, rockMat)
    rock.castShadow = true
    placeOnSurface(rock, dir, scale * 0.3)
    scene.add(rock)
  }
}

