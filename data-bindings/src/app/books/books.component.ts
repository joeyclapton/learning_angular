import { Component, OnInit } from '@angular/core';

type STATUS = 'SUCCESS' | 'DANGER' | 'DEFAULT';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  notificationMessage: string;
  notificationStatus: STATUS;

  constructor() {
    this.notificationMessage = '';
    this.notificationStatus = 'DEFAULT';
  }

  ngOnInit(): void {}

  onChangeValue(event: any) {
    this.notificationMessage = `${event.notification.message} Novo valor: ${event.currentValue}`;
    this.notificationStatus = event.notification.status;
  }
}
