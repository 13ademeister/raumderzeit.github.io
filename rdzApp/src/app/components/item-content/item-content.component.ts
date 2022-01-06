import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss'],
})
export class ItemContentComponent implements OnInit {
  @Input() title = 'Title';
  @Input() imageSrc = '';
  @Input() imageStyle = { top: 38, left: 5, height: 50, width: 20 };
  // 'top: 38%; left: 5%; max-height: 50%; max-width: 20%;';

  getItemImageStyle(): string {
    return `top: ${this.imageStyle.top}%; left: ${this.imageStyle.left}%; max-height: ${this.imageStyle.height}%; max-width: ${this.imageStyle.width}%;`;
  }

  constructor() {}

  ngOnInit(): void {}
}
