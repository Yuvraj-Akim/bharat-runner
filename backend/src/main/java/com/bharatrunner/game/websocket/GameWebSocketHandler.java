package com.bharatrunner.game.websocket;

import com.bharatrunner.game.dto.PlayerStateDto;
import com.bharatrunner.game.dto.WsMessage;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Handles all game WebSocket connections.
 *
 * Architecture:
 * - Each connected session = one player.
 * - Player state is stored in memory (Redis sync in Phase 2).
 * - Every 50ms the server broadcasts all player states to every client.
 *   This is the "tick" approach: avoids per-message fan-out storms.
 */
@Component
@Slf4j
public class GameWebSocketHandler extends TextWebSocketHandler {

    private final ObjectMapper mapper;
    // sessionId -> WebSocketSession
    private final Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    // sessionId -> last known PlayerState
    private final Map<String, PlayerStateDto>   states   = new ConcurrentHashMap<>();

    public GameWebSocketHandler(ObjectMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        sessions.put(session.getId(), session);;
        log.info("Player connected: {}", session.getId());
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        WsMessage msg = mapper.readValue(message.getPayload(), WsMessage.class);

        switch (msg.getType()) {
            case "PLAYER_STATE" -> {
                PlayerStateDto state = mapper.convertValue(msg.getPayload(), PlayerStateDto.class);
                state.setPlayerId(session.getId());
                states.put(session.getId(), state);
            }
            case "EMOJI" -> {
                // Broadcast emoji to all players
                broadcast(WsMessage.of("EMOJI", msg.getPayload()));
            }
            default -> log.warn("Unknown message type: {}", msg.getType());
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        sessions.remove(session.getId());
        states.remove(session.getId());
        // Notify others
        try {
            broadcast(WsMessage.of("PLAYER_LEFT", Map.of("playerId", session.getId())));
        } catch (Exception e) {
            log.error("Error broadcasting disconnect", e);
        }
        log.info("Player disconnected: {}", session.getId());
    }

    // Broadcast all player states to all clients at 20 Hz
    @Scheduled(fixedRate = 50)
    public void broadcastWorldState() {
        if (sessions.isEmpty()) return;
        try {
            List<PlayerStateDto> allStates = new ArrayList<>(states.values());
            String json = mapper.writeValueAsString(WsMessage.of("WORLD_STATE", allStates));
            TextMessage msg = new TextMessage(json);
            for (WebSocketSession ws : sessions.values()) {
                if (ws.isOpen()) {
                    ws.sendMessage(msg);
                }
            }
        } catch (Exception e) {
            log.error("Error broadcasting world state", e);
        }
    }

    private void broadcast(WsMessage msg) throws Exception {
        String json = mapper.writeValueAsString(msg);
        TextMessage tm = new TextMessage(json);
        for (WebSocketSession ws : sessions.values()) {
            if (ws.isOpen()) ws.sendMessage(tm);
        }
    }
}
