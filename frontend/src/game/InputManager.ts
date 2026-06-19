import { reactive } from 'vue'
import type { InputState } from './PlayerController'

export class InputManager {
  state: InputState = reactive({
    forward:  false,
    backward: false,
    left:     false,
    right:    false,
    jump:     false,
    sprint:   false,
  })

  // Touch joystick state
  private touchStart: { x: number; y: number } | null = null
  private touchDelta: { x: number; y: number } = { x: 0, y: 0 }

  private keyMap: Record<string, keyof InputState> = {
    KeyW:       'forward',
    ArrowUp:    'forward',
    KeyS:       'backward',
    ArrowDown:  'backward',
    KeyA:       'left',
    ArrowLeft:  'left',
    KeyD:       'right',
    ArrowRight: 'right',
    Space:      'jump',
    ShiftLeft:  'sprint',
    ShiftRight: 'sprint',
  }

  constructor() {
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup',   this.onKeyUp)
    window.addEventListener('touchstart', this.onTouchStart, { passive: true })
    window.addEventListener('touchmove',  this.onTouchMove,  { passive: true })
    window.addEventListener('touchend',   this.onTouchEnd,   { passive: true })
  }

  private onKeyDown = (e: KeyboardEvent) => {
    const key = this.keyMap[e.code]
    if (key) (this.state as Record<string, boolean>)[key] = true
    if (e.code === 'Space') e.preventDefault()
  }

  private onKeyUp = (e: KeyboardEvent) => {
    const key = this.keyMap[e.code]
    if (key) (this.state as Record<string, boolean>)[key] = false
  }

  private onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0]
    if (t.clientX < window.innerWidth / 2) {
      this.touchStart = { x: t.clientX, y: t.clientY }
    } else {
      // Right side = jump
      this.state.jump = true
    }
  }

  private onTouchMove = (e: TouchEvent) => {
    if (!this.touchStart) return
    const t = e.touches[0]
    this.touchDelta.x = (t.clientX - this.touchStart.x) / 40
    this.touchDelta.y = (t.clientY - this.touchStart.y) / 40

    this.state.forward  = this.touchDelta.y < -0.3
    this.state.backward = this.touchDelta.y >  0.3
    this.state.left     = this.touchDelta.x < -0.3
    this.state.right    = this.touchDelta.x >  0.3
  }

  private onTouchEnd = () => {
    this.touchStart = null
    this.state.forward  = false
    this.state.backward = false
    this.state.left     = false
    this.state.right    = false
    this.state.jump     = false
  }

  destroy() {
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup',   this.onKeyUp)
    window.removeEventListener('touchstart', this.onTouchStart)
    window.removeEventListener('touchmove',  this.onTouchMove)
    window.removeEventListener('touchend',   this.onTouchEnd)
  }
}
