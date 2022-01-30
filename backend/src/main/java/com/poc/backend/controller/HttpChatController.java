package com.poc.backend.controller;

import com.poc.backend.dataAccess.IDataAccess;
import com.poc.backend.dataAccess.InMemoryData;
import com.poc.backend.dto.Message;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HttpChatController {

    private IDataAccess dataAccess;

    public HttpChatController() {
        dataAccess = new InMemoryData();
    }

    @RequestMapping(value = "/api/httpchat/getmessages")
    public Message[] getMessages() {
        return dataAccess.GetMessages();
    }

    @PostMapping(value = "/api/httpchat/postmessage")
    public Message[] postMessage(@RequestBody Message newMessage) {
        dataAccess.AddMessage(newMessage);
        return dataAccess.GetMessages();
    }

    @RequestMapping(value = "/api/httpchat/clearmessages")
    public Message[] clearMessages() {
        dataAccess.ClearMessages();
        return dataAccess.GetMessages();
    }
}