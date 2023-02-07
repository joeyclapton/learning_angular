import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksModule } from './books/books.module';
import { FormComponent } from './form/form.component';
import { LogComponent } from './log/log.component';
import { RandomImage } from './random-image/random-image.component';
import { RandomNumberComponent } from './random-number/random-number.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomImage,
    AlertComponent,
    RandomNumberComponent,
    FormComponent,
    BooksComponent,
    LogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, BooksModule],
})
export class AppModule {}
