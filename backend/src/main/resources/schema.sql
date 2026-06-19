-- Bharat Runner PostgreSQL schema
-- JPA handles DDL (ddl-auto: update), but this is the reference schema.

CREATE TABLE IF NOT EXISTS players (
    id               VARCHAR(36)  PRIMARY KEY DEFAULT gen_random_uuid()::text,
    username         VARCHAR(30)  NOT NULL UNIQUE,
    coins            INT          NOT NULL DEFAULT 100,
    score            INT          NOT NULL DEFAULT 0,
    deliveries_done  INT          NOT NULL DEFAULT 0,
    current_vehicle  VARCHAR(20)  NOT NULL DEFAULT 'FOOT',
    pos_x            DOUBLE PRECISION DEFAULT 50.0,
    pos_y            DOUBLE PRECISION DEFAULT 0.0,
    pos_z            DOUBLE PRECISION DEFAULT 0.0,
    created_at       TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    last_seen        TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS deliveries (
    id             VARCHAR(36)  PRIMARY KEY DEFAULT gen_random_uuid()::text,
    player_id      VARCHAR(36)  NOT NULL REFERENCES players(id),
    delivery_type  VARCHAR(30)  NOT NULL,
    status         VARCHAR(15)  NOT NULL DEFAULT 'ACTIVE',
    from_zone      VARCHAR(50)  NOT NULL,
    to_zone        VARCHAR(50)  NOT NULL,
    reward         INT          NOT NULL,
    time_limit     INT          NOT NULL DEFAULT 120,
    created_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    completed_at   TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_deliveries_player_status
    ON deliveries(player_id, status);

CREATE INDEX IF NOT EXISTS idx_players_score
    ON players(score DESC);
