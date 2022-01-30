import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpChatComponent } from './http-chat.component';

describe('HttpChatComponent', () => {
  let component: HttpChatComponent;
  let fixture: ComponentFixture<HttpChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
