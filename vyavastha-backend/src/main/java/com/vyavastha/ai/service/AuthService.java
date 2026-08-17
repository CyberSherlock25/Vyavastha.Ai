package com.vyavastha.ai.service;

import com.vyavastha.ai.dto.auth.RegisterRequest;
import com.vyavastha.ai.entity.Role;
import com.vyavastha.ai.entity.User;
import com.vyavastha.ai.repository.RoleRepository;
import com.vyavastha.ai.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public AuthService(
            UserRepository userRepository,
            RoleRepository roleRepository) {

        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public User registerEventHost(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException(
                    "User with this email already exists"
            );
        }

        Role eventHostRole = roleRepository
                .findByName("EVENT_HOST")
                .orElseThrow(() ->
                        new IllegalStateException(
                                "EVENT_HOST role not found"
                        )
                );

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPasswordHash(request.getPassword());
        user.setPhone(request.getPhone());
        user.setRole(eventHostRole);

        return userRepository.save(user);
    }
}
