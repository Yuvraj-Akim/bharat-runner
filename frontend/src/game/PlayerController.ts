import * as THREE from 'three'
import { PLANET_RADIUS, getSurfaceNormal } from './PlanetGeometry'

export interface InputState {
  forward: boolean
  backward: boolean
  left: boolean
  right: boolean
  jump: boolean
  sprint: boolean
}

const WALK_SPEED   = 8
const SPRINT_SPEED = 16
const JUMP_FORCE   = 12
const GRAVITY      = 25   // units/s² toward planet center

export class PlayerController {
  mesh: THREE.Group
  isMoving:    boolean = false   // exposed for multiplayer state send
  isSprinting: boolean = false   // exposed for multiplayer state send

  private angularOffset: number = 0
  private isGrounded:    boolean = true
  private jumpVelocity:  number  = 0

  constructor() {
    this.mesh = this.buildCharacter()
    // Start on equator
    this.mesh.position.set(PLANET_RADIUS + 1, 0, 0)
  }

  private buildCharacter(): THREE.Group {
    const group = new THREE.Group()

    // Body
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.9, 0.4),
      new THREE.MeshLambertMaterial({ color: 0xe85d04 }) // saffron kurta
    )
    body.position.y = 0.45
    body.castShadow = true

    // Head
    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.MeshLambertMaterial({ color: 0xc68642 }) // skin tone
    )
    head.position.y = 1.15
    head.castShadow = true

    // Legs
    const legGeo = new THREE.BoxGeometry(0.25, 0.5, 0.3)
    const legMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
    const legL = new THREE.Mesh(legGeo, legMat)
    legL.position.set(-0.175, -0.25, 0)
    legL.castShadow = true
    const legR = legL.clone()
    legR.position.set(0.175, -0.25, 0)

    // Delivery bag on back
    const bag = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.5, 0.15),
      new THREE.MeshLambertMaterial({ color: 0x2d6a4f })
    )
    bag.position.set(0, 0.5, -0.275)

    group.add(body, head, legL, legR, bag)
    return group
  }

  update(dt: number, input: InputState, speedMult = 1.0) {
    const pos = this.mesh.position

    // Gravity direction = toward planet center
    const up = getSurfaceNormal(pos)           // away from planet
    const distFromCenter = pos.length()

    // --- Gravity / grounded check ---
    const surfaceDist = distFromCenter - PLANET_RADIUS
    if (surfaceDist <= 1.05) {
      this.isGrounded = true
      this.jumpVelocity = Math.max(0, this.jumpVelocity)
    } else {
      this.isGrounded = false
    }

    if (this.isGrounded && input.jump) {
      this.jumpVelocity = JUMP_FORCE
      this.isGrounded = false
    }

    // Vertical motion (along surface normal)
    if (!this.isGrounded) {
      this.jumpVelocity -= GRAVITY * dt
    } else {
      this.jumpVelocity = 0
    }

    // --- Horizontal movement ---
    const speed = (input.sprint ? SPRINT_SPEED : WALK_SPEED) * speedMult
    let moving = false

    if (input.left)  this.angularOffset += 2.0 * dt
    if (input.right) this.angularOffset -= 2.0 * dt

    // Build right and forward tangent vectors on the sphere surface
    const worldUp = new THREE.Vector3(0, 1, 0)
    let right = new THREE.Vector3().crossVectors(up, worldUp).normalize()
    if (right.lengthSq() < 0.001) {
      // Pole fallback
      right.set(1, 0, 0)
    }
    const forward = new THREE.Vector3().crossVectors(right, up).normalize()

    // Rotate forward/right by angularOffset (player yaw around surface normal)
    const yawQuat = new THREE.Quaternion().setFromAxisAngle(up, this.angularOffset)
    const facingForward = forward.clone().applyQuaternion(yawQuat)
    const facingRight   = right.clone().applyQuaternion(yawQuat)

    const moveDir = new THREE.Vector3()
    if (input.forward)  { moveDir.add(facingForward); moving = true }
    if (input.backward) { moveDir.sub(facingForward); moving = true }

    if (moving) {
      moveDir.normalize().multiplyScalar(speed * dt)
      pos.add(moveDir)
    }

    // Apply jump velocity along surface normal
    pos.addScaledVector(up, this.jumpVelocity * dt)

    // Clamp to surface (prevent sinking)
    const newDist = pos.length()
    if (newDist < PLANET_RADIUS + 1) {
      pos.normalize().multiplyScalar(PLANET_RADIUS + 1)
      if (this.jumpVelocity < 0) this.jumpVelocity = 0
    }

    // --- Orient character to planet surface normal ---
    this.alignToSurface(up, facingForward)

    this.isMoving    = moving
    this.isSprinting = moving && input.sprint

    // Animate legs while walking
    this.animateLegs(dt, moving)
  }

  private alignToSurface(up: THREE.Vector3, forward: THREE.Vector3) {
    // Build rotation: +Y = up (away from planet), +Z = forward
    const mat = new THREE.Matrix4().makeBasis(
      new THREE.Vector3().crossVectors(forward, up).normalize(),
      up,
      forward.clone().negate()
    )
    this.mesh.quaternion.setFromRotationMatrix(mat)
  }

  private legPhase = 0
  private animateLegs(dt: number, moving: boolean) {
    if (!moving) {
      this.legPhase = 0
      return
    }
    this.legPhase += dt * 8
    const swing = Math.sin(this.legPhase) * 0.3
    const legs = [this.mesh.children[2], this.mesh.children[3]] as THREE.Mesh[]
    if (legs[0]) legs[0].rotation.x = swing
    if (legs[1]) legs[1].rotation.x = -swing
  }

  get position(): THREE.Vector3 {
    return this.mesh.position
  }

  get quaternion(): THREE.Quaternion {
    return this.mesh.quaternion
  }
}
