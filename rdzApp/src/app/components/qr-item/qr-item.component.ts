import { Component, Input, OnInit } from '@angular/core';
import { MediaService } from 'ng-helpers';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-qr-item',
  templateUrl: './qr-item.component.html',
  styleUrls: ['./qr-item.component.scss'],
})
export class QrItemComponent implements OnInit {
  @Input() name = 'Name of Object';
  @Input() imageSrc = '';

  constructor(private readonly mediaService: MediaService) {}

  public isPortrait = false;

  ngOnInit(): void {
    this.mediaService.setQuery('(orientation: portrait)');
    this.mediaService.match$
      .pipe(
        distinctUntilChanged(),
        map((isPortrait: boolean) => (this.isPortrait = isPortrait))
      )
      .subscribe();
  }
}
