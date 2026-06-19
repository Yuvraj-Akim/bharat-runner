<template>
  <div class="hud">

    <!-- ── Top bar ─────────────────────────────────────────── -->
    <div class="hud-top">
      <div class="hud-pill">
        <span>🪙</span>
        <span>₹{{ store.coins }}</span>
      </div>

      <div class="hud-pill hud-time">
        <span>{{ timeIcon }}</span>
        <span>{{ store.timeLabel }}</span>
      </div>

      <div class="hud-pill" :class="{ mounted: store.isMounted }">
        <span>{{ store.isMounted ? vehicleEmoji : '🚶' }}</span>
        <span>{{ store.isMounted ? vehicleName : 'On foot' }}</span>
      </div>

      <div class="hud-pill">
        <span>⭐</span>
        <span>{{ store.score }}</span>
      </div>
    </div>

    <!-- ── Mission panel (right side) ──────────────────────── -->
    <Transition name="slide-right">
      <div v-if="store.hudMission" class="mission-panel" :style="{ '--accent': store.hudMission.color }">

        <!-- Header -->
        <div class="mission-header">
          <span class="mission-emoji">{{ store.hudMission.emoji }}</span>
          <div class="mission-title">
            <span class="mission-label">{{ store.hudMission.label }}</span>
            <span class="mission-type-badge" :style="{ background: store.hudMission.color }">
              Active
            </span>
          </div>
        </div>

        <!-- Route row -->
        <div class="mission-route">
          <span class="route-node src">{{ store.hudMission.srcEmoji }} {{ store.hudMission.srcName }}</span>
          <span class="route-arrow">→</span>
          <span class="route-node dst">{{ store.hudMission.dstEmoji }} {{ store.hudMission.dstName }}</span>
        </div>

        <!-- Stats row -->
        <div class="mission-stats">
          <div class="stat">
            <span class="stat-icon">📍</span>
            <span>{{ store.hudMission.distDisplay }}</span>
          </div>
          <div class="stat">
            <span class="stat-icon">💰</span>
            <span>₹{{ store.hudMission.reward }}</span>
          </div>
        </div>

        <!-- Timer -->
        <div class="mission-timer">
          <div class="timer-bar-bg">
            <div
              class="timer-bar-fill"
              :style="{ width: (store.missionTimePct * 100) + '%', background: timerBarColor }"
            />
          </div>
          <span class="timer-label" :class="{ urgent: store.missionTimePct < 0.25 }">
            ⏱ {{ store.missionTimeFmt }}
          </span>
        </div>

      </div>
    </Transition>

    <!-- ── No-mission idle hint (right side) ───────────────── -->
    <Transition name="slide-right">
      <div v-if="!store.hudMission" class="mission-idle">
        <span>📦</span>
        <span>Walk up to any location &amp; press <kbd>E</kbd> to start a delivery</span>
      </div>
    </Transition>

    <!-- ── Interaction prompt (bottom-centre) ──────────────── -->
    <Transition name="pop">
      <div v-if="store.interactionHint" class="interact-prompt">
        {{ store.interactionHint }}
      </div>
    </Transition>

    <!-- ── Garage panel (left side, below controls) ────────── -->
    <div class="garage-panel" :class="{ 'garage-active': store.nearGarage }">
      <div class="garage-title">
        🏎️ Garage
        <span v-if="store.nearGarage" class="garage-near-badge">Nearby</span>
      </div>
      <div class="garage-items">
        <div
          v-for="veh in VEHICLE_SHOP"
          :key="veh.id"
          class="garage-item"
          :class="{
            owned:   store.ownedVehicles.includes(veh.id),
            active:  store.currentVehicle === veh.id,
            mounted: store.isMounted && store.currentVehicle === veh.id,
          }"
          @click="selectVehicle(veh.id)"
        >
          <span class="veh-emoji">{{ veh.emoji }}</span>
          <div class="veh-info">
            <span class="veh-name">{{ veh.name }}</span>
            <span class="veh-speed">{{ speedLabel(veh.id) }}</span>
          </div>
          <span v-if="store.isMounted && store.currentVehicle === veh.id" class="veh-status riding">
            Riding
          </span>
          <span v-else-if="store.ownedVehicles.includes(veh.id)" class="veh-status owned-badge">
            {{ store.currentVehicle === veh.id ? '✓ Selected' : 'Owned' }}
          </span>
          <button
            v-else
            class="buy-btn"
            :disabled="store.coins < veh.price"
            @click.stop="buy(veh.id)"
          >
            ₹{{ veh.price }}
          </button>
        </div>
      </div>
      <div v-if="store.nearGarage" class="garage-tip">
        Press <kbd>E</kbd> to {{ store.isMounted ? 'dismount' : 'mount' }}
      </div>
    </div>

    <!-- ── Controls hint ────────────────────────────────────── -->
    <div v-if="showControls" class="controls-hint">
      <div class="ctrl-row"><kbd>W A S D</kbd><span>Move</span></div>
      <div class="ctrl-row"><kbd>SHIFT</kbd><span>Sprint</span></div>
      <div class="ctrl-row"><kbd>SPACE</kbd><span>Jump</span></div>
      <div class="ctrl-row"><kbd>E</kbd><span>Interact</span></div>
      <button class="dismiss-btn" @click="showControls = false">Got it!</button>
    </div>

    <!-- ── Delivery outcome overlay (success / fail) ──────── -->
    <Transition name="outcome-pop">
      <div
        v-if="store.deliveryOutcome"
        class="outcome-overlay"
        :class="store.deliveryOutcome.type"
      >
        <!-- Success -->
        <template v-if="store.deliveryOutcome.type === 'success'">
          <div class="outcome-icon">🎉</div>
          <div class="outcome-title">DELIVERED!</div>
          <div class="outcome-reward">+₹{{ store.deliveryOutcome.reward }}</div>
          <div class="outcome-meta">
            <span>🪙 ₹{{ store.deliveryOutcome.totalCoins }} total</span>
            <span>·</span>
            <span>📦 {{ store.deliveriesDone }} {{ store.deliveriesDone === 1 ? 'delivery' : 'deliveries' }}</span>
          </div>
          <!-- Next vehicle progress (only if there's something left to unlock) -->
          <template v-if="store.deliveryOutcome.nextVehicleName && store.deliveryOutcome.progressPct !== null">
            <div class="outcome-progress-label">
              <span>{{ store.deliveryOutcome.nextVehicleEmoji }} {{ store.deliveryOutcome.nextVehicleName }}</span>
              <span v-if="store.deliveryOutcome.nextVehicleNeeded! > 0" class="outcome-needed">
                ₹{{ store.deliveryOutcome.nextVehicleNeeded }} more
              </span>
              <span v-else class="outcome-unlocked">Unlocked!</span>
            </div>
            <div class="outcome-progress-bar">
              <div
                class="outcome-progress-fill"
                :style="{ width: (store.deliveryOutcome.progressPct * 100) + '%' }"
              />
            </div>
          </template>
          <template v-else>
            <div class="outcome-all-unlocked">🏆 All vehicles unlocked!</div>
          </template>
        </template>

        <!-- Fail -->
        <template v-else>
          <div class="outcome-icon">⏰</div>
          <div class="outcome-title">TIME'S UP!</div>
          <div class="outcome-fail-msg">The delivery was cancelled.</div>
          <div class="outcome-fail-sub">Find a POI and try again!</div>
        </template>
      </div>
    </Transition>

    <!-- ── Bottom status bar ────────────────────────────────── -->
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
import { useGameStore, VEHICLE_SHOP } from '../stores/gameStore'
import { downloadWorldJSON, loadOrGenerateWorld } from '../game/WorldData'

const store        = useGameStore()
const showControls = ref(true)

// ── Vehicle helpers ──────────────────────────────────────────────────────────

const SPEED_LABELS: Record<string, string> = {
  bicycle:      '8 / 16 u/s',
  scooter:      '15 / 30 u/s',
  ev_bike:      '19 / 38 u/s',
  autorickshaw: '12 / 24 u/s',
}

const currentVehicleDef = computed(() =>
  VEHICLE_SHOP.find(v => v.id === store.currentVehicle) ?? VEHICLE_SHOP[0]
)

const vehicleEmoji = computed(() => currentVehicleDef.value.emoji)
const vehicleName  = computed(() => currentVehicleDef.value.name)

function speedLabel(id: string) { return SPEED_LABELS[id] ?? '' }

function selectVehicle(id: string) {
  store.selectVehicle(id)
}

// ── Computed ─────────────────────────────────────────────────────────────────

const timeIcon = computed(() => {
  const h = store.timeOfDay
  if (h >= 6 && h < 12)  return '🌅'
  if (h >= 12 && h < 17) return '☀️'
  if (h >= 17 && h < 20) return '🌆'
  return '🌙'
})

const timerBarColor = computed(() => {
  const p = store.missionTimePct
  if (p > 0.5)  return '#06d6a0'
  if (p > 0.25) return '#f4a261'
  return '#e63946'
})

function buy(id: string) { store.buyVehicle(id) }

function exportWorld() { downloadWorldJSON(loadOrGenerateWorld()) }
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
.hud-pill.mounted {
  border-color: #06d6a0;
  background: rgba(6,214,160,0.18);
}

/* ── Top bar ──────────────────────────────────────────── */
.hud-top {
  position: absolute;
  top: 16px; left: 0; right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.hud-time { cursor: default; }

/* ── Mission panel ────────────────────────────────────── */
.mission-panel {
  position: absolute;
  top: 72px;
  right: 20px;
  width: 280px;
  background: rgba(0,0,0,0.72);
  backdrop-filter: blur(14px);
  border: 1px solid var(--accent, #06d6a0);
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

.mission-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.mission-emoji { font-size: 26px; line-height: 1; }
.mission-title {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.mission-label {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.mission-type-badge {
  font-size: 10px;
  font-weight: 700;
  border-radius: 6px;
  padding: 1px 7px;
  width: fit-content;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.mission-route {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  flex-wrap: wrap;
}
.route-node { font-weight: 600; }
.route-node.dst { color: var(--accent, #06d6a0); }
.route-arrow { opacity: 0.5; }

.mission-stats {
  display: flex;
  gap: 16px;
  font-size: 13px;
  font-weight: 600;
}
.stat { display: flex; align-items: center; gap: 5px; }
.stat-icon { font-size: 14px; }

.mission-timer {
  display: flex;
  align-items: center;
  gap: 8px;
}
.timer-bar-bg {
  flex: 1;
  height: 6px;
  background: rgba(255,255,255,0.12);
  border-radius: 3px;
  overflow: hidden;
}
.timer-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.5s linear, background 0.5s;
}
.timer-label {
  font-size: 13px;
  font-weight: 700;
  min-width: 48px;
  text-align: right;
}
.timer-label.urgent {
  color: #e63946;
  animation: pulse 0.6s ease-in-out infinite alternate;
}
@keyframes pulse { from { opacity: 1; } to { opacity: 0.4; } }

/* ── Mission idle hint ────────────────────────────────── */
.mission-idle {
  position: absolute;
  top: 72px;
  right: 20px;
  width: 280px;
  background: rgba(0,0,0,0.52);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 12px 16px;
  font-size: 13px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  line-height: 1.45;
  color: rgba(255,255,255,0.7);
}

/* ── Interaction prompt ───────────────────────────────── */
.interact-prompt {
  position: absolute;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.78);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 24px;
  padding: 10px 24px;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
}

/* ── Garage panel ─────────────────────────────────────── */
.garage-panel {
  position: absolute;
  bottom: 72px;
  left: 20px;
  width: 246px;
  background: rgba(0,0,0,0.62);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: all;
  transition: border-color 0.3s;
}
.garage-panel.garage-active {
  border-color: #ff8c42;
  box-shadow: 0 0 14px rgba(255,140,66,0.3);
}
.garage-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.4px;
  opacity: 0.8;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.garage-near-badge {
  font-size: 10px;
  background: #ff8c42;
  color: #fff;
  border-radius: 6px;
  padding: 1px 7px;
  letter-spacing: 0.3px;
  opacity: 1;
}
.garage-tip {
  font-size: 12px;
  color: #ff8c42;
  font-weight: 600;
  text-align: center;
  padding-top: 2px;
}
.garage-items { display: flex; flex-direction: column; gap: 6px; }

.garage-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.garage-item:hover.owned { background: rgba(255,255,255,0.09); }
.garage-item.active {
  border-color: #06d6a0;
  background: rgba(6,214,160,0.12);
}
.garage-item.mounted {
  border-color: #ffd166;
  background: rgba(255,209,102,0.15);
}
.garage-item.owned { border-color: rgba(255,255,255,0.18); }

.veh-emoji { font-size: 18px; flex-shrink: 0; }
.veh-info  { flex: 1; display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.veh-name  { font-weight: 600; font-size: 13px; }
.veh-speed { font-size: 10px; opacity: 0.55; }

.veh-status { font-size: 11px; font-weight: 700; flex-shrink: 0; }
.veh-status.owned-badge { opacity: 0.7; }
.veh-status.riding      { color: #ffd166; opacity: 1; }
.garage-item.active .veh-status { color: #06d6a0; opacity: 1; }

.buy-btn {
  background: #e85d04;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.buy-btn:hover:not(:disabled) { background: #f4a261; }
.buy-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ── Controls hint ────────────────────────────────────── */
.controls-hint {
  position: absolute;
  bottom: 290px;
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
.ctrl-row { display: flex; align-items: center; gap: 10px; }
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
.export-btn:hover { background: rgba(232,93,4,0.5); color: #fff; }

/* ── Delivery outcome overlay ─────────────────────────── */
.outcome-overlay {
  position: absolute;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  background: rgba(0,0,0,0.82);
  backdrop-filter: blur(18px);
  border-radius: 20px;
  padding: 22px 24px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  pointer-events: none;
  text-align: center;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
}
.outcome-overlay.success {
  border: 1.5px solid #06d6a0;
  box-shadow: 0 0 32px rgba(6,214,160,0.25), 0 8px 40px rgba(0,0,0,0.6);
}
.outcome-overlay.fail {
  border: 1.5px solid #e63946;
  box-shadow: 0 0 32px rgba(230,57,70,0.25), 0 8px 40px rgba(0,0,0,0.6);
}

.outcome-icon  { font-size: 36px; line-height: 1; margin-bottom: 2px; }
.outcome-title {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.success .outcome-title { color: #06d6a0; }
.fail    .outcome-title { color: #e63946; }

.outcome-reward {
  font-size: 36px;
  font-weight: 900;
  color: #ffd166;
  letter-spacing: 1px;
  line-height: 1.1;
}
.outcome-meta {
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 2px;
}

.outcome-progress-label {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  margin-top: 10px;
  color: rgba(255,255,255,0.85);
}
.outcome-needed   { color: rgba(255,255,255,0.5); font-weight: 600; }
.outcome-unlocked { color: #ffd166; }
.outcome-all-unlocked {
  font-size: 13px;
  color: #ffd166;
  font-weight: 700;
  margin-top: 8px;
}

.outcome-progress-bar {
  width: 100%;
  height: 7px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 4px;
}
.outcome-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #06d6a0, #ffd166);
  border-radius: 4px;
  transition: width 0.6s ease;
}

.outcome-fail-msg {
  font-size: 15px;
  color: rgba(255,255,255,0.75);
  margin-top: 4px;
}
.outcome-fail-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
}

/* outcome pop animation */
.outcome-pop-enter-active { transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.outcome-pop-leave-active  { transition: all 0.25s ease-in; }
.outcome-pop-enter-from    { opacity: 0; transform: translateX(-50%) translateY(30px) scale(0.88); }
.outcome-pop-leave-to      { opacity: 0; transform: translateX(-50%) translateY(20px) scale(0.95); }

/* ── Vue transitions ──────────────────────────────────── */
.slide-right-enter-active,
.slide-right-leave-active { transition: all 0.3s ease; }
.slide-right-enter-from   { opacity: 0; transform: translateX(30px); }
.slide-right-leave-to     { opacity: 0; transform: translateX(30px); }

.pop-enter-active,
.pop-leave-active { transition: all 0.2s ease; }
.pop-enter-from   { opacity: 0; transform: translateX(-50%) scale(0.88); }
.pop-leave-to     { opacity: 0; transform: translateX(-50%) scale(0.88); }
</style>
