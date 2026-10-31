package com.royalgym.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "joinrequests")
public class JoinRequest {

    @Id
    private String id;

    private String name;
    private String email;
    private String goal;
    private String plan;
    private Instant date;

    public JoinRequest() {
    }

    public JoinRequest(String name, String email, String goal, String plan) {
        this.name = name;
        this.email = email;
        this.goal = goal;
        this.plan = plan;
        this.date = Instant.now();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public String getPlan() {
        return plan;
    }

    public void setPlan(String plan) {
        this.plan = plan;
    }

    public Instant getDate() {
        return date;
    }

    public void setDate(Instant date) {
        this.date = date;
    }
}