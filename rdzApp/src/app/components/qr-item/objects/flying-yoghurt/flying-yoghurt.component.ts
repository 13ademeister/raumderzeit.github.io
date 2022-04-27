import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flying-yoghurt',
  templateUrl: './flying-yoghurt.component.html',
})
export class FlyingYoghurtComponent implements OnInit {
  private apiLoaded = false;

  constructor() {}

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
