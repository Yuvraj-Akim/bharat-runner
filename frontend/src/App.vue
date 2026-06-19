<template>
  <div id="app-root">
    <!-- Three.js game canvas — always present so background renders on menu -->
    <canvas ref="canvasRef" class="game-canvas" />

    <!-- Minimap canvas — always in DOM so GameScene can write to it -->
    <MinimapCanvas
      ref="minimapRef"
      :near-p-o-i="nearPOI"
      :visible="store.gameState === 'playing'"
    />

    <MainMenu v-if="store.gameState === 'menu'" />
    <GameHUD  v-if="store.gameState === 'playing'" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useGameStore } from './stores/gameStore'
import { GameScene } from './game/GameScene'
import { type WorldPOI } from './game/WorldData'
import MainMenu      from './components/MainMenu.vue'
import GameHUD       from './components/GameHUD.vue'
import MinimapCanvas from './components/MinimapCanvas.vue'

const store      = useGameStore()
const canvasRef  = ref<HTMLCanvasElement>()
const minimapRef = ref<InstanceType<typeof MinimapCanvas>>()
const nearPOI    = ref<WorldPOI | null>(null)
let   scene:     GameScene | null = null

// Connect multiplayer the moment the player starts the game (name is set by then)
watch(() => store.gameState, (state) => {
  if (state === 'playing' && scene) {
    scene.connectMultiplayer(store.playerName)
  }
})

onMounted(() => {
  // Give Vue one tick to render MinimapCanvas and expose its canvas ref.
  // NOTE: Vue's component proxy unwraps Refs exposed via defineExpose, so
  //       minimapRef.value.canvasRef is already the HTMLCanvasElement — no .value needed.
  requestAnimationFrame(() => {
    if (!canvasRef.value) return
    const mapCanvas = (minimapRef.value as any)?.canvasRef as HTMLCanvasElement | undefined
    if (!mapCanvas) return

    scene = new GameScene(canvasRef.value, mapCanvas)
    scene.start()

    scene.onTimeUpdate      = (hour)   => { store.timeOfDay = hour }
    scene.onNearPOI         = (poi)    => { nearPOI.value = poi }
    scene.onMissionStart    = (m)      => { store.setHudMission(m) }
    scene.onMissionUpdate   = (t)      => { store.updateMissionTimer(t) }
    scene.onMissionComplete = (reward) => { store.completeDelivery(reward) }
    scene.onMissionFail     = ()       => { store.clearMission() }
    scene.onInteractionHint = (hint)   => { store.setInteractionHint(hint) }
  })
})

onUnmounted(() => scene?.stop())
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

.game-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  display: block;
}
</style>
