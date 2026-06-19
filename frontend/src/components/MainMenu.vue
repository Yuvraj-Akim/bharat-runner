<template>
  <div class="menu-overlay">
    <div class="menu-card">
      <div class="menu-logo">
        <div class="logo-icon">🏍️</div>
        <h1 class="logo-title">Bharat Runner</h1>
        <p class="logo-subtitle">भारत रनर · Deliver Across India</p>
      </div>

      <div class="menu-body">
        <div class="input-group">
          <label>Your Name</label>
          <input
            v-model="playerName"
            type="text"
            placeholder="Enter your name..."
            maxlength="20"
            @keyup.enter="startGame"
          />
        </div>

        <button class="btn-play" @click="startGame">
          🚀 Start Delivering!
        </button>

        <div class="menu-features">
          <div class="feature">🌏 Spherical planet world</div>
          <div class="feature">📦 10+ delivery types</div>
          <div class="feature">🏍️ 5 unlockable vehicles</div>
          <div class="feature">🕌 8 Indian city zones</div>
        </div>
      </div>

      <div class="menu-footer">
        Made with ❤️ for India · Multiplayer coming soon
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '../stores/gameStore'

const store = useGameStore()
const playerName = ref('Delivery Wala')

function startGame() {
  if (playerName.value.trim()) {
    store.setName(playerName.value.trim())
    store.startGame()
  }
}
</script>

<style scoped>
.menu-overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0d1a0a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.menu-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 40px;
  width: min(420px, 90vw);
  color: #fff;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.logo-icon {
  font-size: 56px;
  margin-bottom: 8px;
  filter: drop-shadow(0 0 20px rgba(232, 93, 4, 0.6));
}

.logo-title {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #ff6b35, #f7c948, #ff6b35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.logo-subtitle {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
  letter-spacing: 1px;
}

.menu-body {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  text-align: left;
}

.input-group label {
  display: block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.input-group input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 12px 16px;
  color: #fff;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
}
.input-group input:focus {
  border-color: #e85d04;
}
.input-group input::placeholder { color: rgba(255,255,255,0.3); }

.btn-play {
  background: linear-gradient(135deg, #e85d04, #f4a261);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 4px 20px rgba(232, 93, 4, 0.4);
  letter-spacing: 0.3px;
}
.btn-play:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 28px rgba(232, 93, 4, 0.55);
}
.btn-play:active { transform: translateY(0); }

.menu-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 8px;
}

.feature {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
  text-align: left;
}

.menu-footer {
  margin-top: 24px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.3);
}
</style>
