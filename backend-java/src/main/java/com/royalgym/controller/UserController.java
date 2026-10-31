package com.royalgym.controller;

import com.royalgym.dto.LoginRequest;
import com.royalgym.dto.RegisterRequest;
import com.royalgym.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request) {

        try {
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(userService.register(request));

        } catch (RuntimeException e) {

            if ("User already exists".equals(e.getMessage())) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", e.getMessage()));
            }

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Server error during registration"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request) {

        try {
            return ResponseEntity.ok(userService.login(request));

        } catch (RuntimeException e) {

            if ("User not found".equals(e.getMessage())) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", e.getMessage()));
            }

            if ("Invalid credentials".equals(e.getMessage())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(Map.of("message", e.getMessage()));
            }

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Server error during login"));
        }
    }
}