import * as THREE from 'three'
import { PlayerController } from './PlayerController'

const ARM_LENGTH   = 10   // distance behind player
const HEIGHT_ABOVE = 4    // height above player
const LERP_SPEED   = 6    // smoothing factor

export class CameraController {
  camera: THREE.PerspectiveCamera
  private targetPos = new THREE.Vector3()
  private currentPos = new THREE.Vector3()

  constructor() {
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000)
    this.camera.position.set(70, 0, 0)
  }

  update(dt: number, player: PlayerController) {
    const playerPos = player.position
    const up = playerPos.clone().normalize()  // surface normal

    // Get player's facing forward vector from its world rotation
    const playerForward = new THREE.Vector3(0, 0, -1).applyQuaternion(player.quaternion)

    // Camera target: behind and above player on the sphere surface
    const backOffset  = playerForward.clone().negate().multiplyScalar(ARM_LENGTH)
    const heightOffset = up.clone().multiplyScalar(HEIGHT_ABOVE)

    this.targetPos.copy(playerPos).add(backOffset).add(heightOffset)

    // Smooth follow
    this.currentPos.lerp(this.targetPos, Math.min(1, LERP_SPEED * dt))
    this.camera.position.copy(this.currentPos)

    // Look at player (slightly above feet)
    const lookAt = playerPos.clone().addScaledVector(up, 1.0)
    this.camera.lookAt(lookAt)

    // Keep camera "up" aligned with planet up at camera position
    const camUp = this.camera.position.clone().normalize()
    this.camera.up.copy(camUp)
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
  }
}
