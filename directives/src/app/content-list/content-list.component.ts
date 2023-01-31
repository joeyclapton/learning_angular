import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  currentItem: string = '';
  @Input() list: Array<string> = [];

  constructor() {
    this.list = ['About me', 'Resume', 'Projects'];
    this.currentItem = this.list[0];
  }

  ngOnInit(): void {}

  changeItem(item: string): void {
    this.currentItem = item;
  }
}
