import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
  faTrash = faTrash;

  constructor() {
    this.id = '';
    this.name = '';
    this.isCheck = false;
  }

  onChangeChecked(event: Event): void {
    const { checked } = event.target as HTMLInputElement;
    this.isCheck = checked;
  }

  onRemoveItem(): void {
    this.removeItem.emit({
      id: this.id,
      name: this.name,
    });
  }
}
