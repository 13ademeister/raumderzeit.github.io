import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss'],

  // in template
  // [@frontBack]="background ? 'background' : 'foreground'"

  animations: [
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

  constructor() {}

  ngOnInit(): void {}
}
