package com.poc.backend.dataAccess;

import java.time.LocalTime;
import java.util.Arrays;

import com.poc.backend.dto.Message;

public class InMemoryData implements IDataAccess {

    private static Message[] messages = InitializeMessages();

    public Message[] GetMessages() {
        return messages;
    }

    public void AddMessage(Message input) {
        input.setId(messages.length);
        input.setTimeStamp(LocalTime.now());

        var newMessages = Arrays.copyOf(messages, messages.length + 1);
        newMessages[messages.length] = input;

        messages = newMessages;
    }

    public void ClearMessages() {
        messages = new Message[0];
    }

    private static Message[] InitializeMessages() {
        return new Message[] {
                new Message(0, "Backend Server", "Hello from backend", LocalTime.now())
        };
    }
}
