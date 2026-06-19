package com.bharatrunner.game.dto;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Data;

/**
 * Envelope for all WebSocket messages.
 * The "type" field discriminates the payload.
 */
@Data
public class WsMessage {
    private String type;   // e.g. "PLAYER_STATE", "DELIVERY_UPDATE", "EMOJI"
    private Object payload;

    public static WsMessage of(String type, Object payload) {
        WsMessage m = new WsMessage();
        m.type    = type;
        m.payload = payload;
        return m;
    }
}
