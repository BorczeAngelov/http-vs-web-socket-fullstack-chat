import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendUrlService {

  private webSocketUrl;
  public isProduction: boolean;
  public serverUrl;

  private readonly socketRegistryEndpoint = '/socket-registry';

  constructor() {
    this.isProduction = environment.production;

    if (this.isProduction) {
      this.serverUrl = "//" + window.location.hostname;
      this.webSocketUrl = 'ws://' + window.location.hostname + this.socketRegistryEndpoint;
    }
    else {
      this.serverUrl = "http://localhost:8080";
      this.webSocketUrl = 'ws://localhost:8080' + this.socketRegistryEndpoint;
    }
  }


  public getWebSocket(): WebSocket {
    return new WebSocket(this.webSocketUrl);
  }
}
