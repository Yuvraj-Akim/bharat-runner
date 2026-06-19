package com.bharatrunner.game.dto;

import lombok.Data;

/**
 * Sent over WebSocket every tick to synchronize player positions.
 * Kept small — only position, rotation, and animation state.
 */
@Data
public class PlayerStateDto {
    private String playerId;
    private String username;

    // World position components
    private double x;
    private double y;
    private double z;

    // Quaternion for orientation
    private double qx;
    private double qy;
    private double qz;
    private double qw;

    private boolean isMoving;
    private boolean isSprinting;
    private String vehicle; // VehicleType name
    private String emoji;   // Currently displayed emoji (optional)
}
