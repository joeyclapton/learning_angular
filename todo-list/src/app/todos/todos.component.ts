import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
})
export class TodosComponent {
  todos: Array<string>;

  constructor() {
    this.todos = [];
  }

  onAddTodo(event: any): any {
    this.todos = [...this.todos, event.name];
    console.log(this.todos);
  }
}
