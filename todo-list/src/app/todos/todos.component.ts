import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
})
export class TodosComponent {
  todos: Array<string>;

  constructor() {
    this.todos = ['Pão de queijo', 'Leite', 'Sabonete'];
  }

  onAddTodo(event: any): any {
    this.todos = [...this.todos, event.name];
    console.log(this.todos);
  }

  onRemoveTodo(event: any): any {
    this.todos = this.todos.filter((_, index) => {
      return index !== Number(event.id);
    });
  }
}
