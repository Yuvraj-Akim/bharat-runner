import * as THREE from 'three'

// ── Constants ─────────────────────────────────────────────────────────────────

const INTERP_DELAY_MS = 100     // render 100ms behind receive time
const BUFFER_SIZE     = 12      // max snapshots kept per player

// Body-color palette — 12 distinct hues assigned deterministically by player ID
const BODY_PALETTE = [
  0x3a86ff, 0xf72585, 0x06d6a0, 0xffd166,
  0xef476f, 0xa8dadc, 0xff6b35, 0x8338ec,
  0x00b4d8, 0xe9c46a, 0x2a9d8f, 0xe76f51,
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function colorForId(playerId: string): number {
  let h = 0
  for (let i = 0; i < playerId.length; i++) h = (h * 31 + playerId.charCodeAt(i)) >>> 0
  return BODY_PALETTE[h % BODY_PALETTE.length]
}

function lmat(color: number) { return new THREE.MeshLambertMaterial({ color }) }

// ── Snapshot ──────────────────────────────────────────────────────────────────

interface Snapshot {
  t:           number              // client receive time (performance.now())
  pos:         THREE.Vector3
  quat:        THREE.Quaternion
  isMoving:    boolean
  isSprinting: boolean
}

// ── Label sprite ──────────────────────────────────────────────────────────────

function makeNameLabel(username: string, bodyColor: number): THREE.Sprite {
  const W = 256, H = 56
  const canvas  = document.createElement('canvas')
  canvas.width  = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!

  // Pill background
  const r = H / 2
  ctx.fillStyle = 'rgba(4,6,16,0.82)'
  ctx.beginPath()
  ctx.moveTo(r, 0); ctx.lineTo(W - r, 0)
  ctx.arcTo(W, 0, W, H, r); ctx.lineTo(W, H - r)
  ctx.arcTo(W, H, 0, H, r); ctx.lineTo(r, H)
  ctx.arcTo(0, H, 0, 0, r); ctx.lineTo(0, r)
  ctx.arcTo(0, 0, W, 0, r); ctx.closePath()
  ctx.fill()

  // Color swatch left edge
  ctx.fillStyle = `#${bodyColor.toString(16).padStart(6, '0')}`
  ctx.fillRect(0, 0, 7, H)

  // Username text
  ctx.font = 'bold 22px "Segoe UI", sans-serif'
  ctx.fillStyle = '#ffffff'
  ctx.textBaseline = 'middle'
  ctx.fillText(username.slice(0, 14), 18, H / 2)

  const tex = new THREE.CanvasTexture(canvas)
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false })
  const spr = new THREE.Sprite(mat)
  spr.scale.set(8, 1.75, 1)
  spr.renderOrder = 997
  return spr
}

// ── Emoji sprite ──────────────────────────────────────────────────────────────

function makeEmojiSprite(emoji: string): THREE.Sprite {
  const S = 128
  const canvas  = document.createElement('canvas')
  canvas.width  = S
  canvas.height = S
  const ctx = canvas.getContext('2d')!
  ctx.font = '80px serif'
  ctx.textAlign    = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(emoji, S / 2, S / 2 + 6)

  const tex = new THREE.CanvasTexture(canvas)
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, opacity: 1 })
  const spr = new THREE.Sprite(mat)
  spr.scale.set(3.2, 3.2, 1)
  spr.renderOrder = 998
  return spr
}

// ── RemotePlayer ──────────────────────────────────────────────────────────────

export class RemotePlayer {
  readonly group:    THREE.Group
  readonly playerId: string
  readonly username: string
  readonly bodyColor: number

  private buffer:         Snapshot[]        = []
  private nameLabel:      THREE.Sprite
  private emojiSprite:    THREE.Sprite | null = null
  private connDot:        THREE.Mesh
  private legL:           THREE.Mesh
  private legR:           THREE.Mesh
  private legPhase        = 0
  private emojiTimer      = 0
  private lastSnapshotAt  = 0    // performance.now() of last push

