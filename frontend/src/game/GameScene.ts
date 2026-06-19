import * as THREE from 'three'
import { createPlanet } from './PlanetGeometry'
import { PlayerController } from './PlayerController'
import { CameraController } from './CameraController'
import { InputManager } from './InputManager'
import { DayNightCycle } from './DayNightCycle'
import { addDecorations } from './WorldDecorations'
import { POIManager } from './POIManager'
import { RoadNetwork } from './RoadNetwork'
import { MinimapSystem } from './MinimapSystem'
import { NPCSystem } from './NPCSystem'
import { StreetLights } from './StreetLights'
import { loadOrGenerateWorld, type WorldData, type WorldPOI } from './WorldData'
import { MultiplayerClient, type ConnectionStatus } from './MultiplayerClient'
import { RemotePlayerManager } from './RemotePlayerManager'

const SEND_INTERVAL = 0.05   // 20 Hz

export class GameScene {
  renderer:  THREE.WebGLRenderer
  scene:     THREE.Scene
  worldData: WorldData

  private camera:       CameraController
  private player:       PlayerController
  private input:        InputManager
  private dayNight:     DayNightCycle
  private poiMgr:       POIManager
  private roads:        RoadNetwork
  private minimap:      MinimapSystem
  private npcSystem:    NPCSystem
  private streetLights: StreetLights
  private clock:        THREE.Clock
  private animId:       number = 0

  // Multiplayer — null until connectMultiplayer() is called
  private mpClient:      MultiplayerClient | null = null
  private remotePlayers: RemotePlayerManager | null = null
  private sendTimer      = 0
  private mpUsername     = ''

  // ── External callbacks ────────────────────────────────────────────────────
  onTimeUpdate?:     (hour: number) => void
  onPlayerPosition?: (pos: THREE.Vector3) => void
  onNearPOI?:        (poi: WorldPOI | null) => void
  onOnlineCount?:    (count: number) => void
  onMpStatus?:       (status: ConnectionStatus) => void

  constructor(canvas: HTMLCanvasElement, minimapCanvas: HTMLCanvasElement) {
    // ── Renderer ────────────────────────────────────────────────────────────
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type    = THREE.PCFSoftShadowMap

    this.scene = new THREE.Scene()
    this.clock = new THREE.Clock()

    // ── World data (localStorage cache or fresh generation) ─────────────────
    this.worldData = loadOrGenerateWorld()

    // ── Planet surface ──────────────────────────────────────────────────────
    this.scene.add(createPlanet())
    this.addStars()
    this.addAtmosphere()

    // ── Vegetation + rocks ──────────────────────────────────────────────────
    addDecorations(this.scene)

    // ── POI buildings + labels ──────────────────────────────────────────────
    this.poiMgr = new POIManager(this.scene)
    this.poiMgr.buildAll(this.worldData)

    // ── Road network (great-circle tubes) ───────────────────────────────────
    this.roads = new RoadNetwork(this.scene)
    this.roads.buildAll(this.worldData)

    // ── Street lights (lamp posts near every POI, glow at night) ───────────
    this.streetLights = new StreetLights(this.scene, this.worldData)

    // ── NPC pedestrians ─────────────────────────────────────────────────────
    this.npcSystem = new NPCSystem(this.scene, this.worldData.pois)

    // ── Lighting + day/night (10-min full cycle) ────────────────────────────
    this.dayNight = new DayNightCycle(this.scene)

    // ── Local player ────────────────────────────────────────────────────────
    this.player = new PlayerController()
    this.scene.add(this.player.mesh)

    // ── Camera ──────────────────────────────────────────────────────────────
    this.camera = new CameraController()

    // ── Input ───────────────────────────────────────────────────────────────
    this.input = new InputManager()

    // ── Minimap ─────────────────────────────────────────────────────────────
    this.minimap = new MinimapSystem(minimapCanvas)
    this.minimap.loadWorld(this.worldData)

    window.addEventListener('resize', this.onResize)
  }

  // ── Multiplayer API ───────────────────────────────────────────────────────

