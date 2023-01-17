import { Component } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.template.html',
  styleUrls: ['./books.template.scss'],
})
export class BooksComponent {
  books: Array<string>;

  constructor() {
    this.books = [
      'Torto Arado',
      'Estação Carandiru',
      'O sonho de um homem ridículo',
    ];
  }
}
