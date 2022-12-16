import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-default-link',
  templateUrl: './default-link.component.html',
})
export class DefaultLinkComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  cupId: string | null = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cupId = params.get('id');
    });
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

  private simpleMailContent = `Hallo liebe Menschen vom Raum der Zeit,

  ich möchte folgende Informationen für mein Cap mit der Id: -->deine Cup Id<-- hinterlegen:
  
  --> deine Informationen (Text / Bild als Datei / Web-Link / Youtube-Video-Link / Musik als Datei) <--
  
  Liebe Grüße,
  
  --> dein Name <--
  `;

  simpleMail = this.convertToURI(
    'mailto:kontakt@raum-der-zeit.de?subject=Cup Cap -->dein Cup Cap Link<--&body=',
    this.simpleMailContent
  );
}
