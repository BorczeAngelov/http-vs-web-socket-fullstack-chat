import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketChatComponent } from './web-socket-chat.component';

describe('WebSocketChatComponent', () => {
  let component: WebSocketChatComponent;
  let fixture: ComponentFixture<WebSocketChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSocketChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
