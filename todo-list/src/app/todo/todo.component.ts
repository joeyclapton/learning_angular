import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
})
export class TodoComponent {
  @Input() id: string;
  @Input() name: string;

  isCheck: boolean;

  constructor() {
    this.id = '';
    this.name = '';
    this.isCheck = false;
  }
}
