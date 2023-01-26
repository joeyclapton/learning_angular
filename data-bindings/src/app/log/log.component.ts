import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges,
    OnDestroy, OnInit
} from '@angular/core';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy,
    OnChanges
{
  @Input() value: number = 10;
  constructor() {
    this.log('Constructor');
  }

  ngOnInit(): void {
    this.log('On init');
  }

  ngOnChanges() {
    this.log('On Changes');
  }

  ngDoCheck() {
    this.log('Do Check');
  }

  ngAfterContentInit() {
    this.log('After content init');
  }

  ngAfterContentChecked() {
    this.log('After content checked');
  }

  ngAfterViewChecked() {
    this.log('After view checked');
  }

  ngOnDestroy() {
    this.log('On destroy');
  }

  private log(message: string): void {
    console.log(message);
  }
}
