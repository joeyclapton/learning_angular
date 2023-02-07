import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NewTodoComponent } from '../new-todo/new-todo.component';
import { TodoComponent } from '../todo/todo.component';

@NgModule({
  declarations: [NewTodoComponent, TodoComponent],
  exports: [NewTodoComponent, TodoComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
})
export class TodosModule {}
