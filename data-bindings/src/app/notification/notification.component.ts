import { Component, Input, OnInit } from '@angular/core';

type STATUS = 'SUCCESS' | 'DANGER' | 'DEFAULT';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() statusSelected: STATUS;
  @Input() message: string;

  constructor() {
    this.statusSelected = 'DEFAULT';
    this.message = '';
  }

  ngOnInit(): void {}
}
