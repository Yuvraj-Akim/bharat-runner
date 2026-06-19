import * as THREE from 'three'

// 10-minute full cycle (600 s)
const DAY_DURATION = 600

export class DayNightCycle {
  sunLight:     THREE.DirectionalLight
  ambientLight: THREE.AmbientLight

  private skyColor      = new THREE.Color()
  private _timeOfDay    = 0.35   // start mid-morning (t=0.35 ≈ 8:24 am, sun is rising)
  private _daytimeRatio = 1      // cached each update — read by StreetLights

  constructor(scene: THREE.Scene) {
    // Warm sunlight
    this.sunLight = new THREE.DirectionalLight(0xfff4e0, 2.5)
    this.sunLight.castShadow = true
    this.sunLight.shadow.mapSize.set(2048, 2048)
    this.sunLight.shadow.camera.near   = 1
    this.sunLight.shadow.camera.far    = 300
    this.sunLight.shadow.camera.left   = -80
    this.sunLight.shadow.camera.right  =  80
    this.sunLight.shadow.camera.top    =  80
    this.sunLight.shadow.camera.bottom = -80

    // Pure-white ambient — dark colour like 0x404060 makes everything black at low intensity.
    // 0.50 at night keeps the planet clearly visible; 0.80 at noon feels natural.
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

    scene.add(this.sunLight, this.ambientLight)
  }

  update(dt: number, renderer: THREE.WebGLRenderer) {
    this._timeOfDay = (this._timeOfDay + dt / DAY_DURATION) % 1
    const t = this._timeOfDay

    // ── Sun orbit ───────────────────────────────────────────────────────────
    // Orbit in the XZ plane (around Y axis) so the sun sweeps past the equatorial
    // region where the player spawns (PLANET_RADIUS+1, 0, 0).
    // angle=0 at t=0.5 (noon) → sun directly in +X, matching player start position.
    const angle   = (t - 0.5) * Math.PI * 2
    const sunDist = 120
    this.sunLight.position.set(
      Math.cos(angle) * sunDist,   // +X at noon → illuminates X-equator face-on
      50,                          // constant elevation — casts downward shadows
      Math.sin(angle) * sunDist,   // +Z → -Z over the course of a day
    )

    // daytimeRatio: 0 at midnight, 1 at noon
    // Uses the angle around Y so it's consistent with the XZ orbit above.
    const ratio = Math.max(0, Math.cos(angle))
    this._daytimeRatio = ratio

    // Sun intensity: zero at night, bright at noon
    this.sunLight.intensity = ratio * 2.8

    // Ambient: white light, always bright enough to see the planet
    // 0.50 (night) → 0.80 (noon)
    this.ambientLight.intensity = 0.50 + ratio * 0.30

    // ── Sky colour ──────────────────────────────────────────────────────────
    // Use t directly for transitions so dawn/dusk look orange even at low ratio.
    const dawn = t > 0.18 && t < 0.38   // ~4:20 am  → ~9:07 am
    const dusk = t > 0.62 && t < 0.82   // ~2:53 pm  → ~7:41 pm

    if (ratio < 0.03 && !dawn && !dusk) {
      // True night
      this.skyColor.setHex(0x050814)
    } else if (dawn) {
      const prog = (t - 0.18) / (0.38 - 0.18)
      this.skyColor.setHex(0xff6e1f)
      this.skyColor.lerp(new THREE.Color(0x87ceeb), prog)
    } else if (dusk) {
      const prog = (t - 0.62) / (0.82 - 0.62)
      this.skyColor.setHex(0x87ceeb)
      this.skyColor.lerp(new THREE.Color(0xff6e1f), prog)
    } else {
      // Full daytime
      this.skyColor.setHex(0x87ceeb)
    }

    renderer.setClearColor(this.skyColor)
  }

  /** 0 = night, 1 = peak noon — read by StreetLights to fade lamps */
  get daytimeRatio(): number { return this._daytimeRatio }

  /** Hour 0–23 for the HUD clock */
  get currentHour(): number { return Math.floor(this._timeOfDay * 24) }
}
