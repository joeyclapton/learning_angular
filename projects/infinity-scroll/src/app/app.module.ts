import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { InfinityScrollDirective } from './shared/directives/infinity-scroll/infinity-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    InfinityScrollDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
