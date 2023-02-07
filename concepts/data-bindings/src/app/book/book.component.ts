import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() name: string = '';
  @Input() author: string = '';
  @Input() rating: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
