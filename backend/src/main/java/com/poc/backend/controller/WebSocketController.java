package com.poc.backend.controller;

import com.poc.backend.dataAccess.IDataAccess;
import com.poc.backend.dataAccess.InMemoryData;
import com.poc.backend.dto.Message;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    private IDataAccess dataAccess;

    public WebSocketController() {
        dataAccess = new InMemoryData();
    }

    @MessageMapping("/api/ws/postmessage")
    @SendTo("/api/ws/postmessage-response")
    public Message[] postMessage(Message newMessage) {
        dataAccess.AddMessage(newMessage);
        return dataAccess.GetMessages();
    }
}