import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { OperationUnitsListPage } from '../pages/operation-units-list/operation-units-list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = OperationUnitsListPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