  constructor(playerId: string, username: string, scene: THREE.Scene) {
    this.playerId  = playerId
    this.username  = username
    this.bodyColor = colorForId(playerId)
    this.group     = new THREE.Group()

    // Build character
    const { legL, legR } = this.buildCharacter()
    this.legL = legL
    this.legR = legR

    // Name label — above head (local +Y after group rotation = surface normal)
    this.nameLabel = makeNameLabel(username, this.bodyColor)
    this.nameLabel.position.set(0, 2.6, 0)
    this.group.add(this.nameLabel)

    // Connection dot — small sphere to the right of the label
    this.connDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x888888 })
    )
    this.connDot.position.set(3.0, 2.6, 0)
    this.connDot.renderOrder = 996
    this.group.add(this.connDot)

    scene.add(this.group)
  }

  // ── Public API ──────────────────────────────────────────────────────────────

  pushSnapshot(s: Snapshot) {
    this.buffer.push(s)
    if (this.buffer.length > BUFFER_SIZE) this.buffer.shift()
    this.lastSnapshotAt = s.t
  }

  showEmoji(emoji: string) {
    // Remove old sprite if any
    if (this.emojiSprite) {
      this.group.remove(this.emojiSprite)
      ;(this.emojiSprite.material as THREE.SpriteMaterial).map?.dispose()
      this.emojiSprite.material.dispose()
    }
    this.emojiSprite = makeEmojiSprite(emoji)
    this.emojiSprite.position.set(0, 4.2, 0)
    this.group.add(this.emojiSprite)
    this.emojiTimer = 3.0
  }

  /** Called every frame. dt in seconds. */
  update(dt: number) {
    const renderTime = performance.now() - INTERP_DELAY_MS
    const snap       = this.interpolate(renderTime)

    if (snap) {
      this.group.position.copy(snap.pos)
      this.group.quaternion.copy(snap.quat)
      this.animateLegs(dt, snap.isMoving)
    }

    // Connection dot color by snapshot staleness
    const age = performance.now() - this.lastSnapshotAt
    const dotMat = this.connDot.material as THREE.MeshBasicMaterial
    if      (age < 200)  dotMat.color.setHex(0x00e676)   // green
    else if (age < 600)  dotMat.color.setHex(0xffab40)   // amber
    else                 dotMat.color.setHex(0xff1744)   // red

    // Emoji fade
    if (this.emojiTimer > 0 && this.emojiSprite) {
      this.emojiTimer -= dt
      const mat = this.emojiSprite.material as THREE.SpriteMaterial
      mat.opacity = Math.max(0, Math.min(1, this.emojiTimer / 0.6))
      if (this.emojiTimer <= 0) {
        this.group.remove(this.emojiSprite)
        this.emojiSprite = null
      }
    }
  }

  remove(scene: THREE.Scene) {
    scene.remove(this.group)
  }

  // ── Snapshot interpolation ──────────────────────────────────────────────────
  //
  // Core guarantee: never snap. If renderTime falls outside the buffer window,
  // clamp to the oldest or newest known state rather than extrapolating.

  private interpolate(renderTime: number): Snapshot | null {
    const b = this.buffer
    if (b.length === 0) return null
    if (b.length === 1) return b[0]

    const oldest = b[0]
    const newest = b[b.length - 1]

    // Before our first known snapshot — hold at oldest
    if (renderTime <= oldest.t) return oldest
    // After newest snapshot (network lag) — hold at newest, no snap
    if (renderTime >= newest.t) return newest

    // Find the two snapshots that bracket renderTime
    for (let i = 0; i < b.length - 1; i++) {
      const lo = b[i]
      const hi = b[i + 1]
      if (lo.t <= renderTime && renderTime < hi.t) {
        const alpha = (renderTime - lo.t) / (hi.t - lo.t)
        return {
          t:           renderTime,
          pos:         lo.pos.clone().lerp(hi.pos, alpha),
          quat:        lo.quat.clone().slerp(hi.quat, alpha),
          isMoving:    hi.isMoving,
          isSprinting: hi.isSprinting,
        }
      }
    }

    return newest
  }

  // ── Character mesh ──────────────────────────────────────────────────────────

  private buildCharacter(): { legL: THREE.Mesh; legR: THREE.Mesh } {
    const bodyMat = lmat(this.bodyColor)
    const headMat = lmat(0xc68642)
    const legMat  = lmat(0xffffff)
    const bagMat  = lmat(0x2d6a4f)

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.9, 0.4), bodyMat)
    body.position.y = 0.45; body.castShadow = true

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), headMat)
    head.position.y = 1.15; head.castShadow = true

    // Legs
    const legGeo = new THREE.BoxGeometry(0.25, 0.5, 0.3)
    const legL   = new THREE.Mesh(legGeo, legMat)
    legL.position.set(-0.175, -0.25, 0); legL.castShadow = true
    const legR   = new THREE.Mesh(legGeo, legMat)
    legR.position.set(0.175, -0.25, 0);  legR.castShadow = true

    // Delivery bag
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.15), bagMat)
    bag.position.set(0, 0.5, -0.275)

    this.group.add(body, head, legL, legR, bag)
    return { legL, legR }
  }

  private animateLegs(dt: number, moving: boolean) {
    if (!moving) { this.legPhase = 0; this.legL.rotation.x = 0; this.legR.rotation.x = 0; return }
    this.legPhase += dt * 8
    const swing = Math.sin(this.legPhase) * 0.3
    this.legL.rotation.x =  swing
    this.legR.rotation.x = -swing
  }
}
