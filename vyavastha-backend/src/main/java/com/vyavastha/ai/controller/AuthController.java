package com.vyavastha.ai.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vyavastha.ai.dto.auth.LoginRequest;
import com.vyavastha.ai.dto.auth.LoginResponse;
import com.vyavastha.ai.dto.auth.RegisterRequest;
import com.vyavastha.ai.dto.auth.RegisterResponse;
import com.vyavastha.ai.entity.User;
import com.vyavastha.ai.service.AuthService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(
            @RequestBody RegisterRequest request) {

        User user = authService.registerEventHost(request);

        RegisterResponse response = new RegisterResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getPhone(),
                user.getRole().getName()
        );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request,
            HttpSession session) {

        LoginResponse response = authService.login(request);


        session.setAttribute("USER_ID", response.getId());
        session.setAttribute("USER_EMAIL", response.getEmail());
        session.setAttribute("USER_NAME", response.getFullName());
        session.setAttribute("USER_ROLE", response.getRole());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/me")
    public ResponseEntity<LoginResponse> getCurrentUser(
            HttpSession session) {

        Long userId = (Long) session.getAttribute("USER_ID");

        if (userId == null) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .build();
        }


        String fullName =
                (String) session.getAttribute("USER_NAME");

        String email =
                (String) session.getAttribute("USER_EMAIL");

        String role =
                (String) session.getAttribute("USER_ROLE");

        LoginResponse response = new LoginResponse(
                userId,
                fullName,
                email,
                role
        );

        return ResponseEntity.ok(response);
    }

@PostMapping("/logout")
public ResponseEntity<Void> logout(HttpSession session) {

    session.invalidate();

    return ResponseEntity.noContent().build();
}

}