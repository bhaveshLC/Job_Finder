import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  heartOutline,
  chatboxEllipsesOutline,
  personOutline,
  appsOutline,
  optionsOutline,
  bookmark,
  bookOutline,
  briefcaseOutline,
} from 'ionicons/icons';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.addAllIcons();
  }
  addAllIcons() {
    addIcons({
      homeOutline,
      heartOutline,
      chatboxEllipsesOutline,
      personOutline,
      appsOutline,
      optionsOutline,
      bookmark,
      bookOutline,
      briefcaseOutline,
    });
  }
}
