<template>
  <div class="hud">
    <!-- Top bar -->
    <div class="hud-top">
      <div class="hud-pill">
        <span>🪙</span>
        <span>{{ store.coins }}</span>
      </div>

      <div class="hud-pill hud-time">
        <span>{{ timeIcon }}</span>
        <span>{{ store.timeLabel }}</span>
      </div>

      <div class="hud-pill">
        <span>⭐</span>
        <span>{{ store.score }}</span>
      </div>
    </div>

    <!-- Controls hint -->
    <div v-if="showControls" class="controls-hint">
      <div class="ctrl-row"><kbd>W A S D</kbd><span>Move</span></div>
      <div class="ctrl-row"><kbd>SHIFT</kbd><span>Sprint</span></div>
      <div class="ctrl-row"><kbd>SPACE</kbd><span>Jump</span></div>
      <button class="dismiss-btn" @click="showControls = false">Got it!</button>
    </div>

    <!-- Bottom status bar -->
    <div class="hud-bottom">
      <div class="hud-pill small">
        📦 {{ store.deliveriesDone }} deliveries
      </div>

      <button class="export-btn" @click="exportWorld" title="Export world JSON">
        💾 Export World
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameStore } from '../stores/gameStore'
import { downloadWorldJSON, loadOrGenerateWorld } from '../game/WorldData'

const store       = useGameStore()
const showControls = ref(true)

const timeIcon = computed(() => {
  const h = store.timeOfDay
  if (h >= 6 && h < 12)  return '🌅'
  if (h >= 12 && h < 17) return '☀️'
  if (h >= 17 && h < 20) return '🌆'
  return '🌙'
})

function exportWorld() {
  downloadWorldJSON(loadOrGenerateWorld())
}
</script>

<style scoped>
.hud {
  position: fixed;
  inset: 0;
  pointer-events: none;
  font-family: 'Segoe UI', sans-serif;
  color: #fff;
}

/* ── Shared pill ──────────────────────────────────────── */
.hud-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(0,0,0,0.58);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 600;
}

.hud-pill.small { font-size: 13px; padding: 5px 12px; }

/* ── Top bar ──────────────────────────────────────────── */
.hud-top {
  position: absolute;
  top: 16px; left: 0; right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.hud-time { cursor: default; }

/* ── Controls hint ────────────────────────────────────── */
.controls-hint {
  position: absolute;
  bottom: 100px;
  left: 20px;
  background: rgba(0,0,0,0.68);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  padding: 14px 18px;
  font-size: 13px;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.ctrl-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

kbd {
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.28);
  border-radius: 6px;
  padding: 2px 8px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  letter-spacing: 0.5px;
}

.dismiss-btn {
  margin-top: 4px;
  background: #e85d04;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 14px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
}
.dismiss-btn:hover { background: #f4a261; }

/* ── Bottom bar ───────────────────────────────────────── */
.hud-bottom {
  position: absolute;
  bottom: 28px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: all;
}

.export-btn {
  background: rgba(0,0,0,0.58);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  color: rgba(255,255,255,0.7);
  padding: 6px 14px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}
.export-btn:hover {
  background: rgba(232,93,4,0.5);
  color: #fff;
}
</style>
