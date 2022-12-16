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
import { BadezimmerFicusComponent } from './components/qr-item/objects/badezimmer-ficus/badezimmer-ficus.component';
import { DagmarComponent } from './components/qr-item/objects/dagmar/dagmar.component';
import { IdeenleuchteComponent } from './components/qr-item/objects/ideenleuchte/ideenleuchte.component';
import { KniffelComponent } from './components/qr-item/objects/kniffel/kniffel.component';
import { RaumDerZeitComponent } from './components/qr-item/objects/raum-der-zeit/raum-der-zeit.component';
import { TanteHertaComponent } from './components/qr-item/objects/tante-herta/tante-herta.component';
import { VimeModule } from '@vime/angular';
import { LaValseMusetteComponent } from './components/qr-item/objects/la-valse-musette/la-valse-musette.component';
import { VonMamaComponent } from './components/qr-item/objects/von-mama/von-mama.component';
import { TilloPillowComponent } from './components/qr-item/objects/tillo-pillow/tillo-pillow.component';
import { FlyingYoghurtComponent } from './components/qr-item/objects/flying-yoghurt/flying-yoghurt.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YtPlayerComponent } from './components/yt-player/yt-player.component';
import { WiederFernsehnComponent } from './components/qr-item/objects/wieder-fernsehn/wieder-fernsehn.component';
import { StuhlComponent } from './components/qr-item/objects/stuhl/stuhl.component';
import { RosenkorbComponent } from './components/qr-item/objects/rosenkorb/rosenkorb.component';
import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';
import { DxButtonModule } from 'devextreme-angular';
import { DxCalendarComponent } from './components/dx-calendar/dx-calendar.component';
import { KameraComponent } from './components/qr-item/objects/kamera/kamera.component';
import { PianoComponent } from './components/qr-item/objects/piano/piano.component';
import { TuttiPaunsdorfComponent } from './components/qr-item/objects/tutti-paunsdorf/tutti-paunsdorf.component';
import { WandteppichComponent } from './components/qr-item/objects/wandteppich/wandteppich.component';
import { AllCupsComponent } from './components/all-cups/all-cups.component';
import { DefaultLinkComponent } from './components/qr-item/objects/default-link/default-link.component';

@NgModule({
  declarations: [
    AppComponent,
    MainRoomComponent,
    RoomItemComponent,
    ItemContentComponent,
    QrItemComponent,
    BuegelnBrettComponent,
    AllQrItemsComponent,
    AllCupsComponent,
    WrongLinkComponent,
    DefaultLinkComponent,
    BadezimmerFicusComponent,
    DagmarComponent,
    IdeenleuchteComponent,
    KniffelComponent,
    RaumDerZeitComponent,
    TanteHertaComponent,
    LaValseMusetteComponent,
    VonMamaComponent,
    TilloPillowComponent,
    FlyingYoghurtComponent,
    YtPlayerComponent,
    WiederFernsehnComponent,
    StuhlComponent,
    RosenkorbComponent,
    DxCalendarComponent,
    KameraComponent,
    PianoComponent,
    TuttiPaunsdorfComponent,
    WandteppichComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    SwiperModule,
    HttpClientModule,
    MediaModule,
    VimeModule,
    YouTubePlayerModule,
    DxSchedulerModule,
    DxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
