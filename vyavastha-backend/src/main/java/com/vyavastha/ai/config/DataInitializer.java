package com.vyavastha.ai.config;

import com.vyavastha.ai.entity.Role;
import com.vyavastha.ai.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initializeRoles(RoleRepository roleRepository) {

        return args -> {

            createRole(
                    roleRepository,
                    "EVENT_HOST",
                    "Citizen who creates an event and applies for permissions"
            );

            createRole(
                    roleRepository,
                    "AUTHORITY",
                    "Government authority who reviews and approves permissions"
            );

            createRole(
                    roleRepository,
                    "ADMIN",
                    "System administrator who supervises the platform"
            );
        };
    }

    private void createRole(
            RoleRepository roleRepository,
            String name,
            String description) {

        if (!roleRepository.existsByName(name)) {

            Role role = new Role(name, description);

            roleRepository.save(role);
        }
    }
}
