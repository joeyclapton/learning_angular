import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [AppComponent, TodosComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, TodosModule],
})
export class AppModule {}
