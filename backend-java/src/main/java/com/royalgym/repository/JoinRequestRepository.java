package com.royalgym.repository;

import com.royalgym.model.JoinRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JoinRequestRepository extends MongoRepository<JoinRequest, String> {
}