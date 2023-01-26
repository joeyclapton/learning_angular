import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [AppComponent, NewTodoComponent, TodoComponent, TodosComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
