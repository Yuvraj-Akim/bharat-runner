import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'
import type { WorldData, WorldPOI } from './WorldData'

// Instanced city decorations placed around POIs.
// Uses InstancedMesh throughout — total draw calls ~20 regardless of count.

function sRnd(seed: number): number {
  const x = Math.sin(seed * 9301.0 + 49297.0) * 233280.0
  return x - Math.floor(x)
}

// Build a Matrix4 that places an object on the planet surface at `dir`
// with +Y aligned to the surface normal and optional yaw rotation.
function surfaceMat(
  dir: THREE.Vector3,
  yOffset: number,
  yaw = 0,
  _tmp = new THREE.Vector3(),
  _up = new THREE.Vector3(),
): THREE.Matrix4 {
  _up.copy(dir).normalize()
  const pos = _up.clone().multiplyScalar(PLANET_RADIUS + yOffset)
  const worldY = new THREE.Vector3(0, 1, 0)
  let right = _tmp.crossVectors(_up, worldY)
  if (right.lengthSq() < 0.001) right.set(1, 0, 0)
  right = right.clone().normalize()
  const fwd = new THREE.Vector3().crossVectors(right, _up).normalize()
  if (yaw !== 0) {
    const q = new THREE.Quaternion().setFromAxisAngle(_up, yaw)
    right.applyQuaternion(q)
    fwd.applyQuaternion(q)
  }
  return new THREE.Matrix4().makeBasis(right, _up, fwd).setPosition(pos)
}

// Returns a direction near `poi.dir` using deterministic seeded offsets.
function nearDir(poi: WorldPOI, seed: number, spread: number): THREE.Vector3 {
  const base = new THREE.Vector3(poi.dir.x, poi.dir.y, poi.dir.z)
  const worldY = new THREE.Vector3(0, 1, 0)
  let right = new THREE.Vector3().crossVectors(base, worldY)
  if (right.lengthSq() < 0.001) right.set(1, 0, 0)
  right.normalize()
  const fwd = new THREE.Vector3().crossVectors(right, base).normalize()
  const angle  = sRnd(seed) * Math.PI * 2
  const radius = sRnd(seed + 0.3) * spread
  return base.clone()
    .addScaledVector(right, Math.cos(angle) * radius)
    .addScaledVector(fwd,   Math.sin(angle) * radius)
    .normalize()
}

function lmat(c: number) {
  return new THREE.MeshLambertMaterial({ color: c })
}

// ── Houses (InstancedMesh) ─────────────────────────────────────────────────────

const HOUSE_WALL_MATS = [
  lmat(0xd4a574), lmat(0xf0c87a), lmat(0xd4886a),
  lmat(0xc8b89a), lmat(0xe8dcc8), lmat(0xb8a090),
]
const HOUSE_ROOF_MATS = [
  lmat(0xc0392b), lmat(0xe74c3c), lmat(0x8e44ad),
  lmat(0x2980b9), lmat(0x27ae60), lmat(0xf39c12),
]

const WALL_GEO = new THREE.BoxGeometry(2.4, 2.2, 2.0)
const ROOF_GEO = new THREE.ConeGeometry(1.9, 1.1, 4)

function addHouses(scene: THREE.Scene, world: WorldData) {
  const PER_POI = 4
  const total   = world.pois.length * PER_POI

  const wallInst = HOUSE_WALL_MATS.map(() =>
    new THREE.InstancedMesh(WALL_GEO, HOUSE_WALL_MATS[0], Math.ceil(total / HOUSE_WALL_MATS.length))
  )
  const roofInst = HOUSE_ROOF_MATS.map(() =>
    new THREE.InstancedMesh(ROOF_GEO, HOUSE_ROOF_MATS[0], Math.ceil(total / HOUSE_ROOF_MATS.length))
  )
  // Assign correct materials (InstancedMesh uses per-object material from constructor)
  for (let i = 0; i < HOUSE_WALL_MATS.length; i++) wallInst[i].material = HOUSE_WALL_MATS[i]
  for (let i = 0; i < HOUSE_ROOF_MATS.length; i++) roofInst[i].material = HOUSE_ROOF_MATS[i]

  const wallCount = new Array(HOUSE_WALL_MATS.length).fill(0)
  const roofCount = new Array(HOUSE_ROOF_MATS.length).fill(0)

  let idx = 0
  for (const poi of world.pois) {
    for (let i = 0; i < PER_POI; i++, idx++) {
      const seed = idx * 0.61803
      const dir  = nearDir(poi, seed, 0.28)
      const yaw  = sRnd(seed + 1.5) * Math.PI * 2
      const wBin = idx % HOUSE_WALL_MATS.length
      const rBin = (idx + 2) % HOUSE_ROOF_MATS.length

      const wallMat = surfaceMat(dir, 1.1, yaw)
      wallInst[wBin].setMatrixAt(wallCount[wBin]++, wallMat)

      const roofDir = dir.clone()
      const roofM   = surfaceMat(roofDir, 2.75, yaw)
      roofInst[rBin].setMatrixAt(roofCount[rBin]++, roofM)
    }
  }

  for (let i = 0; i < HOUSE_WALL_MATS.length; i++) {
    wallInst[i].count = wallCount[i]
    wallInst[i].instanceMatrix.needsUpdate = true
    wallInst[i].castShadow = true
    scene.add(wallInst[i])
  }
  for (let i = 0; i < HOUSE_ROOF_MATS.length; i++) {
    roofInst[i].count = roofCount[i]
    roofInst[i].instanceMatrix.needsUpdate = true
    roofInst[i].castShadow = true
    scene.add(roofInst[i])
  }
}

