import { Component } from '@angular/core';

@Component({
  selector: 'random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss'],
})
export class RandomNumberComponent {
  value: number;

  constructor() {
    this.value = 0;
  }

  setValue(newValue: number | string) {
    if (typeof newValue === 'string') {
      this.value = Number(newValue);
    } else {
      this.value = newValue;
    }
  }

  randomNumber() {
    this.value = Math.floor(Math.random() * 1000);
  }
}
