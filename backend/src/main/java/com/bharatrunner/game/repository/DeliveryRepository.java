package com.bharatrunner.game.repository;

import com.bharatrunner.game.model.Delivery;
import com.bharatrunner.game.model.DeliveryStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliveryRepository extends JpaRepository<Delivery, String> {
    List<Delivery> findByPlayerIdAndStatus(String playerId, DeliveryStatus status);
    long countByPlayerIdAndStatus(String playerId, DeliveryStatus status);
}
