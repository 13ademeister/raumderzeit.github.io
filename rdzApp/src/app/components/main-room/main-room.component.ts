import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from 'ng-helpers';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { GalleryImagesService } from 'src/app/services/gallery-images/gallery-images.service';
// import Swiper core and required components
import Swiper, {
  A11y,
  Autoplay,
  Controller,
  default as SwiperCore,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
// import Swiper and modules styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

type Image = { src: string; alt: string };

type ImagePaths = {
  fileName: string;
  filePath: string;
  description: string;
}[];

//  install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);
@Component({
  selector: 'app-main-room',
  templateUrl: './main-room.component.html',
  styleUrls: ['./main-room.component.scss'],
})
export class MainRoomComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  constructor(
    private router: Router,
    private galleryService: GalleryImagesService,
    private readonly mediaService: MediaService
  ) {
    Swiper.use([Navigation, Pagination]);
  }

  private itemInfosMailContent = `Hallo liebe Menschen vom Raum der Zeit,

ich habe einen tollen Gegenstand, den ich gerne in den Raum der Zeit einbringen möchte. Dazu beantworte ich euch gerne ein paar Fragen:

1. Welchen Namen möchtest du ihm geben?
-->Name für deinen Gegenstand

2. Ab wann könntest du ihn vorbeibringen?
-->jetzt / morgen / in drei Wochen

3. Möchtest du ihn am Ende zurück?
-->könnt ihr gerne behalten / möchte ich gerne zurück

4. Wie bist du auf die Idee gekommen?
-->das hat dem Raum auf jeden Fall gefehlt / finds einfach nur lustig

5. Kannst du uns etwas über dich oder den Gegenstand erzählen?
-->das hat mir meine Oma geschenkt / das war schon am anderen Ende der Welt / ...

6. Möchtest du damit auf weitere Informationen aufmerksam machen?
-->Link zu Webseite / Bilder / Videos / Musik

7. Welche Frage fehlt hier noch, was möchtest du noch dazu teilen?
-->Was ist der Sinn des Lebens? --> Die Antwort ist im Zweifel immer 42.

Außerdem schicke ich euch gerne noch ein oder zwei Bilder von meinem Gegenstand.

Ich freue mich über eure Rückmeldung!
Liebe Grüße,

-->dein Name

P.S.: Mir ist klar, dass der Gegenstand auch "benutzt" wird. Mir ist auch bewusst, dass meine Anworten über einen QR Code an dem Gegenstand abgerufen werden können.
`;

  private simpleMailContent = `Hallo liebe Menschen vom Raum der Zeit,

ich habe folgendes Anliegen an euch:

-->dein Anliegen

Ich freue mich über eure Rückmeldung!
Liebe Grüße,

-->dein Name
`;

  private eventInfosMailContent = `Hallo liebe Menschen vom Raum der Zeit,

ich möchte gerne etwas in eurem Raum organisieren und beantworte euch gerne ein paar Fragen dazu:

1. Wie soll es heißen?
--> Name: "Super-Mega-Event"

2. Wann soll das stattfinden?
--> morgen / nächste Woche / am 30.02. / an einem Sonntag
(Ich habe natürlich vorher mal hier nachgeschaut, ob der Slot noch frei ist: https://raum-der-zeit.de/events)

3. Ist das öffentlich oder privat?
--> nur meine Oma darf kommen / die Stadt ist eingeladen

4. Wer bezahlt denn Strom / Wasser und Miete? Könnt ihr dem Raum der Zeit ein bisschen was spenden?
--> klar, kein Ding nen Hunni ist da locker drin / der Eintritt ist für euch / ist nur ein Plenum, aber nen Zwanni für Miete und Nebenkosten geht immer

5. Welche Frage fehlt hier noch bzw. was möchtest du noch dazu mitteilen?
--> Was ist der Sinn des Lebens? --> Die Antwort ist im Zweifel immer 42.

Ich freue mich über eure Rückmeldung!

Liebe Grüße,

--> dein Name
`;

  public isPortrait = false;

  ngOnInit(): void {
    this.mediaService.setQuery('(orientation: portrait)');
    this.mediaService.match$
      .pipe(
        distinctUntilChanged(),
        map((isPortrait) => (this.isPortrait = isPortrait))
      )
      .subscribe();
  }

  homeClick() {
    this.router.navigateByUrl('/');
  }

  routeObject(): boolean {
    if (this.router.url.includes('/object')) return true;
    return false;
  }

  routeCup(): boolean {
    if (this.router.url.includes('/cup')) return true;
    return false;
  }

  public convertToURI(mail: string, str: string): string {
    const URI = mail + encodeURIComponent(str);
    if (URI.length <= 2000) {
      return URI;
    } else {
      console.error(
        'Mail content longer than 2000: ' +
          URI.length +
          ' Content will be truncated.'
      );
      return URI.substring(0, 1980) + '   [...]';
    }
  }

  itemInfosMail = this.convertToURI(
    'mailto:kontakt@raum-der-zeit.de?subject=Infos zu meinem Objekt&body=',
    this.itemInfosMailContent
  );

  simpleMail = this.convertToURI(
    'mailto:kontakt@raum-der-zeit.de?subject=Kontakt über die Webseite&body=',
    this.simpleMailContent
  );

  eventInfosMail = this.convertToURI(
    'mailto:kontakt@raum-der-zeit.de?subject=Veranstaltung organisieren&body=',
    this.eventInfosMailContent
  );

  dblClickHome() {
    const rainbowColors = [
      '#9400D3',
      '#4B0082',
      '#0000FF',
      '#00FF00',
      '#eaff00',
      '#FF7F00',
      '#FF0000',
      '#FF69B4',
    ];
    let randomColor =
      rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    document.documentElement.style.setProperty('--primary-color', randomColor);
  }
}
