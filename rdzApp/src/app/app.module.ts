import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainRoomComponent } from './components/main-room/main-room.component';
import { RoomItemComponent } from './components/room-item/room-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainRoomComponent,
    RoomItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
