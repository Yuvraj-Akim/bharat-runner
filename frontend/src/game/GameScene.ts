import * as THREE from 'three'
import { createPlanet, PLANET_RADIUS } from './PlanetGeometry'
import { PlayerController } from './PlayerController'
import { CameraController } from './CameraController'
import { InputManager } from './InputManager'
import { DayNightCycle } from './DayNightCycle'
import { addDecorations } from './WorldDecorations'
import { POIManager, alignToSurface } from './POIManager'
import { RoadNetwork } from './RoadNetwork'
import { MinimapSystem } from './MinimapSystem'
import { NPCSystem } from './NPCSystem'
import { StreetLights } from './StreetLights'
import { VehicleSystem } from './VehicleSystem'
import { MissionSystem } from './MissionSystem'
import type { HudMission } from './MissionSystem'
import { BeaconSystem } from './BeaconSystem'
import { addCityDecorations } from './CityDecorations'
import { AmbientAudio } from './AmbientAudio'
import { loadOrGenerateWorld, type WorldData, type WorldPOI } from './WorldData'
import { MultiplayerClient, type ConnectionStatus } from './MultiplayerClient'
import { RemotePlayerManager } from './RemotePlayerManager'

const SEND_INTERVAL   = 0.05   // 20 Hz
const GARAGE_RADIUS   = 12     // world units — E key activates within this distance
const GARAGE_DIR      = new THREE.Vector3(1, 0.18, 0.25).normalize()

const VEHICLE_SPEED_MULTS: Record<string, number> = {
  bicycle:     1.0,
  scooter:     1.9,
  ev_bike:     2.4,
  autorickshaw: 1.5,
}

const VEHICLE_LABELS: Record<string, string> = {
  bicycle:      '🚲 Bicycle',
  scooter:      '🛵 Scooter',
  ev_bike:      '⚡ EV Bike',
  autorickshaw: '🛺 Auto Rickshaw',
}

export class GameScene {
  renderer:  THREE.WebGLRenderer
  scene:     THREE.Scene
  worldData: WorldData

  private camera:         CameraController
  private player:         PlayerController
  private input:          InputManager
  private dayNight:       DayNightCycle
  private poiMgr:         POIManager
  private roads:          RoadNetwork
  private minimap:        MinimapSystem
  private npcSystem:      NPCSystem
  private streetLights:   StreetLights
  private vehicleSystem:  VehicleSystem
  private missionSystem:  MissionSystem
  private beacon:         BeaconSystem
  private ambientAudio:   AmbientAudio
  private clock:          THREE.Clock
  private animId:         number = 0
  private garagePos:      THREE.Vector3

  // Vehicle mount state
  private _isMounted      = false
  private _currentVehicle = 'bicycle'
  private _speedMult      = 1.0
  private _prevNearGarage = false

  // Multiplayer — null until connectMultiplayer() is called
  private mpClient:      MultiplayerClient | null = null
  private remotePlayers: RemotePlayerManager | null = null
  private sendTimer      = 0
  private mpUsername     = ''

  // ── External callbacks ────────────────────────────────────────────────────
  onTimeUpdate?:      (hour: number) => void
  onPlayerPosition?:  (pos: THREE.Vector3) => void
  onNearPOI?:         (poi: WorldPOI | null) => void
  onOnlineCount?:     (count: number) => void
  onMpStatus?:        (status: ConnectionStatus) => void
  onMissionStart?:    (m: HudMission) => void
  onMissionUpdate?:   (timeRemaining: number) => void
  onMissionComplete?: (reward: number) => void
  onMissionFail?:     () => void
  onInteractionHint?: (hint: string | null) => void
  onVehicleMounted?:  (mounted: boolean) => void
  onNearGarage?:      (near: boolean) => void

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

    // ── Dense city decorations (instanced — minimal draw calls) ────────────
    addCityDecorations(this.scene, this.worldData)

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

    // ── Vehicles (bicycles, scooters, auto rickshaws) ────────────────────────
    this.vehicleSystem = new VehicleSystem(this.scene, this.worldData)

    // ── Mission system (delivery gameplay) ─────────────────────────────────
    this.missionSystem = new MissionSystem(this.worldData)
    this.missionSystem.onMissionStart = m => {
      this.onMissionStart?.(m)
      // Point beacon at destination POI
      const dstPOI = this.worldData.pois.find(p => p.id === m.dstId) ?? null
      this.beacon.setDestination(dstPOI, m.color)
      this.minimap.setDestination(m.dstId, m.color)
    }
    this.missionSystem.onMissionUpdate   = t => this.onMissionUpdate?.(t)
    this.missionSystem.onMissionComplete = r => {
      this.onMissionComplete?.(r)
      this.ambientAudio.playSuccess()
      this.beacon.setDestination(null, '#ffffff')
      this.minimap.setDestination(null)
    }
    this.missionSystem.onMissionFail = () => {
      this.onMissionFail?.()
      this.ambientAudio.playFail()
      this.beacon.setDestination(null, '#ffffff')
      this.minimap.setDestination(null)
    }