  connectMultiplayer(username: string) {
    if (this.mpClient) return
    this.mpUsername    = username
    this.remotePlayers = new RemotePlayerManager(this.scene)

    const proto  = location.protocol === 'https:' ? 'wss' : 'ws'
    const wsUrl  = `${proto}://${location.host}/ws`
    this.mpClient = new MultiplayerClient(wsUrl, username)

    this.mpClient.onPlayerStates = (states) => this.remotePlayers!.updateFromWorldState(states)
    this.mpClient.onPlayerLeft   = (id)     => this.remotePlayers!.removePlayer(id)
    this.mpClient.onEmoji        = (id, em) => this.remotePlayers!.showEmoji(id, em)
    this.mpClient.onOnlineCount  = (n)      => this.onOnlineCount?.(n)
    this.mpClient.onStatusChange = (s)      => this.onMpStatus?.(s)
    this.mpClient.connect()
  }

  disconnectMultiplayer() {
    this.mpClient?.disconnect()
    this.remotePlayers?.dispose()
    this.mpClient      = null
    this.remotePlayers = null
    this.sendTimer     = 0
  }

  sendEmoji(emoji: string) { this.mpClient?.sendEmoji(emoji) }

  get mpStatus(): ConnectionStatus { return this.mpClient?.status ?? 'idle' }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  start() {
    this.clock.start()
    this.loop()
  }

  private loop = () => {
    this.animId = requestAnimationFrame(this.loop)
    const dt = Math.min(this.clock.getDelta(), 0.05)

    // Local player — authoritative, surface-gravity movement
    this.player.update(dt, this.input.state)
    this.camera.update(dt, this.player)

    // Day/night cycle (600 s full rotation)
    this.dayNight.update(dt, this.renderer)

    // Street lights react to daylight ratio
    this.streetLights.update(this.dayNight.daytimeRatio)

    // NPC pedestrians wander between POIs
    this.npcSystem.update(dt, this.worldData.pois)

    // Remote players — interpolated every frame, never snapped
    this.remotePlayers?.update(dt)

    // Send local state at 20 Hz
    if (this.mpClient?.isConnected) {
      this.sendTimer += dt
      if (this.sendTimer >= SEND_INTERVAL) {
        this.sendTimer -= SEND_INTERVAL
        const p = this.player.position
        const q = this.player.quaternion
        this.mpClient.sendState({
          username:    this.mpUsername,
          x: p.x, y: p.y, z: p.z,
          qx: q.x, qy: q.y, qz: q.z, qw: q.w,
          isMoving:    this.player.isMoving,
          isSprinting: this.player.isSprinting,
          vehicle:     'none',
        })
      }
    }

    // Minimap (cheap 2D canvas, redrawn each frame)
    this.minimap.draw(this.player.position, this.player.quaternion)

    // POI proximity — throttled to ~10 checks/sec
    if (Math.round(this.clock.getElapsedTime() * 10) % 10 === 0) {
      const near = this.poiMgr.nearestPOI(this.player.position, 10)
      this.onNearPOI?.(near)
    }

    this.onTimeUpdate?.(this.dayNight.currentHour)
    this.onPlayerPosition?.(this.player.position)

    this.renderer.render(this.scene, this.camera.camera)
  }

  stop() {
    cancelAnimationFrame(this.animId)
    this.disconnectMultiplayer()
    this.npcSystem.dispose(this.scene)
    this.input.destroy()
    window.removeEventListener('resize', this.onResize)
  }

  // ── Private helpers ───────────────────────────────────────────────────────

  private addStars() {
    const count = 2000
    const pos   = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 3000
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    this.scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.8 })))
  }

  private addAtmosphere() {
    const geo = new THREE.SphereGeometry(55, 32, 32)
    const mat = new THREE.MeshPhongMaterial({
      color: 0x4488ff, transparent: true, opacity: 0.06,
      side: THREE.BackSide, depthWrite: false,
    })
    this.scene.add(new THREE.Mesh(geo, mat))
  }

  private onResize = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.camera.onResize()
  }
}
