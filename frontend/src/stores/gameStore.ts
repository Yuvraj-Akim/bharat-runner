import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { HudMission } from '../game/MissionSystem'

export type GameState = 'menu' | 'playing' | 'paused'

// ── Vehicle shop catalogue ─────────────────────────────────────────────────────
export interface VehicleDef {
  id:    string
  name:  string
  emoji: string
  price: number
  desc:  string
}

export const VEHICLE_SHOP: VehicleDef[] = [
  { id: 'bicycle',      name: 'Bicycle',       emoji: '🚲', price: 0,    desc: 'Eco-friendly start' },
  { id: 'scooter',      name: 'Scooter',        emoji: '🛵', price: 500,  desc: 'Faster city rides' },
  { id: 'ev_bike',      name: 'EV Bike',        emoji: '⚡', price: 1500, desc: 'Silent & powerful' },
  { id: 'autorickshaw', name: 'Auto Rickshaw',  emoji: '🛺', price: 3000, desc: 'High-load carrier' },
]

// ── Delivery outcome (shown after complete / fail) ─────────────────────────────
export interface DeliveryOutcome {
  type:              'success' | 'fail'
  reward:            number
  totalCoins:        number
  nextVehicleName:   string | null
  nextVehicleEmoji:  string | null
  nextVehicleNeeded: number | null   // coins still needed; 0 = just unlocked
  progressPct:       number | null   // 0–1 toward next vehicle price
}

// ── Persistence key + shape ────────────────────────────────────────────────────
const SAVE_KEY = 'bharat_runner_save_v2'

interface SaveData {
  coins:          number
  deliveriesDone: number
  score:          number
  ownedVehicles:  string[]
  currentVehicle: string
}

function loadSave(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    return raw ? (JSON.parse(raw) as SaveData) : null
  } catch { return null }
}

// ── Store ──────────────────────────────────────────────────────────────────────

export const useGameStore = defineStore('game', () => {
  // Restore persisted values (or use defaults)
  const saved = loadSave()

  const gameState      = ref<GameState>('menu')
  const playerName     = ref('Player')
  const timeOfDay      = ref(12)        // 0-23 hour, not persisted

  const coins          = ref(saved?.coins          ?? 100)
  const score          = ref(saved?.score          ?? 0)
  const deliveriesDone = ref(saved?.deliveriesDone ?? 0)
  const ownedVehicles  = ref<string[]>(saved?.ownedVehicles  ?? ['bicycle'])
  const currentVehicle = ref(saved?.currentVehicle ?? 'bicycle')

  // ── Runtime-only UI state (not persisted) ──────────────────────────────────
  const hudMission       = ref<HudMission | null>(null)
  const interactionHint  = ref<string | null>(null)
  const isMounted        = ref(false)
  const nearGarage       = ref(false)
  const deliveryOutcome  = ref<DeliveryOutcome | null>(null)

  let _outcomeClearTimer: ReturnType<typeof setTimeout> | null = null

  // ── Computed ────────────────────────────────────────────────────────────────

  const timeLabel = computed(() => {
    const h      = timeOfDay.value
    const period = h >= 12 ? 'PM' : 'AM'
    const disp   = h % 12 === 0 ? 12 : h % 12
    return `${disp}:00 ${period}`
  })

  const missionTimeFmt = computed(() => {
    if (!hudMission.value) return '00:00'
    const t = Math.ceil(hudMission.value.timeRemaining)
    const m = Math.floor(t / 60).toString().padStart(2, '0')
    const s = (t % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  })

  const missionTimePct = computed(() => {
    if (!hudMission.value) return 1
    return hudMission.value.timeRemaining / hudMission.value.timeLimit
  })

  // ── Actions ──────────────────────────────────────────────────────────────────

  function setName(name: string) { playerName.value = name }
  function startGame()  { gameState.value = 'playing' }
  function pauseGame()  { gameState.value = 'paused'  }
  function resumeGame() { gameState.value = 'playing' }

  function addCoins(amount: number) {
    coins.value += amount
    persist()
  }

  function completeDelivery(reward: number) {
    deliveriesDone.value++
    coins.value += reward
    score.value  += reward * 10
    hudMission.value = null
    persist()
    _triggerOutcome('success', reward)
  }

  function failDelivery() {
    hudMission.value = null
    _triggerOutcome('fail', 0)
  }

  function _triggerOutcome(type: 'success' | 'fail', reward: number) {
    if (_outcomeClearTimer) { clearTimeout(_outcomeClearTimer); _outcomeClearTimer = null }
    const nextVeh = VEHICLE_SHOP.find(v => !ownedVehicles.value.includes(v.id)) ?? null
    deliveryOutcome.value = {
      type,
      reward,
      totalCoins:        coins.value,
      nextVehicleName:   nextVeh?.name  ?? null,
      nextVehicleEmoji:  nextVeh?.emoji ?? null,
      nextVehicleNeeded: nextVeh ? Math.max(0, nextVeh.price - coins.value) : null,
      progressPct:       nextVeh ? Math.min(1, coins.value / nextVeh.price) : null,
    }
    _outcomeClearTimer = setTimeout(() => { deliveryOutcome.value = null; _outcomeClearTimer = null }, 2800)
  }

  // ── Mission state ─────────────────────────────────────────────────────────

  function setHudMission(m: HudMission) {
    hudMission.value = { ...m }
  }

  function updateMissionTimer(timeRemaining: number) {
    if (hudMission.value) hudMission.value.timeRemaining = timeRemaining
  }

  function clearMission() {
    hudMission.value = null
  }

  function setInteractionHint(hint: string | null) {
    interactionHint.value = hint
  }

  function setMounted(mounted: boolean) {
    isMounted.value = mounted
  }

  function setNearGarage(near: boolean) {
    nearGarage.value = near
  }

  // ── Vehicle progression ────────────────────────────────────────────────────

  function buyVehicle(id: string): boolean {
    const def = VEHICLE_SHOP.find(v => v.id === id)
    if (!def || coins.value < def.price) return false
    if (!ownedVehicles.value.includes(id)) {
      coins.value -= def.price
      ownedVehicles.value = [...ownedVehicles.value, id]
    }
    currentVehicle.value = id
    persist()
    return true
  }

  function selectVehicle(id: string): boolean {
    if (!ownedVehicles.value.includes(id)) return false
    currentVehicle.value = id
    persist()
    return true
  }

  // ── Persistence ────────────────────────────────────────────────────────────

  function persist() {
    const data: SaveData = {
      coins:          coins.value,
      deliveriesDone: deliveriesDone.value,
      score:          score.value,
      ownedVehicles:  ownedVehicles.value,
      currentVehicle: currentVehicle.value,
    }
    localStorage.setItem(SAVE_KEY, JSON.stringify(data))
  }

  function resetProgress() {
    coins.value          = 100
    score.value          = 0
    deliveriesDone.value = 0
    ownedVehicles.value  = ['bicycle']
    currentVehicle.value = 'bicycle'
    localStorage.removeItem(SAVE_KEY)
  }

  return {
    // State
    gameState, playerName, timeOfDay,
    coins, score, deliveriesDone,
    ownedVehicles, currentVehicle,
    hudMission, interactionHint, isMounted, nearGarage, deliveryOutcome,
    // Computed
    timeLabel, missionTimeFmt, missionTimePct,
    // Actions
    setName, startGame, pauseGame, resumeGame,
    addCoins, completeDelivery, failDelivery,
    setHudMission, updateMissionTimer, clearMission, setInteractionHint,
    setMounted, setNearGarage,
    buyVehicle, selectVehicle, resetProgress,
  }
})
