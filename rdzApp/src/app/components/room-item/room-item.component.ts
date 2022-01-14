import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { tadaAnimation } from 'angular-animations';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss'],

  // in template
  // [@frontBack]="background ? 'background' : 'foreground'"

  animations: [
    tadaAnimation({ anchor: 'animate', duration: 5000, delay: 5000 }),
    trigger('frontBack', [
      // ...
      state(
        'front',
        style({
          // height: '0',
          opacity: 1,
        })
      ),
      state(
        'back',
        style({
          // height: '0px',
          opacity: 0.2,
        })
      ),
      transition('front => back', [animate('0.5s')]),
      transition('back => front', [animate('1s')]),
    ]),
  ],
})
export class RoomItemComponent implements OnInit {
  @Input() imagePath: string = '';
  @Input() background = false;
  @Input() title = '';

  animState = false;
  delay: number = 3000;
  duration: number = 3000;

  public randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor() {}

  ngOnInit(): void {
    this.delay = this.randomInteger(1000, 3000);
    this.duration = this.randomInteger(5000, 10000);
  }
}
