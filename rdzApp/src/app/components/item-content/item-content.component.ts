import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss'],

  // for tooltip?
  encapsulation: ViewEncapsulation.None,

  // in template
  // [@enterLeave]="routeSelected() ? 'selected' : 'home'"

  animations: [
    trigger('enterLeave', [
      // ...
      state(
        'selected',
        style({
          opacity: 1,
        })
      ),
      state(
        'home',
        style({
          opacity: 0,
        })
      ),
      transition('home => selected', [animate('1s')]),
      transition('selected => home', [animate('0.5s')]),
    ]),
  ],
})
export class ItemContentComponent {
  @Input() title = 'Title';
  @Input() imageSrc = '';
  @Input() imageStyle = 'top: 38%; left: 5%; max-height: 50%; max-width: 20%;';
  @Input() route = '';
  @Input() isPortrait = false;
  @Input() hasTextContent = true;
  @Input() isQrObject = false;

  constructor(private router: Router) {}

  getItemImageStyle(): string {
    return this.imageStyle;
  }

  itemClick() {
    if (this.router.url === '/') {
      this.router.navigateByUrl('/' + this.route);
    } else {
      this.router.navigateByUrl('/');
    }
  }

  routeSelected(): boolean {
    if (this.router.url === '/' + this.route) return true;
    if (this.isQrObject) return true;
    return false;
  }

  routeHome(): boolean {
    if (this.router.url === '/') return true;
    return false;
  }
}
