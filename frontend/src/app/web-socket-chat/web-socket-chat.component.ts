import { Component, OnInit } from '@angular/core';
import { Message } from '../model/Message';
import { WebSocketChatService } from './web-socket-chat.service';

@Component({
  selector: 'app-web-socket-chat',
  templateUrl: './web-socket-chat.component.html',
  styleUrls: ['./web-socket-chat.component.css']
})
export class WebSocketChatComponent implements OnInit {
  userName: String = 'WebSocket user';
  message: String | null = null;

  constructor(public wsChatService: WebSocketChatService) { }

  ngOnInit(): void {
    this.connect();
  }

  connect() {
    this.wsChatService.connect();
  }

  disconnect() {
    this.wsChatService.disconnect();
  }

  sendMessage() {
    if (this.message) {
      var newMessage: Message = {
        id: 0,
        user: this.userName,
        content: this.message,
        timeStamp: null,
      }

      this.wsChatService.sendMessage(newMessage);
      this.message = null;
    }
  }
}