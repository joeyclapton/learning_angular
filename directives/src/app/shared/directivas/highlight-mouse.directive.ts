import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'orange';
    this.fontSize = '22px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
    this.fontSize = '16px';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  @HostBinding('style.fontSize') get setColor() {
    return this.fontSize;
  }

  private fontSize: string;

  constructor() {
    this.fontSize = '16px';
  }
}
