import {
    Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild
} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  value: number;

  @Input() valueProperty: number;
  @Output() changeValue = new EventEmitter();

  @ViewChild('inputValue') inputValue!: ElementRef;

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
    console.log(this.inputValue);
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
