import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() currentStatus: string;
  @Input() nextStatus: string;

  constructor() {
    this.currentStatus = '';
    this.nextStatus = '';
  }

  ngOnInit(): void {}
}
