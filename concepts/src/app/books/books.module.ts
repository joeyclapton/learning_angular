import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BooksComponent } from './components/books/books.template';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule],
  exports: [BooksComponent],
})
export class BooksModule {}
