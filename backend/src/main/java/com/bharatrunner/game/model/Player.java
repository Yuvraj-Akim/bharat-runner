package com.bharatrunner.game.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.Instant;

@Entity
@Table(name = "players")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false, unique = true, length = 30)
    private String username;

    @Column(nullable = false)
    private int coins = 100;

    @Column(nullable = false)
    private int score = 0;

    @Column(name = "deliveries_done", nullable = false)
    private int deliveriesDone = 0;

    @Enumerated(EnumType.STRING)
    @Column(name = "current_vehicle", nullable = false)
    private VehicleType currentVehicle = VehicleType.FOOT;

    // Last known position on the sphere (spherical coords)
    @Column(name = "pos_x") private double posX = 50.0;
    @Column(name = "pos_y") private double posY = 0.0;
    @Column(name = "pos_z") private double posZ = 0.0;

    @Column(name = "created_at", updatable = false)
    private Instant createdAt = Instant.now();

    @Column(name = "last_seen")
    private Instant lastSeen = Instant.now();
}
