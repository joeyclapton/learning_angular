import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { LogoComponent } from './components/logo/logo.component';
import { RandomColorComponent } from './components/random-color/random-color.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LogoComponent,
    RandomColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
