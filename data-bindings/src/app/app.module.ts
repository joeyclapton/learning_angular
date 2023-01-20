import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RandomImage } from './random-image/random-image.component';
import { RandomNumberComponent } from './random-number/random-number.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomImage,
    AlertComponent,
    RandomNumberComponent,
    FormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
