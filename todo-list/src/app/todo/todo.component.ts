import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
})
export class TodoComponent {
  @Input() id: string;
  @Input() name: string;

  @Output() removeItem = new EventEmitter();

  isCheck: boolean;

  constructor() {
    this.id = '';
    this.name = '';
    this.isCheck = false;
  }

  onChangeChecked(): void {
    this.isCheck = !this.isCheck;
  }

  onRemoveItem(): void {
    this.removeItem.emit({
      id: this.id,
      name: this.name,
    });
  }
}
