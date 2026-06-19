package com.bharatrunner.game;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BharatRunnerApplication {
    public static void main(String[] args) {
        SpringApplication.run(BharatRunnerApplication.class, args);
    }
}
