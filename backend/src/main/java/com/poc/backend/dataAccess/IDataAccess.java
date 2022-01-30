package com.poc.backend.dataAccess;

import com.poc.backend.dto.Message;

public interface IDataAccess {
    public Message[] GetMessages();

    public void AddMessage(Message message);

    public void ClearMessages();
}
