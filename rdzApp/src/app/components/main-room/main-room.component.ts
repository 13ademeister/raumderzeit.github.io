import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from 'ng-helpers';
import { distinctUntilChanged, map } from 'rxjs/operators';
import {
  GalleryImagesService,
  ImageFiles,
} from 'src/app/services/gallery-images/gallery-images.service';
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
import { SwiperOptions } from 'swiper/types/swiper-options';

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

5. Gibt es eine lustige / traurige / spannende Geschichte dazu?
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

ich möchte gerne eine Veranstaltung in eurem Raum organisieren und beantworte euch gerne ein paar Fragen dazu:

1. Wie soll die Veranstaltung heißen?
-->Name: "Super-Mega-Event"

2. Wann soll die Veranstaltung stattfinden?
-->morgen / nächste Woche / am 30.02. / an einem Sonntag

3. Ist das öffentlich oder privat?
-->nur meine Oma darf kommen / die Stadt ist eingeladen

4. Wer bezahlt denn Strom / Wasser und Miete? Könnt ihr dem Raum der Zeit ein bisschen was spenden?
-->klar, kein Ding nen Fuffy ist da locker drin / der Eintritt ist für euch / ist nur ein Plenum, aber nen 10er für Strom und Wasser passt

5. Welche Frage fehlt hier noch bzw. was möchtest du noch dazu mitteilen?
-->Was ist der Sinn des Lebens? --> Die Antwort ist im Zweifel immer 42.

Ich freue mich über eure Rückmeldung!

Liebe Grüße,

-->dein Name
`;

  config: SwiperOptions = {
    slidesPerView: 1,
    // slidesPerView: 'auto',
    pagination: { clickable: true },
    navigation: true,
    scrollbar: { draggable: false },
    autoHeight: true,
    // spaceBetween: 50,
    // centeredSlidesBounds: true,
    // centeredSlides: true,
  };

  galleryImages: ImageFiles | undefined;

  getImages() {
    this.galleryService.getImageFiles().subscribe((data: ImageFiles) => {
      this.galleryImages = data;
      this.convertImage(data);
      // console.log(this.galleryImages);
    });
  }

  public isPortrait = false;

  convertImage({ imageFiles }: ImageFiles) {
    // this.images = imageFiles.map((i) => {
    imageFiles.map((i: any) => {
      console.log(i);
      // todo convert array (i) to object (img)
      let img: Image = { src: '', alt: '' };
      return img;
    });
  }

  images: Array<Image> = [
    {
      src: './assets/gallery/1.jpg',
      alt: 'Image 1',
    },
    {
      src: './assets/gallery/2.jpg',
      alt: 'Image 2',
    },
    {
      src: './assets/gallery/3.jpg',
      alt: 'Image 3',
    },
  ];

  onSwiper(swiper: any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

  ngOnInit(): void {
    setTimeout(function () {
      const swiper = new Swiper('.swiper-wrapper');
    }, 500);

    this.getImages();
    // console.log(this.galleryImages);

    this.mediaService.setQuery('(orientation: portrait)');
    this.mediaService.match$
      .pipe(
        distinctUntilChanged(),
        map((isPortrait) => (this.isPortrait = isPortrait))
        // map((isPortrait) => (this.isPortrait = isPortrait))
      )
      .subscribe();
  }

  homeClick() {
    this.router.navigateByUrl('/');
  }

  testMailContetent = `mailto:yz@example.com?Subject=Hello&body=links:%0Dhttp://link1.com%0Dhttp://link1.com`;

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
}
