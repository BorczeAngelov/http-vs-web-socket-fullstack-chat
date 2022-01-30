import { TestBed } from '@angular/core/testing';

import { WebSocketChatService } from './web-socket-chat.service';

describe('WebSocketChatService', () => {
  let service: WebSocketChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
