import { Component } from '@angular/core';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'books',
  templateUrl: './books.template.html',
  styleUrls: ['./books.template.scss'],
})
export class BooksComponent {
  books: Array<string>;

  constructor(private bookService: BooksService) {
    console.log(bookService.getBooks());
    this.books = bookService.getBooks();
  }
}
