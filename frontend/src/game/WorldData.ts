import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'

// ── Types ────────────────────────────────────────────────────────────────────

export type POIType =
  | 'RAILWAY_STATION' | 'BUS_STAND'      | 'TEMPLE'       | 'HOSPITAL'
  | 'IT_PARK'         | 'COLLEGE'         | 'RESIDENTIAL'  | 'MARKET'
  | 'GOVT_OFFICE'     | 'PETROL_PUMP'     | 'CHAI_STALL'   | 'PHARMACY'
  | 'MALL'            | 'POLICE_STATION'  | 'WAREHOUSE'

export interface POIDefinition {
  type: POIType
  name: string
  emoji: string
  color: number        // hex, used for minimap dot and label bg
  buildingHeight: number
  description: string
}

export interface WorldPOI {
  id: number
  type: POIType
  name: string
  emoji: string
  color: number
  /** Normalized unit-sphere direction */
  dir: { x: number; y: number; z: number }
  /** World position on surface (dir * PLANET_RADIUS) */
  position: { x: number; y: number; z: number }
}

export interface RoadEdge { from: number; to: number }

export interface WorldData {
  version: string
  generatedAt: string
  pois: WorldPOI[]
  roads: RoadEdge[]
}

// ── POI catalogue — 20 instances across 10 required types ────────────────────
// Two instances per type gives natural city variety without repetition fatigue.

export const POI_DEFS: POIDefinition[] = [
  // Railway Stations (2)
  { type: 'RAILWAY_STATION', name: 'Central Station',       emoji: '🚆', color: 0x1d4e89, buildingHeight: 5, description: 'Main rail terminus' },
  { type: 'RAILWAY_STATION', name: 'North Station',          emoji: '🚆', color: 0x1d4e89, buildingHeight: 5, description: 'North rail hub' },
  // Bus Stands (2)
  { type: 'BUS_STAND',       name: 'City Bus Terminus',      emoji: '🚌', color: 0xf77f00, buildingHeight: 3, description: 'Main bus stand' },
  { type: 'BUS_STAND',       name: 'Old Bus Adda',           emoji: '🚌', color: 0xf77f00, buildingHeight: 3, description: 'Historic bus stand' },
  // Temples (2)
  { type: 'TEMPLE',          name: 'Ganesh Mandir',          emoji: '🛕', color: 0xffd166, buildingHeight: 6, description: 'Shri Ganesh temple' },
  { type: 'TEMPLE',          name: 'Shiva Mandir',           emoji: '🛕', color: 0xffd166, buildingHeight: 6, description: 'Lord Shiva temple' },
  // Hospitals (2)
  { type: 'HOSPITAL',        name: 'City Hospital',          emoji: '🏥', color: 0xe63946, buildingHeight: 5, description: 'District hospital' },
  { type: 'HOSPITAL',        name: 'Community Health Ctr',   emoji: '🏥', color: 0xe63946, buildingHeight: 4, description: 'PHC clinic' },
  // IT Parks (2)
  { type: 'IT_PARK',         name: 'TechHub IT Park',        emoji: '💻', color: 0x06d6a0, buildingHeight: 7, description: 'Software campus' },
  { type: 'IT_PARK',         name: 'Silicon Campus',         emoji: '💻', color: 0x06d6a0, buildingHeight: 7, description: 'Tech incubator' },
  // Colleges (2)
  { type: 'COLLEGE',         name: 'Engineering College',    emoji: '🎓', color: 0x7b2d8b, buildingHeight: 4, description: 'Engineering institute' },
  { type: 'COLLEGE',         name: 'Arts & Science College', emoji: '🎓', color: 0x7b2d8b, buildingHeight: 4, description: 'Degree college' },
  // Markets (2)
  { type: 'MARKET',          name: 'Sadar Bazaar',           emoji: '🛒', color: 0xef476f, buildingHeight: 3, description: 'Main market' },
  { type: 'MARKET',          name: 'Gandhi Market',          emoji: '🛒', color: 0xef476f, buildingHeight: 3, description: 'Vegetable market' },
  // Petrol Pumps (2)
  { type: 'PETROL_PUMP',     name: 'HP Petrol Pump',         emoji: '⛽', color: 0x48cae4, buildingHeight: 3, description: 'HP fuel station' },
  { type: 'PETROL_PUMP',     name: 'IOCL Fuel Station',      emoji: '⛽', color: 0x48cae4, buildingHeight: 3, description: 'IOCL outlet' },
  // Malls (2)
  { type: 'MALL',            name: 'City Mall',              emoji: '🏬', color: 0xf72585, buildingHeight: 5, description: 'Main shopping mall' },
  { type: 'MALL',            name: 'D-Mart',                 emoji: '🏬', color: 0xf72585, buildingHeight: 4, description: 'Hypermarket' },
  // Residential Colonies (2)
  { type: 'RESIDENTIAL',     name: 'Green Valley Colony',    emoji: '🏘️', color: 0xfb8500, buildingHeight: 3, description: 'Gated housing' },
  { type: 'RESIDENTIAL',     name: 'Sunrise Residency',      emoji: '🏘️', color: 0xfb8500, buildingHeight: 3, description: 'Township' },
]

