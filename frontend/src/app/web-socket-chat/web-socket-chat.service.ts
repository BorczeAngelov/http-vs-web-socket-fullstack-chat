import { Injectable } from '@angular/core';
import { CompatClient, IMessage, Stomp } from '@stomp/stompjs';
import { BackendUrlService } from '../backend-url.service';
import { Message } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class WebSocketChatService {

  public stompClient?: CompatClient;
  public messageBoard?: Message[];

  constructor(private backendUrl: BackendUrlService) { }

  connect(): void {
    var socket = this.backendUrl.getWebSocket();
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => this.onConnected());
  }

  disconnect() {
    this.stompClient?.disconnect();
  }

  sendMessage(newMessage: Message) {
    this.stompClient?.send('/api/ws/postmessage', {}, JSON.stringify(newMessage));
  }

  private onConnected() {
    this.stompClient?.subscribe('/api/ws/postmessage-response', data => this.onMessageReceived(data));
  }

  private onMessageReceived(data: IMessage) {
    var newMessageBoard: Message[] = JSON.parse(data.body);
    this.messageBoard = newMessageBoard;
  }
}