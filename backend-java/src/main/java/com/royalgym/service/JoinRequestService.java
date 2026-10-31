package com.royalgym.service;

import com.royalgym.model.JoinRequest;
import com.royalgym.repository.JoinRequestRepository;
import org.springframework.stereotype.Service;

@Service
public class JoinRequestService {

    private final JoinRequestRepository joinRequestRepository;

    public JoinRequestService(JoinRequestRepository joinRequestRepository) {
        this.joinRequestRepository = joinRequestRepository;
    }

    public void submitRequest(JoinRequest request) {

        request.setDate(java.time.Instant.now());

        joinRequestRepository.save(request);
    }
}