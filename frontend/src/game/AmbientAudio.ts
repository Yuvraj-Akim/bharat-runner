// Synthetic ambient Indian city soundscape — no audio files required.
// AudioContext starts suspended until the browser grants permission
// (first user gesture). Call tryResume() each frame; it's a no-op after running.

export class AmbientAudio {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private running = false
  private bellTimer  = 0
  private hornTimer  = 0

  init() {
    if (this.running) return
    try {
      this.ctx    = new (window.AudioContext || (window as any).webkitAudioContext)()
      this.master = this.ctx.createGain()
      this.master.gain.value = 0.55
      this.master.connect(this.ctx.destination)
      this.running = true
      this.buildAmbience()
    } catch { /* browser may block */ }
  }

  tryResume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {})
    }
  }

  // Call each frame so periodic sounds fire at correct intervals.
  update(dt: number, daytimeRatio: number) {
    if (!this.ctx || !this.master || this.ctx.state !== 'running') return

    // Quieter at night
    const targetGain = daytimeRatio > 0.3 ? 0.55 : 0.2
    this.master.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 1.5)

    this.bellTimer -= dt
    if (this.bellTimer <= 0) {
      this.bellTimer = 18 + Math.random() * 20
      this.playTemplebell()
    }

    this.hornTimer -= dt
    if (this.hornTimer <= 0) {
      this.hornTimer = 6 + Math.random() * 10
      this.playHorn()
    }
  }

  // Sa-Re-Ga ascending arpeggio (Bilawal scale) + high shimmer bell
  playSuccess() {
    if (!this.ctx || !this.master || this.ctx.state !== 'running') return
    const ctx = this.ctx
    const now = ctx.currentTime
    const notes: [number, number, number][] = [[0, 523, 0.22], [1, 659, 0.18], [2, 784, 0.14]]
    for (const [i, freq, vol] of notes) {
      const t    = now + i * 0.13
      const osc  = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0, t)
      gain.gain.linearRampToValueAtTime(vol, t + 0.03)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55)
      osc.connect(gain); gain.connect(this.master!)
      osc.start(t); osc.stop(t + 0.6)
    }
    // Shimmer bell
    const bell  = ctx.createOscillator()
    const bellG = ctx.createGain()
    bell.type = 'sine'
    bell.frequency.value = 1568
    bellG.gain.setValueAtTime(0.09, now + 0.32)
    bellG.gain.exponentialRampToValueAtTime(0.001, now + 1.3)
    bell.connect(bellG); bellG.connect(this.master!)
    bell.start(now + 0.32); bell.stop(now + 1.35)
  }

  // Descending minor-third thud (sad wah-wah)
  playFail() {
    if (!this.ctx || !this.master || this.ctx.state !== 'running') return
    const ctx = this.ctx
    const now = ctx.currentTime
    for (const [offset, freq] of [[0, 392], [0.28, 311]] as [number, number][]) {
      const t    = now + offset
      const osc  = ctx.createOscillator()
      const gain = ctx.createGain()
      const lpf  = ctx.createBiquadFilter()
      osc.type = 'sawtooth'
      osc.frequency.value = freq
      lpf.type = 'lowpass'; lpf.frequency.value = 900
      gain.gain.setValueAtTime(0, t)
      gain.gain.linearRampToValueAtTime(0.16, t + 0.04)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45)
      osc.connect(lpf); lpf.connect(gain); gain.connect(this.master!)
      osc.start(t); osc.stop(t + 0.5)
    }
  }

  stop() {
    this.ctx?.close()
    this.ctx    = null
    this.master = null
    this.running = false
  }

  // ── Private builders ─────────────────────────────────────────────────────────

  private buildAmbience() {
    this.createTrafficHum()
    this.createWindRustle()
    this.createCrowdMurmur()
    this.createBirds()
  }

  private createTrafficHum() {
    const ctx = this.ctx!
    for (const [freq, gain] of [[68, 0.06], [136, 0.03], [204, 0.015]] as [number, number][]) {
      const osc  = ctx.createOscillator()
      const gain_ = ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.value = freq
      // Slow frequency drift for organic feel
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      osc.frequency.linearRampToValueAtTime(freq * 1.02, ctx.currentTime + 4)
      osc.frequency.linearRampToValueAtTime(freq, ctx.currentTime + 8)
      gain_.gain.value = gain
      osc.connect(gain_)
      gain_.connect(this.master!)
      osc.start()
    }
  }

  private createWindRustle() {
    const ctx = this.ctx!
    const bufLen = ctx.sampleRate * 3
    const buf    = ctx.createBuffer(1, bufLen, ctx.sampleRate)
    const data   = buf.getChannelData(0)
    for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1

    const src = ctx.createBufferSource()
    src.buffer = buf
    src.loop   = true

    const lpf = ctx.createBiquadFilter()
    lpf.type = 'lowpass'
    lpf.frequency.value = 600

    const hpf = ctx.createBiquadFilter()
    hpf.type = 'highpass'
    hpf.frequency.value = 80

    const g = ctx.createGain()
    g.gain.value = 0.025

    src.connect(hpf)
    hpf.connect(lpf)
    lpf.connect(g)
    g.connect(this.master!)
    src.start()
  }

  private createCrowdMurmur() {
    const ctx = this.ctx!
    const freqs = [180, 240, 310, 380, 460]
    for (const f of freqs) {
      const osc  = ctx.createOscillator()
      const lfo  = ctx.createOscillator()
      const lfoG = ctx.createGain()
      const g    = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.value = f + (Math.random() - 0.5) * 30
      lfo.type = 'sine'
      lfo.frequency.value = 0.1 + Math.random() * 0.3
      lfoG.gain.value = 0.008
      g.gain.value    = 0.018

      lfo.connect(lfoG)
      lfoG.connect(g.gain)
      osc.connect(g)
      g.connect(this.master!)
      osc.start(); lfo.start()
    }
  }

  private createBirds() {
    const ctx = this.ctx!
    // High-pitched chirps: two oscillators with vibrato
    for (const baseFreq of [2400, 3100, 2700]) {
      const osc  = ctx.createOscillator()
      const lfo  = ctx.createOscillator()
      const lfoG = ctx.createGain()
      const g    = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.value = baseFreq
      lfo.type = 'sine'
      lfo.frequency.value = 8 + Math.random() * 6
      lfoG.gain.value = 180
      g.gain.value    = 0.012

      lfo.connect(lfoG)
      lfoG.connect(osc.frequency)
      osc.connect(g)
      g.connect(this.master!)
      osc.start(); lfo.start()
    }
  }

  private playTemplebell() {
    const ctx = this.ctx!
    const now = ctx.currentTime
    for (const [mult, vol] of [[1, 0.18], [2.75, 0.09], [5.0, 0.04]] as [number, number][]) {
      const osc  = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = 880 * mult
      gain.gain.setValueAtTime(vol, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5)
      osc.connect(gain)
      gain.connect(this.master!)
      osc.start(now)
      osc.stop(now + 2.6)
    }
  }

  private playHorn() {
    const ctx = this.ctx!
    const now  = ctx.currentTime
    const freq = 280 + Math.floor(Math.random() * 4) * 40  // A/B/C/D
    const dur  = 0.2 + Math.random() * 0.35

    const osc  = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sawtooth'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.14, now + 0.03)
    gain.gain.setValueAtTime(0.14, now + dur - 0.03)
    gain.gain.linearRampToValueAtTime(0, now + dur)

    const lpf = ctx.createBiquadFilter()
    lpf.type = 'lowpass'
    lpf.frequency.value = 1800

    osc.connect(lpf)
    lpf.connect(gain)
    gain.connect(this.master!)
    osc.start(now)
    osc.stop(now + dur + 0.05)
  }
}
