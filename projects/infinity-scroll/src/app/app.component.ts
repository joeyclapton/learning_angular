import { Component } from '@angular/core';

import { data } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'infinity-scroll';

  cards: Array<any>;

  constructor() {
    this.cards = data;
  }
}
