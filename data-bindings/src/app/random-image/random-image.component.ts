import { Component } from '@angular/core';

const BASE_URL = 'https://picsum.photos/200/300';

@Component({
  selector: 'random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['random-image.component.scss'],
})
export class RandomImage {
  urlImage: string;

  constructor() {
    this.urlImage = BASE_URL;
  }
}
