package com.bharatrunner.game.controller;

import com.bharatrunner.game.model.Player;
import com.bharatrunner.game.model.VehicleType;
import com.bharatrunner.game.service.PlayerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/players")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PlayerController {

    private final PlayerService playerService;

    /** GET /api/players/join?username=Raju → register or fetch player */
    @GetMapping("/join")
    public ResponseEntity<Player> join(@RequestParam String username) {
        if (username == null || username.isBlank() || username.length() > 30) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(playerService.getOrCreate(username.trim()));
    }

    /** GET /api/players/leaderboard */
    @GetMapping("/leaderboard")
    public ResponseEntity<List<Player>> leaderboard() {
        return ResponseEntity.ok(playerService.getLeaderboard());
    }

    /** POST /api/players/{id}/vehicle */
    @PostMapping("/{id}/vehicle")
    public ResponseEntity<Map<String, Object>> unlockVehicle(
            @PathVariable String id,
            @RequestParam String vehicle) {
        try {
            VehicleType vt = VehicleType.valueOf(vehicle.toUpperCase());
            boolean ok = playerService.unlockVehicle(id, vt);
            if (ok) return ResponseEntity.ok(Map.of("success", true, "vehicle", vt.getDisplayName()));
            return ResponseEntity.ok(Map.of("success", false, "reason", "Insufficient coins"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", "Unknown vehicle: " + vehicle));
        }
    }
}
