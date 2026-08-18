package com.vyavastha.ai.service;

import com.vyavastha.ai.dto.auth.LoginRequest;
import com.vyavastha.ai.dto.auth.LoginResponse;
import com.vyavastha.ai.dto.auth.RegisterRequest;
import com.vyavastha.ai.entity.Role;
import com.vyavastha.ai.entity.User;
import com.vyavastha.ai.exception.InvalidCredentialsException;
import com.vyavastha.ai.repository.RoleRepository;
import com.vyavastha.ai.repository.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(
            UserRepository userRepository,
            RoleRepository roleRepository,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerEventHost(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new InvalidCredentialsException(
                    "Invalid email or password"
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

        // Hash the password before storing it
        user.setPasswordHash(
                passwordEncoder.encode(request.getPassword())
        );

        user.setPhone(request.getPhone());
        user.setRole(eventHostRole);

        return userRepository.save(user);
    }

    public LoginResponse login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new InvalidCredentialsException(
                                "Invalid email or password"
                        )
                );

        // Verify raw password against BCrypt hash
        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPasswordHash()
        )) {
            throw new InvalidCredentialsException(
                    "Invalid email or password"
            );
        }

        return new LoginResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole().getName()
        );
    }
}