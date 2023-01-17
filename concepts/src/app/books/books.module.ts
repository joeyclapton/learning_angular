import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BooksComponent } from './components/books/books.template';
import { BooksService } from './services/books.service';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule],
  exports: [BooksComponent],
  providers: [BooksService],
})
export class BooksModule {}
