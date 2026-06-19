package com.bharatrunner.game.model;

import lombok.Getter;

@Getter
public enum DeliveryType {
    FOOD("Food Delivery", 50, 80),
    MEDICINE("Medicine", 80, 100),
    GROCERY("Grocery Order", 40, 70),
    BANK_DOCUMENTS("Bank Documents", 100, 120),
    AADHAAR_KYC("Aadhaar/KYC Packet", 90, 110),
    TEMPLE_OFFERING("Temple Offering", 60, 90),
    WEDDING_INVITATION("Wedding Invitation", 70, 95),
    COURIER("Courier Package", 55, 85),
    FLOWERS("Flower Bouquet", 45, 75),
    TIFFIN("Tiffin Box", 50, 80);

    private final String displayName;
    private final int minReward;
    private final int maxReward;

    DeliveryType(String displayName, int minReward, int maxReward) {
        this.displayName = displayName;
        this.minReward   = minReward;
        this.maxReward   = maxReward;
    }
}
