package com.bharatrunner.game.repository;

import com.bharatrunner.game.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PlayerRepository extends JpaRepository<Player, String> {
    Optional<Player> findByUsername(String username);
    boolean existsByUsername(String username);

    @Query("SELECT p FROM Player p ORDER BY p.score DESC LIMIT 10")
    List<Player> findTopTenByScore();
}
