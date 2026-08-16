package com.vyavastha.ai;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;
import java.sql.Connection;

@SpringBootApplication
public class VyavasthaApplication {

    public static void main(String[] args) {
        SpringApplication.run(VyavasthaApplication.class, args);
    }

    @Bean
    public CommandLineRunner testConnection(DataSource dataSource) {
        return args -> {
            try (Connection conn = dataSource.getConnection()) {
                System.out.println("==========================================");
                System.out.println("SUCCESS: Connected to Neon PostgreSQL!");
                System.out.println("Database Name: " + conn.getCatalog());
                System.out.println("==========================================");
            } catch (Exception e) {
                System.err.println("==========================================");
                System.err.println("CONNECTION FAILED: " + e.getMessage());
                System.err.println("==========================================");
            }
        };
    }
}