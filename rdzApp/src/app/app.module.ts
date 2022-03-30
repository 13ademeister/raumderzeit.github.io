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
import { QrItemComponent } from './components/qr-item/qr-item.component';
import { BuegelnBrettComponent } from './components/qr-item/objects/buegeln-brett/buegeln-brett.component';
import { AllQrItemsComponent } from './components/all-qr-items/all-qr-items.component';
import { WrongLinkComponent } from './components/qr-item/objects/wrong-link/wrong-link.component';

@NgModule({
  declarations: [
    AppComponent,
    MainRoomComponent,
    RoomItemComponent,
    ItemContentComponent,
    QrItemComponent,
    BuegelnBrettComponent,
    AllQrItemsComponent,
    WrongLinkComponent,
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
