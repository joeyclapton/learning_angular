import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'data-bindings';
  value: number = 5;
  showLifeCycle: boolean = false;

  changeValue(): void {
    this.value = this.value * 5;
  }

  removeLifeCycle(): void {
    this.showLifeCycle = true;
  }
}
