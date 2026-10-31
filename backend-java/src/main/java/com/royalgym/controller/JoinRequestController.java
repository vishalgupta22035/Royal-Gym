package com.royalgym.controller;

import com.royalgym.model.JoinRequest;
import com.royalgym.service.JoinRequestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/join")
@CrossOrigin(origins = "*")
public class JoinRequestController {

    private final JoinRequestService joinRequestService;

    public JoinRequestController(JoinRequestService joinRequestService) {
        this.joinRequestService = joinRequestService;
    }

    @PostMapping
    public ResponseEntity<?> submitRequest(@RequestBody JoinRequest request) {

        try {
            joinRequestService.submitRequest(request);

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(Map.of(
                            "message",
                            "Join request submitted successfully"
                    ));

        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "message",
                            "Failed to submit request"
                    ));
        }
    }
}