// ── Market stalls ──────────────────────────────────────────────────────────────

const STALL_POST_GEO    = new THREE.CylinderGeometry(0.07, 0.07, 2.2, 6)
const STALL_TABLE_GEO   = new THREE.BoxGeometry(2.4, 0.12, 1.1)
const STALL_CANOPY_MATS = [
  lmat(0xff6b35), lmat(0xf7c59f), lmat(0x43aa8b),
  lmat(0x577590), lmat(0xf3722c), lmat(0x90be6d),
]
const STALL_CANOPY_GEO = new THREE.BoxGeometry(2.7, 0.1, 1.4)
const STALL_POST_MAT   = lmat(0x8B4513)
const STALL_TABLE_MAT  = lmat(0xd4a574)

function addMarketStalls(scene: THREE.Scene, world: WorldData) {
  const PER_POI = 2
  const total   = world.pois.length * PER_POI

  const postCount  = total * 4   // 4 posts per stall
  const postInst   = new THREE.InstancedMesh(STALL_POST_GEO,   STALL_POST_MAT,  postCount)
  const tableInst  = new THREE.InstancedMesh(STALL_TABLE_GEO,  STALL_TABLE_MAT, total)
  const canopyInst = STALL_CANOPY_MATS.map(() =>
    new THREE.InstancedMesh(STALL_CANOPY_GEO, STALL_CANOPY_MATS[0], Math.ceil(total / STALL_CANOPY_MATS.length))
  )
  for (let i = 0; i < STALL_CANOPY_MATS.length; i++) canopyInst[i].material = STALL_CANOPY_MATS[i]
  const canopyCount = new Array(STALL_CANOPY_MATS.length).fill(0)

  let si = 0, pi = 0
  const postOffsets: [number, number][] = [[-1.05, -0.5], [1.05, -0.5], [-1.05, 0.5], [1.05, 0.5]]

  for (const poi of world.pois) {
    for (let k = 0; k < PER_POI; k++, si++) {
      const seed = si * 0.38197 + 50
      const dir  = nearDir(poi, seed, 0.20)
      const yaw  = sRnd(seed + 2.1) * Math.PI * 2
      const up   = dir.clone().normalize()
      const worldY = new THREE.Vector3(0, 1, 0)
      let right = new THREE.Vector3().crossVectors(up, worldY).normalize()
      if (right.lengthSq() < 0.001) right.set(1, 0, 0)
      const fwd  = new THREE.Vector3().crossVectors(right, up).normalize()

      const q = new THREE.Quaternion().setFromAxisAngle(up, yaw)
      const rightR = right.clone().applyQuaternion(q)
      const fwdR   = fwd.clone().applyQuaternion(q)
      const basePt = up.clone().multiplyScalar(PLANET_RADIUS + 0.2)

      // 4 posts
      for (const [ox, oz] of postOffsets) {
        const postPos = basePt.clone()
          .addScaledVector(rightR, ox)
          .addScaledVector(fwdR,  oz)
          .addScaledVector(up, 1.1)
        const pMat = new THREE.Matrix4().makeBasis(rightR, up, fwdR).setPosition(postPos)
        postInst.setMatrixAt(pi++, pMat)
      }

      // Table (y offset 0.9)
      tableInst.setMatrixAt(si, surfaceMat(dir, 0.9, yaw))

      // Canopy (y offset 2.2)
      const cBin = si % STALL_CANOPY_MATS.length
      canopyInst[cBin].setMatrixAt(canopyCount[cBin]++, surfaceMat(dir, 2.2, yaw))
    }
  }

  postInst.count  = pi;  postInst.instanceMatrix.needsUpdate  = true; scene.add(postInst)
  tableInst.count = si;  tableInst.instanceMatrix.needsUpdate = true; scene.add(tableInst)
  for (let i = 0; i < STALL_CANOPY_MATS.length; i++) {
    canopyInst[i].count = canopyCount[i]
    canopyInst[i].instanceMatrix.needsUpdate = true
    scene.add(canopyInst[i])
  }
}

