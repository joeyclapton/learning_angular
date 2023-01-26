import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  value: number;

  @Input() valueProperty: number;

  @Output() changeValue = new EventEmitter();

  constructor() {
    this.value = 0;
    this.valueProperty = 0;
  }

  ngOnInit(): void {
    this.value = this.valueProperty;
  }

  decrease(): void {
    this.value--;
    this.changeValue.emit({
      currentValue: this.value,
      notification: {
        message: 'Valor alterado com sucesso!',
        status: 'SUCCESS',
      },
    });
  }

  increase(): void {
    this.value++;
    this.changeValue.emit({
      currentValue: this.value,
      notification: {
        message: 'Valor alterado com sucesso!',
        status: 'SUCCESS',
      },
    });
  }
}
