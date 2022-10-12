import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // default color "#eaff00";
  primaryColor: string = '#eaff00';

  // the secondary color is not yet used for all neccessary css attributes
  // do not change color (black) before fixing this
  secondaryColor: string = 'black';

  title = 'Raum der Zeit';

  constructor() {
    this.changeTheme(this.primaryColor, this.secondaryColor); // Set default theme
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }
}
