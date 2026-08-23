package com.vyavastha.ai.config;

import com.vyavastha.ai.entity.Role;
import com.vyavastha.ai.entity.User;
import com.vyavastha.ai.repository.RoleRepository;
import com.vyavastha.ai.repository.UserRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminDataInitializer {

    @Value("${app.admin.email}")
    private String adminEmail;

    @Value("${app.admin.password}")
    private String adminPassword;

    @Bean
    CommandLineRunner initializeAdmin(
            RoleRepository roleRepository,
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        return args -> {

            // 1. Create ADMIN role if it does not exist
            Role adminRole = roleRepository
                    .findByName("ADMIN")
                    .orElseGet(() -> {

                        Role role = new Role(
                                "ADMIN",
                                "System Administrator"
                        );

                        return roleRepository.save(role);
                    });

            // 2. Create Admin user if it does not exist
            if (!userRepository.existsByEmail(adminEmail)) {

                User admin = new User();

                admin.setFullName("System Administrator");
                admin.setEmail(adminEmail);

                // Never store the plain password
                admin.setPasswordHash(
                        passwordEncoder.encode(adminPassword)
                );

                admin.setActive(true);
                admin.setRole(adminRole);

                userRepository.save(admin);

                System.out.println(
                        "======================================"
                );
                System.out.println(
                        "ADMIN ACCOUNT CREATED"
                );
                System.out.println(
                        "Email: " + adminEmail
                );
                System.out.println(
                        "======================================"
                );

            } else {

                System.out.println(
                        "ADMIN ACCOUNT ALREADY EXISTS"
                );
            }
        };
    }
}