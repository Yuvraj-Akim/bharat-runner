import * as THREE from 'three'

// ── Types ─────────────────────────────────────────────────────────────────────

export type ConnectionStatus = 'idle' | 'connecting' | 'connected' | 'reconnecting' | 'failed'

export interface RemoteState {
  playerId:   string
  username:   string
  x: number; y: number; z: number
  qx: number; qy: number; qz: number; qw: number
  isMoving:    boolean
  isSprinting: boolean
  vehicle:    string
  emoji?:     string
  timestamp:  number   // client receive time via performance.now()
}

export interface LocalStatePayload {
  username:    string
  x: number; y: number; z: number
  qx: number; qy: number; qz: number; qw: number
  isMoving:    boolean
  isSprinting: boolean
  vehicle:     string
}

// ── MultiplayerClient ─────────────────────────────────────────────────────────
//
// Design:
//  - selfId is set from the server's SELF_ID message (sent immediately on connect).
//    WORLD_STATE messages received before SELF_ID are queued and replayed once
//    selfId is known — this eliminates any window where the local player
//    would briefly appear as a remote player.
//  - Auto-reconnect with exponential backoff (max 8s).
//  - All callbacks are no-ops until assigned — caller can wire them at any time.

const RECONNECT_BASE_MS = 1_500
const RECONNECT_MAX_MS  = 8_000

export class MultiplayerClient {
  private ws:         WebSocket | null = null
  private selfId:     string           = ''
  private pendingStates: RemoteState[][] = []   // queued until selfId known
  private reconnectDelay = RECONNECT_BASE_MS
  private reconnectTimer: number | null = null
  private _status: ConnectionStatus = 'idle'

  // Public callbacks — assign after construction
  onStatusChange?: (status: ConnectionStatus) => void
  onPlayerStates?: (states: RemoteState[]) => void
  onPlayerLeft?:  (playerId: string) => void
  onEmoji?:       (playerId: string, emoji: string) => void
  onOnlineCount?: (count: number) => void

  constructor(
    private readonly wsUrl:    string,
    private readonly username:  string,
  ) {}

  // ── Lifecycle ───────────────────────────────────────────────────────────────

  connect() {
    if (this.ws && this.ws.readyState <= WebSocket.OPEN) return
    this.setStatus('connecting')

    try {
      this.ws           = new WebSocket(this.wsUrl)
      this.ws.onopen    = this.handleOpen
      this.ws.onmessage = this.handleMessage
      this.ws.onerror   = this.handleError
      this.ws.onclose   = this.handleClose
    } catch (e) {
      this.setStatus('failed')
    }
  }

  disconnect() {
    if (this.reconnectTimer !== null) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = null
    }
    this.ws?.close(1000, 'client disconnect')
    this.ws = null
    this.setStatus('idle')
  }

  // ── Sending ─────────────────────────────────────────────────────────────────

  sendState(payload: LocalStatePayload) {
    this.send({ type: 'PLAYER_STATE', payload })
  }

  sendEmoji(emoji: string) {
    this.send({ type: 'EMOJI', payload: { emoji } })
  }

  // ── Accessors ───────────────────────────────────────────────────────────────

  get isConnected()  { return this._status === 'connected' }
  get status()       { return this._status }
  get id()           { return this.selfId }

  // ── Private ─────────────────────────────────────────────────────────────────

  private handleOpen = () => {
    this.reconnectDelay = RECONNECT_BASE_MS
    this.setStatus('connected')
  }

  private handleMessage = (e: MessageEvent) => {
    let msg: { type: string; payload: unknown }
    try { msg = JSON.parse(e.data as string) } catch { return }

    switch (msg.type) {
      case 'SELF_ID': {
        this.selfId = (msg.payload as { playerId: string }).playerId
        // Replay any world states that arrived before we knew our ID
        for (const batch of this.pendingStates) this.dispatchStates(batch)
        this.pendingStates = []
        break
      }

      case 'WORLD_STATE': {
        const now   = performance.now()
        const all   = msg.payload as RemoteState[]
        const batch = all.map(s => ({ ...s, timestamp: now } as RemoteState))

        if (!this.selfId) {
          this.pendingStates.push(batch)
        } else {
          this.dispatchStates(batch)
        }
        break
      }

      case 'PLAYER_LEFT': {
        const id = (msg.payload as { playerId: string }).playerId
        this.onPlayerLeft?.(id)
        break
      }

      case 'EMOJI': {
        const p = msg.payload as { playerId: string; emoji: string }
        // Skip our own emoji — caller shows it locally
        if (p.playerId !== this.selfId) this.onEmoji?.(p.playerId, p.emoji)
        break
      }
    }
  }

  private handleError = () => {
    // handleClose will be called next and will schedule reconnect
  }

  private handleClose = () => {
    this.ws = null
    if (this._status === 'idle') return  // intentional disconnect
    this.setStatus('reconnecting')
    this.reconnectTimer = window.setTimeout(() => {
      this.reconnectDelay = Math.min(this.reconnectDelay * 1.5, RECONNECT_MAX_MS)
      this.connect()
    }, this.reconnectDelay)
  }

  private dispatchStates(batch: RemoteState[]) {
    const filtered = batch.filter(s => s.playerId !== this.selfId)
    this.onOnlineCount?.(batch.length)   // total includes self
    this.onPlayerStates?.(filtered)
  }

  private send(msg: object) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(msg))
    }
  }

  private setStatus(s: ConnectionStatus) {
    this._status = s
    this.onStatusChange?.(s)
  }
}
