package com.bharatrunner.game.controller;

import com.bharatrunner.game.model.Delivery;
import com.bharatrunner.game.service.DeliveryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/deliveries")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DeliveryController {

    private final DeliveryService deliveryService;

    /** POST /api/deliveries/generate?playerId=xxx → get a new mission */
    @PostMapping("/generate")
    public ResponseEntity<Delivery> generate(@RequestParam String playerId) {
        return ResponseEntity.ok(deliveryService.generateMission(playerId));
    }

    /** GET /api/deliveries/active?playerId=xxx */
    @GetMapping("/active")
    public ResponseEntity<List<Delivery>> active(@RequestParam String playerId) {
        return ResponseEntity.ok(deliveryService.getActiveDeliveries(playerId));
    }

    /** POST /api/deliveries/{id}/complete?playerId=xxx */
    @PostMapping("/{id}/complete")
    public ResponseEntity<Map<String, Object>> complete(
            @PathVariable String id,
            @RequestParam String playerId) {
        boolean ok = deliveryService.completeDelivery(id, playerId);
        return ResponseEntity.ok(Map.of("success", ok));
    }
}