// ── Bus stops ─────────────────────────────────────────────────────────────────

const BUS_POLE_GEO  = new THREE.CylinderGeometry(0.1, 0.1, 3.5, 8)
const BUS_ROOF_GEO  = new THREE.BoxGeometry(3.0, 0.15, 1.4)
const BUS_BENCH_GEO = new THREE.BoxGeometry(2.2, 0.15, 0.5)
const BUS_SIGN_GEO  = new THREE.BoxGeometry(0.6, 0.5, 0.05)

const BUS_POLE_MAT  = lmat(0x555555)
const BUS_ROOF_MAT  = lmat(0x2196F3)
const BUS_BENCH_MAT = lmat(0x888888)
const BUS_SIGN_MAT  = lmat(0xffeb3b)

function addBusStops(scene: THREE.Scene, world: WorldData) {
  const total = Math.floor(world.pois.length / 2)  // 1 per 2 POIs

  const poleInst  = new THREE.InstancedMesh(BUS_POLE_GEO,  BUS_POLE_MAT,  total)
  const roofInst  = new THREE.InstancedMesh(BUS_ROOF_GEO,  BUS_ROOF_MAT,  total)
  const benchInst = new THREE.InstancedMesh(BUS_BENCH_GEO, BUS_BENCH_MAT, total)
  const signInst  = new THREE.InstancedMesh(BUS_SIGN_GEO,  BUS_SIGN_MAT,  total)

  let idx = 0
  for (let i = 0; i < world.pois.length; i += 2) {
    const poi  = world.pois[i]
    const seed = i * 0.3 + 77
    const dir  = nearDir(poi, seed, 0.17)
    const yaw  = sRnd(seed + 5) * Math.PI * 2

    poleInst.setMatrixAt(idx,  surfaceMat(dir, 1.75, yaw))
    roofInst.setMatrixAt(idx,  surfaceMat(dir, 3.5,  yaw))
    benchInst.setMatrixAt(idx, surfaceMat(dir, 0.5,  yaw))
    signInst.setMatrixAt(idx,  surfaceMat(dir, 3.0,  yaw))
    idx++
  }

  for (const m of [poleInst, roofInst, benchInst, signInst]) {
    m.count = idx; m.instanceMatrix.needsUpdate = true; scene.add(m)
  }
}

// ── Benches ───────────────────────────────────────────────────────────────────

const BENCH_SEAT_GEO = new THREE.BoxGeometry(1.8, 0.14, 0.5)
const BENCH_BACK_GEO = new THREE.BoxGeometry(1.8, 0.5, 0.1)
const BENCH_LEG_GEO  = new THREE.BoxGeometry(0.12, 0.52, 0.12)
const BENCH_SEAT_MAT = lmat(0xa0522d)
const BENCH_LEG_MAT  = lmat(0x555555)

