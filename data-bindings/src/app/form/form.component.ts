import { Component } from '@angular/core';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  firstname: string;
  lastname: string;
  age!: number;

  constructor() {
    this.firstname = '';
    this.lastname = '';
  }
}
