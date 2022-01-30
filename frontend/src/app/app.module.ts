import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpChatComponent } from './http-chat/http-chat.component';
import { WebSocketChatComponent } from './web-socket-chat/web-socket-chat.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ScrollingModule,
  ],
  declarations: [
    AppComponent,
    HttpChatComponent,
    WebSocketChatComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
