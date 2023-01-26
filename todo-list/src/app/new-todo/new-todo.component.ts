import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.sass'],
})
export class NewTodoComponent implements OnInit {
  itemName: string;

  constructor() {
    this.itemName = '';
  }

  ngOnInit(): void {}
}
