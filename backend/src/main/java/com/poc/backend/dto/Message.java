package com.poc.backend.dto;

import java.time.LocalTime;

public class Message {
    private int id;
    private String user;
    private String content;
    private LocalTime timeStamp;

    public Message(int id, String user, String content, LocalTime timeStamp) {
        this.id = id;
        this.user = user;
        this.content = content;
        this.timeStamp = timeStamp;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalTime timeStamp) {
        this.timeStamp = timeStamp;
    }
}