// ── Fibonacci sphere distribution ────────────────────────────────────────────
// Golden angle ensures optimal, provably even distribution of N points.

function fibonacciSphere(n: number): THREE.Vector3[] {
  const golden = Math.PI * (3 - Math.sqrt(5)) // ≈ 2.399 rad (golden angle)
  const out: THREE.Vector3[] = []
  for (let i = 0; i < n; i++) {
    const y     = 1 - (i / (n - 1)) * 2           // 1 → -1
    const r     = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = golden * i
    out.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r))
  }
  return out
}

// ── Road graph: K=2 nearest angular neighbors per node, BFS connectivity ─────

function angularDist(a: THREE.Vector3, b: THREE.Vector3): number {
  return Math.acos(Math.max(-1, Math.min(1, a.dot(b))))
}

function buildRoadGraph(dirs: THREE.Vector3[]): RoadEdge[] {
  const n     = dirs.length
  const edgeSet = new Set<string>()
  const adj: number[][] = Array.from({ length: n }, () => [])

  const addEdge = (a: number, b: number) => {
    const key = `${Math.min(a, b)}_${Math.max(a, b)}`
    if (edgeSet.has(key)) return
    edgeSet.add(key)
    adj[a].push(b)
    adj[b].push(a)
  }

  // K=2 nearest neighbors
  for (let i = 0; i < n; i++) {
    const sorted = Array.from({ length: n }, (_, j) => j)
      .filter(j => j !== i)
      .sort((a, b) => angularDist(dirs[i], dirs[a]) - angularDist(dirs[i], dirs[b]))
    addEdge(i, sorted[0])
    addEdge(i, sorted[1])
  }

  // BFS to find disconnected components and stitch them
  const visited = new Uint8Array(n)
  const bfs = (start: number) => {
    const q = [start]
    visited[start] = 1
    while (q.length) {
      const cur = q.shift()!
      for (const nb of adj[cur]) {
        if (!visited[nb]) { visited[nb] = 1; q.push(nb) }
      }
    }
  }
  bfs(0)

  for (let i = 1; i < n; i++) {
    if (!visited[i]) {
      // Find closest already-visited node
      let bestJ = 0, bestD = Infinity
      for (let j = 0; j < n; j++) {
        if (visited[j]) {
          const d = angularDist(dirs[i], dirs[j])
          if (d < bestD) { bestD = d; bestJ = j }
        }
      }
      addEdge(i, bestJ)
      bfs(i)
    }
  }

  return Array.from(edgeSet).map(k => {
    const [a, b] = k.split('_').map(Number)
    return { from: a, to: b }
  })
}

// ── World generation ──────────────────────────────────────────────────────────

const STORAGE_KEY = 'bharat_runner_world_v2'

export function generateWorldData(): WorldData {
  const dirs = fibonacciSphere(POI_DEFS.length)

  const pois: WorldPOI[] = POI_DEFS.map((def, id) => {
    const d   = dirs[id]
    const pos = d.clone().multiplyScalar(PLANET_RADIUS)
    return {
      id,
      type:     def.type,
      name:     def.name,
      emoji:    def.emoji,
      color:    def.color,
      dir:      { x: d.x, y: d.y, z: d.z },
      position: { x: pos.x, y: pos.y, z: pos.z },
    }
  })

  const roads = buildRoadGraph(dirs)

  return {
    version:     '1.0',
    generatedAt: new Date().toISOString(),
    pois,
    roads,
  }
}

export function loadOrGenerateWorld(): WorldData {
  const cached = localStorage.getItem(STORAGE_KEY)
  if (cached) {
    try { return JSON.parse(cached) as WorldData } catch { /* fall through */ }
  }
  const world = generateWorldData()
  localStorage.setItem(STORAGE_KEY, JSON.stringify(world, null, 2))
  return world
}

export function downloadWorldJSON(world: WorldData) {
  const blob = new Blob([JSON.stringify(world, null, 2)], { type: 'application/json' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = 'bharat_runner_world.json'
  a.click()
  URL.revokeObjectURL(url)
}

/** Restore world from JSON file (drag & drop or file picker) */
export function importWorldJSON(json: string): WorldData | null {
  try {
    const data = JSON.parse(json) as WorldData
    if (!data.pois || !data.roads) return null
    localStorage.setItem(STORAGE_KEY, json)
    return data
  } catch {
    return null
  }
}

/** Helper: get THREE.Vector3 from a WorldPOI position */
export function poiPosition(poi: WorldPOI): THREE.Vector3 {
  return new THREE.Vector3(poi.position.x, poi.position.y, poi.position.z)
}

export function poiDir(poi: WorldPOI): THREE.Vector3 {
  return new THREE.Vector3(poi.dir.x, poi.dir.y, poi.dir.z)
}
