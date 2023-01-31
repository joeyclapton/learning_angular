import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() numberOfCards: number = 0;
  @Input() showInfos: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
