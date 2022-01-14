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
export class ItemContentComponent implements OnInit {
  @Input() title = 'Title';
  @Input() imageSrc = '';
  @Input() imageStyle = 'top: 38%; left: 5%; max-height: 50%; max-width: 20%;';
  @Input() route = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getItemImageStyle(): string {
    // return `top: ${this.imageStyle.top}%; left: ${this.imageStyle.left}%; max-height: ${this.imageStyle.height}%; max-width: ${this.imageStyle.width}%;`;
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
    return false;
  }

  routeHome(): boolean {
    if (this.router.url === '/') return true;
    return false;
  }
}