function addBenches(scene: THREE.Scene, world: WorldData) {
  const PER_POI = 2
  const total   = world.pois.length * PER_POI

  const seatInst = new THREE.InstancedMesh(BENCH_SEAT_GEO, BENCH_SEAT_MAT, total)
  const backInst = new THREE.InstancedMesh(BENCH_BACK_GEO, BENCH_SEAT_MAT, total)
  const legInst  = new THREE.InstancedMesh(BENCH_LEG_GEO,  BENCH_LEG_MAT, total * 4)

  const legOffsets: [number, number][] = [[-0.7, -0.18], [0.7, -0.18], [-0.7, 0.18], [0.7, 0.18]]

  let si = 0, li = 0
  for (const poi of world.pois) {
    for (let k = 0; k < PER_POI; k++, si++) {
      const seed = si * 0.5 + 20
      const dir  = nearDir(poi, seed, 0.13)
      const yaw  = sRnd(seed + 3.3) * Math.PI * 2

      const up     = dir.clone().normalize()
      const worldY = new THREE.Vector3(0, 1, 0)
      let right = new THREE.Vector3().crossVectors(up, worldY)
      if (right.lengthSq() < 0.001) right.set(1, 0, 0)
      right.normalize()
      const fwd = new THREE.Vector3().crossVectors(right, up).normalize()
      const q   = new THREE.Quaternion().setFromAxisAngle(up, yaw)
      const rightR = right.clone().applyQuaternion(q)
      const fwdR   = fwd.clone().applyQuaternion(q)

      seatInst.setMatrixAt(si, surfaceMat(dir, 0.55, yaw))

      const backPt = up.clone().multiplyScalar(PLANET_RADIUS + 0.85)
        .addScaledVector(fwdR, 0.22)
      backInst.setMatrixAt(si, new THREE.Matrix4().makeBasis(rightR, up, fwdR).setPosition(backPt))

      for (const [ox, oz] of legOffsets) {
        const legPt = up.clone().multiplyScalar(PLANET_RADIUS + 0.28)
          .addScaledVector(rightR, ox).addScaledVector(fwdR, oz)
        legInst.setMatrixAt(li++, new THREE.Matrix4().makeBasis(rightR, up, fwdR).setPosition(legPt))
      }
    }
  }

  seatInst.count = si; seatInst.instanceMatrix.needsUpdate = true; scene.add(seatInst)
  backInst.count = si; backInst.instanceMatrix.needsUpdate = true; scene.add(backInst)
  legInst.count  = li; legInst.instanceMatrix.needsUpdate  = true; scene.add(legInst)
}

// ── Extra trees near POIs ─────────────────────────────────────────────────────

const EXTRA_TRUNK_GEO = new THREE.CylinderGeometry(0.12, 0.22, 2.0, 6)
const EXTRA_CROWN_GEO = new THREE.ConeGeometry(1.0, 2.5, 6)
const EXTRA_TRUNK_MAT = lmat(0x6b3d0f)
const EXTRA_CROWN_MATS = [
  lmat(0x2d7a2d), lmat(0x3a8c3a), lmat(0x1a6b1a), lmat(0x4a9c4a),
]

function addExtraTrees(scene: THREE.Scene, world: WorldData) {
  const PER_POI = 3
  const total   = world.pois.length * PER_POI

  const trunkInst = new THREE.InstancedMesh(EXTRA_TRUNK_GEO, EXTRA_TRUNK_MAT, total)
  const crownInst = EXTRA_CROWN_MATS.map(() =>
    new THREE.InstancedMesh(EXTRA_CROWN_GEO, EXTRA_CROWN_MATS[0], Math.ceil(total / EXTRA_CROWN_MATS.length))
  )
  for (let i = 0; i < EXTRA_CROWN_MATS.length; i++) crownInst[i].material = EXTRA_CROWN_MATS[i]
  const crownCount = new Array(EXTRA_CROWN_MATS.length).fill(0)

  let ti = 0
  for (const poi of world.pois) {
    for (let k = 0; k < PER_POI; k++, ti++) {
      const seed = ti * 0.41421 + 30
      const dir  = nearDir(poi, seed, 0.32)
      trunkInst.setMatrixAt(ti, surfaceMat(dir, 1.0))
      const cBin = ti % EXTRA_CROWN_MATS.length
      crownInst[cBin].setMatrixAt(crownCount[cBin]++, surfaceMat(dir, 2.8))
    }
  }

  trunkInst.count = ti; trunkInst.instanceMatrix.needsUpdate = true
  trunkInst.castShadow = true; scene.add(trunkInst)
  for (let i = 0; i < EXTRA_CROWN_MATS.length; i++) {
    crownInst[i].count = crownCount[i]
    crownInst[i].instanceMatrix.needsUpdate = true
    crownInst[i].castShadow = true
    scene.add(crownInst[i])
  }
}

// ── Public API ─────────────────────────────────────────────────────────────────

export function addCityDecorations(scene: THREE.Scene, world: WorldData): void {
  addHouses(scene, world)
  addMarketStalls(scene, world)
  addBusStops(scene, world)
  addBenches(scene, world)
  addExtraTrees(scene, world)
}
