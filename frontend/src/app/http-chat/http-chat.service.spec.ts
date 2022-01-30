import { TestBed } from '@angular/core/testing';

import { HttpChatService } from './http-chat.service';

describe('HttpChatService', () => {
  let service: HttpChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
