import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { tadaAnimation } from 'angular-animations';

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
    // pulseAnimation({ anchor: 'animate', duration: 5000, delay: 5000 }),
    tadaAnimation({ anchor: 'animate', duration: 5000, delay: 5000 }),
  ],
})
export class ItemContentComponent implements OnInit {
  @Input() title = 'Title';
  @Input() imageSrc = '';
  @Input() imageStyle = 'top: 38%; left: 5%; max-height: 50%; max-width: 20%;';
  @Input() route = '';

  animState = false;
  delay: number = 3000;
  duration: number = 3000;

  public randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor(private router: Router) {}

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

  ngOnInit(): void {
    this.delay = this.randomInteger(5000, 10000);
    this.duration = this.randomInteger(5000, 10000);
  }
}
