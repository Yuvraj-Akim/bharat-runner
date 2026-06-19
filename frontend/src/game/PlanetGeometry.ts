import * as THREE from 'three'

// Low-poly icosphere planet with biome coloring
export const PLANET_RADIUS = 50

interface BiomeZone {
  minY: number // normalized -1..1
  maxY: number
  color: THREE.Color
  name: string
}

const BIOMES: BiomeZone[] = [
  { minY: -1.0, maxY: -0.7, color: new THREE.Color(0x1a6b8a), name: 'ocean' },
  { minY: -0.7, maxY: -0.4, color: new THREE.Color(0xd4a843), name: 'sand' },
  { minY: -0.4, maxY: 0.1,  color: new THREE.Color(0x4a7c3f), name: 'grass' },
  { minY: 0.1,  maxY: 0.5,  color: new THREE.Color(0x3d6b35), name: 'forest' },
  { minY: 0.5,  maxY: 0.75, color: new THREE.Color(0x7a6b55), name: 'mountain' },
  { minY: 0.75, maxY: 1.0,  color: new THREE.Color(0xe8e8e8), name: 'snow' },
]

function getBiomeColor(normalizedY: number): THREE.Color {
  for (const biome of BIOMES) {
    if (normalizedY >= biome.minY && normalizedY <= biome.maxY) {
      return biome.color.clone()
    }
  }
  return BIOMES[2].color.clone()
}

// Subdivide icosahedron faces for low-poly sphere
function createIcosphere(subdivisions: number, radius: number): THREE.BufferGeometry {
  const t = (1 + Math.sqrt(5)) / 2

  // 12 icosahedron vertices
  const vertices: number[] = [
    -1,  t,  0,   1,  t,  0,  -1, -t,  0,   1, -t,  0,
     0, -1,  t,   0,  1,  t,   0, -1, -t,   0,  1, -t,
     t,  0, -1,   t,  0,  1,  -t,  0, -1,  -t,  0,  1,
  ]

  // 20 icosahedron faces
  let faces: [number, number, number][] = [
    [0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],
    [1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],
    [3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],
    [4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1],
  ]

  let verts: THREE.Vector3[] = []
  for (let i = 0; i < vertices.length; i += 3) {
    verts.push(new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]).normalize())
  }

  const midCache = new Map<string, number>()
  function getMid(a: number, b: number): number {
    const key = a < b ? `${a}_${b}` : `${b}_${a}`
    if (midCache.has(key)) return midCache.get(key)!
    const mid = verts[a].clone().add(verts[b]).normalize()
    verts.push(mid)
    const idx = verts.length - 1
    midCache.set(key, idx)
    return idx
  }

  for (let s = 0; s < subdivisions; s++) {
    const next: [number, number, number][] = []
    for (const [a, b, c] of faces) {
      const ab = getMid(a, b)
      const bc = getMid(b, c)
      const ca = getMid(c, a)
      next.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca])
    }
    faces = next
  }

  // Build flat-shaded geometry (each face has its own 3 vertices for distinct normals)
  const posArr: number[] = []
  const colArr: number[] = []
  const norArr: number[] = []

  // Seed-based noise for terrain height variation
  function pseudoNoise(x: number, y: number, z: number): number {
    const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453
    return (n - Math.floor(n)) * 2 - 1
  }

  for (const [ai, bi, ci] of faces) {
    const va = verts[ai]
    const vb = verts[bi]
    const vc = verts[ci]

    // Compute face center for biome + slight height noise
    const center = va.clone().add(vb).add(vc).divideScalar(3).normalize()
    const heightNoise = pseudoNoise(center.x, center.y, center.z) * 0.03
    const heightScale = 1 + heightNoise

    const pa = va.clone().multiplyScalar(radius * (1 + pseudoNoise(va.x, va.y, va.z) * 0.025))
    const pb = vb.clone().multiplyScalar(radius * (1 + pseudoNoise(vb.x, vb.y, vb.z) * 0.025))
    const pc = vc.clone().multiplyScalar(radius * (1 + pseudoNoise(vc.x, vc.y, vc.z) * 0.025))

    posArr.push(pa.x, pa.y, pa.z, pb.x, pb.y, pb.z, pc.x, pc.y, pc.z)

    // Flat normal = face normal
    const edge1 = pb.clone().sub(pa)
    const edge2 = pc.clone().sub(pa)
    const normal = edge1.cross(edge2).normalize()
    for (let i = 0; i < 3; i++) norArr.push(normal.x, normal.y, normal.z)

    // Color by biome (use center Y for zone lookup, add jitter)
    const baseColor = getBiomeColor(center.y)
    const jitter = 0.05
    const r = Math.max(0, Math.min(1, baseColor.r + (Math.random() - 0.5) * jitter))
    const g = Math.max(0, Math.min(1, baseColor.g + (Math.random() - 0.5) * jitter))
    const b = Math.max(0, Math.min(1, baseColor.b + (Math.random() - 0.5) * jitter))
    for (let i = 0; i < 3; i++) colArr.push(r, g, b)
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(posArr, 3))
  geo.setAttribute('normal',   new THREE.Float32BufferAttribute(norArr, 3))
  geo.setAttribute('color',    new THREE.Float32BufferAttribute(colArr, 3))
  return geo
}

export function createPlanet(): THREE.Mesh {
  const geo = createIcosphere(4, PLANET_RADIUS)
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.receiveShadow = true
  mesh.castShadow = false
  return mesh
}

// Return the surface normal (gravity up direction) at world position
export function getSurfaceNormal(worldPos: THREE.Vector3): THREE.Vector3 {
  return worldPos.clone().normalize()
}

// Project a world position onto the planet surface
export function projectToSurface(worldPos: THREE.Vector3, targetRadius?: number): THREE.Vector3 {
  return worldPos.clone().normalize().multiplyScalar(targetRadius ?? PLANET_RADIUS)
}
