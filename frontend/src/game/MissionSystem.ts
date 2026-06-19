import * as THREE from 'three'
import { PLANET_RADIUS } from './PlanetGeometry'
import type { WorldData, WorldPOI } from './WorldData'

// ── Public types ───────────────────────────────────────────────────────────────

export type MissionType = 'food' | 'medicine' | 'parcel' | 'document'

/** Data the HUD and store need to display a running mission. */
export interface HudMission {
  type:        MissionType
  label:       string       // "Parcel Delivery"
  emoji:       string       // "📦"
  color:       string       // CSS colour string "#06d6a0"
  srcName:     string       // source POI display name
  srcEmoji:    string
  dstName:     string       // destination POI display name
  dstEmoji:    string
  dstId:       number       // POI id — used by GameScene for arrival check
  distDisplay: string       // "3.2 km"
  reward:      number       // ₹ integer
  timeLimit:   number       // total seconds
  timeRemaining: number     // counts down each frame
}

// ── Mission definitions ────────────────────────────────────────────────────────

interface MissionDef {
  type:           MissionType
  label:          string
  emoji:          string
  color:          string
  baseReward:     number    // ₹ added before distance bonus
  rewardPerUnit:  number    // ₹ per game-unit of arc
  baseTime:       number    // seconds before distance bonus
  timePerUnit:    number    // extra seconds per game-unit of arc
}

const MISSION_DEFS: MissionDef[] = [
  { type: 'food',     label: 'Food Delivery',     emoji: '🍱', color: '#f77f00', baseReward: 30,  rewardPerUnit: 3.2, baseTime: 120, timePerUnit: 5 },
  { type: 'medicine', label: 'Medicine Delivery',  emoji: '💊', color: '#e63946', baseReward: 80,  rewardPerUnit: 5.5, baseTime: 90,  timePerUnit: 4 },
  { type: 'parcel',   label: 'Parcel Delivery',    emoji: '📦', color: '#06d6a0', baseReward: 50,  rewardPerUnit: 3.8, baseTime: 200, timePerUnit: 6 },
  { type: 'document', label: 'Govt. Document Run', emoji: '📄', color: '#7b2d8b', baseReward: 100, rewardPerUnit: 4.5, baseTime: 150, timePerUnit: 5 },
]

// ── Helpers ────────────────────────────────────────────────────────────────────

function arcBetween(a: WorldPOI, b: WorldPOI): number {
  const da = new THREE.Vector3(a.dir.x, a.dir.y, a.dir.z)
  const db = new THREE.Vector3(b.dir.x, b.dir.y, b.dir.z)
  return Math.acos(Math.max(-1, Math.min(1, da.dot(db)))) * PLANET_RADIUS
}

// ── MissionSystem ──────────────────────────────────────────────────────────────

export class MissionSystem {
  private mission: HudMission | null = null
  private worldData: WorldData

  // ── Callbacks (set by GameScene, forwarded to store via App.vue) ──────────
  onMissionStart?:    (m: HudMission) => void
  onMissionUpdate?:   (timeRemaining: number) => void
  onMissionComplete?: (reward: number) => void
  onMissionFail?:     () => void

  constructor(worldData: WorldData) {
    this.worldData = worldData
  }

  get activeMission(): HudMission | null { return this.mission }

  /**
   * Called every frame (after E key is consumed from InputManager).
   * @param nearPOI  POI within interaction radius, or null
   */
  tryInteract(nearPOI: WorldPOI | null) {
    if (!nearPOI) return

    if (!this.mission) {
      // ── Start a new mission from this pickup POI ────────────────────────
      this.startMission(nearPOI)
    } else if (nearPOI.id === this.mission.dstId) {
      // ── Deliver! ────────────────────────────────────────────────────────
      this.completeMission()
    }
    // Near a non-destination POI during active mission → silent ignore
  }

  /** Called every frame with capped dt. */
  update(dt: number) {
    if (!this.mission) return

    this.mission.timeRemaining = Math.max(0, this.mission.timeRemaining - dt)
    this.onMissionUpdate?.(this.mission.timeRemaining)

    if (this.mission.timeRemaining === 0) this.failMission()
  }

  /** Compute the contextual interaction hint string shown in the HUD. */
  interactionHint(nearPOI: WorldPOI | null): string | null {
    if (!this.mission) {
      return nearPOI
        ? `${nearPOI.emoji} Press [E] at ${nearPOI.name} to pick up a delivery`
        : null
    }
    if (nearPOI && nearPOI.id === this.mission.dstId) {
      return `🎯 Press [E] to deliver at ${this.mission.dstEmoji} ${this.mission.dstName}!`
    }
    return null
  }

  // ── Private ────────────────────────────────────────────────────────────────

  private startMission(src: WorldPOI) {
    const { pois } = this.worldData
    const def      = MISSION_DEFS[Math.floor(Math.random() * MISSION_DEFS.length)]

    // Prefer a destination that isn't the same POI; bias toward farther ones
    // for larger rewards (filter to top-50% by distance, then pick randomly).
    const others = pois.filter(p => p.id !== src.id)
    const arcs   = others.map(p => ({ poi: p, arc: arcBetween(src, p) }))
    arcs.sort((a, b) => b.arc - a.arc)
    const pool = arcs.slice(0, Math.max(1, Math.floor(arcs.length * 0.6)))
    const { poi: dst, arc } = pool[Math.floor(Math.random() * pool.length)]

    const reward  = Math.max(20, Math.min(500, Math.round(def.baseReward + arc * def.rewardPerUnit)))
    const tlimit  = Math.round(def.baseTime + arc * def.timePerUnit)
    const distKm  = (arc * 0.12).toFixed(1)

    this.mission = {
      type:          def.type,
      label:         def.label,
      emoji:         def.emoji,
      color:         def.color,
      srcName:       src.name,
      srcEmoji:      src.emoji,
      dstName:       dst.name,
      dstEmoji:      dst.emoji,
      dstId:         dst.id,
      distDisplay:   `${distKm} km`,
      reward,
      timeLimit:     tlimit,
      timeRemaining: tlimit,
    }

    this.onMissionStart?.(this.mission)
  }

  private completeMission() {
    if (!this.mission) return
    const reward = this.mission.reward
    this.mission = null
    this.onMissionComplete?.(reward)
  }

  private failMission() {
    this.mission = null
    this.onMissionFail?.()
  }
}
