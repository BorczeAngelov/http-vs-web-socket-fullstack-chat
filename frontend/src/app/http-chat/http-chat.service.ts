import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BackendUrlService } from '../backend-url.service';
import { Message } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class HttpChatService {

  messageBoard$?: Observable<Message[]>;

  constructor(private http: HttpClient, private backendUrl: BackendUrlService) { }

  loadMessages(): void {
    this.messageBoard$ = this.http.get<Message[]>(this.backendUrl.serverUrl + '/api/httpchat/getmessages');

    this.messageBoard$.pipe(
      tap(data => console.log("tap data = ", data))
    ).subscribe();
  }

  sendMessage(newMessage: Message) {
    this.http.post<Message[]>(this.backendUrl.serverUrl + '/api/httpchat/postmessage', newMessage).subscribe();
  }

  clearMessages() {
    this.http.get<Message[]>(this.backendUrl.serverUrl + '/api/httpchat/clearmessages')
      .pipe(
        tap(_ => this.loadMessages())
      ).subscribe();
  }
}
