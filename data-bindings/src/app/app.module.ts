import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { RandomImage } from './random-image/random-image.component';
import { RandomNumberComponent } from './random-number/random-number.component';

@NgModule({
  declarations: [AppComponent, RandomImage, AlertComponent, RandomNumberComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