    // ── Mission destination beacon ──────────────────────────────────────────
    this.beacon = new BeaconSystem(this.scene)

    // ── Garage marker (fixed location near player spawn) ───────────────────
    this.garagePos = GARAGE_DIR.clone().multiplyScalar(PLANET_RADIUS + 1)
    this.buildGarageMarker()

    // ── Ambient audio (lazy-start on first user gesture) ───────────────────
    this.ambientAudio = new AmbientAudio()
    this.ambientAudio.init()

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

  // ── Garage marker ─────────────────────────────────────────────────────────

  private buildGarageMarker() {
    const group = new THREE.Group()

    const wallMat = new THREE.MeshLambertMaterial({ color: 0xff8c42 })
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x1d3557 })
    const signMat = new THREE.MeshLambertMaterial({ color: 0xffd166 })

    // Main building
    const wall = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.8, 3.0), wallMat)
    wall.position.y = 1.4; wall.castShadow = true

    // Roof
    const roof = new THREE.Mesh(new THREE.ConeGeometry(2.6, 1.2, 4), roofMat)
    roof.position.y = 3.4; roof.castShadow = true

    // Sign
    const sign = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.8, 0.1), signMat)
    sign.position.set(0, 2.2, 1.55)

    group.add(wall, roof, sign)
    alignToSurface(group, GARAGE_DIR)
    this.scene.add(group)

    // Ground ring
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(GARAGE_RADIUS * 0.85, GARAGE_RADIUS, 48),
      new THREE.MeshBasicMaterial({
        color: 0xff8c42, side: THREE.DoubleSide,
        transparent: true, opacity: 0.15, depthWrite: false,
      })
    )
    ring.renderOrder = 1
    alignToSurface(ring, GARAGE_DIR, 0.08)
    this.scene.add(ring)
  }

  // ── Vehicle API ───────────────────────────────────────────────────────────

  setVehicle(id: string) {
    this._currentVehicle = id
    this._speedMult = this._isMounted ? (VEHICLE_SPEED_MULTS[id] ?? 1.0) : 1.0
  }

  private toggleMount() {
    this._isMounted = !this._isMounted
    this._speedMult = this._isMounted ? (VEHICLE_SPEED_MULTS[this._currentVehicle] ?? 1.0) : 1.0
    this.onVehicleMounted?.(this._isMounted)
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

    // Resume audio after first user gesture (browser requires it)
    this.ambientAudio.tryResume()

    // Local player — authoritative, surface-gravity movement with vehicle speed
    this.player.update(dt, this.input.state, this._speedMult)
    this.camera.update(dt, this.player)

    // Day/night cycle (600 s full rotation)
    this.dayNight.update(dt, this.renderer)

    // Street lights react to daylight ratio
    this.streetLights.update(this.dayNight.daytimeRatio)

    // NPC pedestrians wander between POIs
    this.npcSystem.update(dt, this.worldData.pois)

    // Vehicles follow road splines with day/night headlights
    this.vehicleSystem.update(dt, this.worldData.pois, this.dayNight.daytimeRatio)

    // Beacon pulse
    this.beacon.update(dt)

    // Ambient city sounds
    this.ambientAudio.update(dt, this.dayNight.daytimeRatio)

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
          vehicle:     this._isMounted ? this._currentVehicle : 'none',
        })
      }
    }

    // Minimap (cheap 2D canvas)
    this.minimap.draw(this.player.position, this.player.quaternion, dt)

    // Proximity checks
    const nearPOI    = this.poiMgr.nearestPOI(this.player.position, 10)
    const nearGarage = this.player.position.distanceTo(this.garagePos) < GARAGE_RADIUS

    // Notify Vue only on state change (avoid per-frame store writes)
    if (nearGarage !== this._prevNearGarage) {
      this._prevNearGarage = nearGarage
      this.onNearGarage?.(nearGarage)
    }

    // E key — garage has higher priority than mission interact
    if (this.input.consumeInteract()) {
      if (nearGarage) {
        this.toggleMount()
      } else {
        this.missionSystem.tryInteract(nearPOI)
      }
    }

    this.missionSystem.update(dt)

    // Compute interaction hint with priority ordering
    let hint: string | null = null
    if (nearGarage) {
      const label = VEHICLE_LABELS[this._currentVehicle] ?? this._currentVehicle
      hint = this._isMounted
        ? `Press [E] at Garage to dismount ${label}`
        : `Press [E] at Garage to mount ${label}`
    } else {
      hint = this.missionSystem.interactionHint(nearPOI)
    }

    this.onInteractionHint?.(hint)
    this.onNearPOI?.(nearPOI)
    this.onTimeUpdate?.(this.dayNight.currentHour)
    this.onPlayerPosition?.(this.player.position)

    this.renderer.render(this.scene, this.camera.camera)
  }

  stop() {
    cancelAnimationFrame(this.animId)
    this.disconnectMultiplayer()
    this.npcSystem.dispose(this.scene)
    this.vehicleSystem.dispose(this.scene)
    this.beacon.dispose()
    this.ambientAudio.stop()
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
