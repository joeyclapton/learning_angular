import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RandomImage } from './random-image/random-image.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomImage,
    AlertComponent,
    RandomNumberComponent,
    FormComponent,
    BooksComponent,
    BookComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
