package com.bharatrunner.game.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.Instant;

@Entity
@Table(name = "deliveries")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "player_id", nullable = false)
    private String playerId;

    @Enumerated(EnumType.STRING)
    @Column(name = "delivery_type", nullable = false)
    private DeliveryType deliveryType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DeliveryStatus status = DeliveryStatus.ACTIVE;

    // Pickup zone name
    @Column(name = "from_zone", nullable = false, length = 50)
    private String fromZone;

    // Delivery zone name
    @Column(name = "to_zone", nullable = false, length = 50)
    private String toZone;

    @Column(nullable = false)
    private int reward;

    // Time limit in seconds
    @Column(name = "time_limit", nullable = false)
    private int timeLimit = 120;

    @Column(name = "created_at", updatable = false)
    private Instant createdAt = Instant.now();

    @Column(name = "completed_at")
    private Instant completedAt;
}
