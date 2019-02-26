import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'MyAngularProj';
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }
}
