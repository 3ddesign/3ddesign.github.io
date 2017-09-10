import { AfterViewInit, Component } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../scss/app.scss'],
})

export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {

  }


  public constructor(router: Router) {
    router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        require('../../../node_modules/google-charts/loader.js');
        require('../../assets/js/common.js');
        console.dir('test');
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }


}
