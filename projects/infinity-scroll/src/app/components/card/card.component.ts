import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  constructor() {
    this.title = '';
    this.description = '';
  }

  ngOnInit(): void {}
}
