import { Component, OnInit } from '@angular/core';
import { Message } from '../model/Message';
import { HttpChatService } from './http-chat.service';

@Component({
  selector: 'app-http-chat',
  templateUrl: './http-chat.component.html',
  styleUrls: ['./http-chat.component.css']
})
export class HttpChatComponent implements OnInit {  
  userName: String = 'Http user';
  message: String | null = null;

  constructor(public httpChatService: HttpChatService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.httpChatService.loadMessages();
  }

  clearMessages(): void {
    this.httpChatService.clearMessages();
  }

  sendMessage(): void {
    if (this.message) {
      var newMessage: Message = {
        id: 0,
        user: this.userName,
        content: this.message,
        timeStamp: null,
      }

      this.httpChatService.sendMessage(newMessage);
      this.message = null;
    }
  }
}