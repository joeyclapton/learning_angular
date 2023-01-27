import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.sass'],
})
export class NewTodoComponent implements OnInit {
  name: string;

  @Output() nameChanged = new EventEmitter();

  constructor() {
    this.name = '';
  }

  ngOnInit(): void {}

  addTodo(): void {
    if (this.name) {
      this.nameChanged.emit({
        name: this.name,
      });

      this.name = '';
    }
  }
}
