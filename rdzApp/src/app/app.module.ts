import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaModule } from 'ng-helpers';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemContentComponent } from './components/item-content/item-content.component';
import { MainRoomComponent } from './components/main-room/main-room.component';
import { RoomItemComponent } from './components/room-item/room-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainRoomComponent,
    RoomItemComponent,
    ItemContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    SwiperModule,
    HttpClientModule,
    MediaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
