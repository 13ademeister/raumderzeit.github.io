import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

if (environment.production) {
  // assuming you have env variable configured
  // check if window exists, if you render backend window will not be available
  if (window) {
    window.console.log = function () {};
  }
}
