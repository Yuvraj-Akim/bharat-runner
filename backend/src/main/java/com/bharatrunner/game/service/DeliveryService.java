package com.bharatrunner.game.service;

import com.bharatrunner.game.model.*;
import com.bharatrunner.game.repository.DeliveryRepository;
import com.bharatrunner.game.repository.PlayerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class DeliveryService {

    private static final String[] ZONES = {
        "Market", "Railway Station", "Temple", "Residential Colony",
        "IT Park", "Hospital", "College", "Government Office"
    };

    private final DeliveryRepository deliveryRepo;
    private final PlayerRepository   playerRepo;
    private final Random             rng = new Random();

    /** Generate a random delivery mission for a player. */
    @Transactional
    public Delivery generateMission(String playerId) {
        DeliveryType type   = DeliveryType.values()[rng.nextInt(DeliveryType.values().length)];
        String fromZone     = ZONES[rng.nextInt(ZONES.length)];
        String toZone;
        do { toZone = ZONES[rng.nextInt(ZONES.length)]; } while (toZone.equals(fromZone));

        int reward = type.getMinReward() + rng.nextInt(type.getMaxReward() - type.getMinReward());

        Delivery d = Delivery.builder()
            .playerId(playerId)
            .deliveryType(type)
            .fromZone(fromZone)
            .toZone(toZone)
            .reward(reward)
            .timeLimit(90 + rng.nextInt(60))
            .build();

        return deliveryRepo.save(d);
    }

    @Transactional
    public boolean completeDelivery(String deliveryId, String playerId) {
        return deliveryRepo.findById(deliveryId).map(d -> {
            if (!d.getPlayerId().equals(playerId)) return false;
            if (d.getStatus() != DeliveryStatus.ACTIVE) return false;

            d.setStatus(DeliveryStatus.COMPLETED);
            d.setCompletedAt(Instant.now());
            deliveryRepo.save(d);

            playerRepo.findById(playerId).ifPresent(p -> {
                p.setCoins(p.getCoins() + d.getReward());
                p.setScore(p.getScore() + d.getReward() * 10);
                p.setDeliveriesDone(p.getDeliveriesDone() + 1);
                playerRepo.save(p);
            });
            return true;
        }).orElse(false);
    }

    public List<Delivery> getActiveDeliveries(String playerId) {
        return deliveryRepo.findByPlayerIdAndStatus(playerId, DeliveryStatus.ACTIVE);
    }
}
