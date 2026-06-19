<template>
  <div class="minimap-wrapper" :class="{ hidden: !visible }">
    <div class="minimap-label">MAP</div>
    <canvas ref="canvasRef" class="minimap-canvas" />

    <!-- Nearby POI notification -->
    <Transition name="poi-fade">
      <div v-if="nearPOI" class="poi-banner" :style="{ borderColor: poiColor }">
        <span class="poi-banner-emoji">{{ nearPOI.emoji }}</span>
        <div class="poi-banner-text">
          <div class="poi-banner-name">{{ nearPOI.name }}</div>
          <div class="poi-banner-hint">Press E to interact</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { WorldPOI } from '../game/WorldData'

const props = defineProps<{
  nearPOI:  WorldPOI | null
  visible?: boolean
}>()

const canvasRef = ref<HTMLCanvasElement>()

const poiColor = computed(() =>
  props.nearPOI ? `#${props.nearPOI.color.toString(16).padStart(6, '0')}` : 'transparent'
)

defineExpose({ canvasRef })
</script>

<style scoped>
.minimap-wrapper {
  position: fixed;
  bottom: 28px;
  right: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  pointer-events: none;
  z-index: 50;
  transition: opacity 0.4s;
}

.minimap-wrapper.hidden {
  opacity: 0;
  pointer-events: none;
}

.minimap-canvas {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid rgba(255, 200, 100, 0.4);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.65), inset 0 0 10px rgba(0, 0, 0, 0.5);
  display: block;
}

.minimap-label {
  position: absolute;
  top: -16px;
  right: 0;
  font-size: 10px;
  letter-spacing: 2.5px;
  color: rgba(255, 200, 100, 0.55);
  font-family: 'Courier New', monospace;
}

/* POI Banner */
.poi-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(5, 8, 18, 0.85);
  backdrop-filter: blur(14px);
  border: 1.5px solid;
  border-radius: 12px;
  padding: 10px 16px;
  max-width: 230px;
}

.poi-banner-emoji { font-size: 26px; line-height: 1; flex-shrink: 0; }

.poi-banner-text { display: flex; flex-direction: column; gap: 3px; }

.poi-banner-name {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
}

.poi-banner-hint {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.5px;
}

/* Transitions */
.poi-fade-enter-active,
.poi-fade-leave-active { transition: opacity 0.25s, transform 0.25s; }

.poi-fade-enter-from,
.poi-fade-leave-to { opacity: 0; transform: translateX(10px); }
</style>
