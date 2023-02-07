import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
})
export class CardsComponent implements OnInit {
  @Input() cards: Array<any>;

  constructor() {
    this.cards = [];
  }

  ngOnInit(): void {}
}
