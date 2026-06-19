package com.bharatrunner.game.service;

import com.bharatrunner.game.model.Player;
import com.bharatrunner.game.model.VehicleType;
import com.bharatrunner.game.repository.PlayerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlayerService {

    private final PlayerRepository repo;

    /** Register or retrieve player by username (session-based, no auth in Phase 1). */
    @Transactional
    public Player getOrCreate(String username) {
        return repo.findByUsername(username).orElseGet(() ->
            repo.save(Player.builder()
                .username(username)
                .build())
        );
    }

    @Transactional
    public void updatePosition(String playerId, double x, double y, double z) {
        repo.findById(playerId).ifPresent(p -> {
            p.setPosX(x); p.setPosY(y); p.setPosZ(z);
            p.setLastSeen(Instant.now());
            repo.save(p);
        });
    }

    @Transactional
    public boolean unlockVehicle(String playerId, VehicleType vehicle) {
        Optional<Player> opt = repo.findById(playerId);
        if (opt.isEmpty()) return false;
        Player p = opt.get();
        if (p.getCoins() < vehicle.getUnlockCost()) return false;
        p.setCoins(p.getCoins() - vehicle.getUnlockCost());
        p.setCurrentVehicle(vehicle);
        repo.save(p);
        return true;
    }

    public List<Player> getLeaderboard() {
        return repo.findTopTenByScore();
    }

    public Optional<Player> findById(String id) {
        return repo.findById(id);
    }
}
