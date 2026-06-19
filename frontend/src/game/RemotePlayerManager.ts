import * as THREE from 'three'
import { RemotePlayer } from './RemotePlayer'
import type { RemoteState } from './MultiplayerClient'

// ── RemotePlayerManager ───────────────────────────────────────────────────────
//
// Single source of truth for all remote players visible in the scene.
// - Creates a RemotePlayer on first sight of a playerId.
// - Feeds snapshots to existing players on subsequent updates.
// - Removes players that have left (via removePlayer) or that no longer appear
//   in consecutive WORLD_STATE broadcasts (handled externally via removePlayer).

export class RemotePlayerManager {
  private players = new Map<string, RemotePlayer>()

  constructor(private scene: THREE.Scene) {}

  // ── Called from MultiplayerClient.onPlayerStates (20 Hz) ─────────────────

  updateFromWorldState(states: RemoteState[]) {
    const seen = new Set<string>()

    for (const state of states) {
      seen.add(state.playerId)

      let player = this.players.get(state.playerId)

      if (!player) {
        player = new RemotePlayer(state.playerId, state.username, this.scene)
        this.players.set(state.playerId, player)
      }

      player.pushSnapshot({
        t:           state.timestamp,
        pos:         new THREE.Vector3(state.x, state.y, state.z),
        quat:        new THREE.Quaternion(state.qx, state.qy, state.qz, state.qw),
        isMoving:    state.isMoving,
        isSprinting: state.isSprinting,
      })
    }

    // Remove any player not in this batch (WORLD_STATE is authoritative)
    for (const [id, player] of this.players) {
      if (!seen.has(id)) {
        player.remove(this.scene)
        this.players.delete(id)
      }
    }
  }

  // ── Called from MultiplayerClient.onPlayerLeft ────────────────────────────

  removePlayer(playerId: string) {
    const p = this.players.get(playerId)
    if (p) {
      p.remove(this.scene)
      this.players.delete(playerId)
    }
  }

  // ── Emoji ─────────────────────────────────────────────────────────────────

  showEmoji(playerId: string, emoji: string) {
    this.players.get(playerId)?.showEmoji(emoji)
  }

  // ── Game loop ─────────────────────────────────────────────────────────────

  update(dt: number) {
    for (const p of this.players.values()) p.update(dt)
  }

  dispose() {
    for (const player of this.players.values()) player.remove(this.scene)
    this.players.clear()
  }

  // ── Accessors ─────────────────────────────────────────────────────────────

  get count() { return this.players.size }
  get all()   { return Array.from(this.players.values()) }
}
