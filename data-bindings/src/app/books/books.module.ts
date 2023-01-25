import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookComponent } from '../book/book.component';

@NgModule({
  declarations: [BookComponent],
  exports: [BookComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
