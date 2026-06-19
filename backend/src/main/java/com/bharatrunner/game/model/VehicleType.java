package com.bharatrunner.game.model;

import lombok.Getter;

@Getter
public enum VehicleType {
    FOOT(0, "On Foot", 8.0),
    BICYCLE(500, "Bicycle", 12.0),
    SCOOTER(2000, "Scooter", 20.0),
    EV_BIKE(5000, "EV Bike", 25.0),
    AUTO_RICKSHAW(10000, "Auto Rickshaw", 18.0),
    MINI_TRUCK(25000, "Mini Truck", 15.0);

    private final int unlockCost;
    private final String displayName;
    private final double speedMultiplier;

    VehicleType(int unlockCost, String displayName, double speedMultiplier) {
        this.unlockCost = unlockCost;
        this.displayName = displayName;
        this.speedMultiplier = speedMultiplier;
    }
}
