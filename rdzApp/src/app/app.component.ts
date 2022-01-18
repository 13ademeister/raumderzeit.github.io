import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // @HostListener('document:click', ['$event'])
  // documentClick(event: MouseEvent) {
  //   // your click logic
  //   this.goBackToHome();
  // }
  title = 'rdzApp';

  goBackToHome() {
    console.log('click');
  }
}
