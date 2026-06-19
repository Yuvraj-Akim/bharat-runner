import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type GameState = 'menu' | 'playing' | 'paused'

export const useGameStore = defineStore('game', () => {
  const gameState   = ref<GameState>('menu')
  const playerName  = ref('Player')
  const score       = ref(0)
  const coins       = ref(100)
  const timeOfDay   = ref(12)  // 0-23 hour
  const deliveriesDone = ref(0)

  const timeLabel = computed(() => {
    const h = timeOfDay.value
    const period = h >= 12 ? 'PM' : 'AM'
    const display = h % 12 === 0 ? 12 : h % 12
    return `${display}:00 ${period}`
  })

  function setName(name: string) { playerName.value = name }
  function startGame()  { gameState.value = 'playing' }
  function pauseGame()  { gameState.value = 'paused' }
  function resumeGame() { gameState.value = 'playing' }
  function addCoins(amount: number) { coins.value += amount }
  function completeDelivery(reward: number) {
    deliveriesDone.value++
    coins.value += reward
    score.value += reward * 10
  }

  return {
    gameState, playerName, score, coins, timeOfDay,
    deliveriesDone, timeLabel,
    setName, startGame, pauseGame, resumeGame,
    addCoins, completeDelivery,
  }
})
