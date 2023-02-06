import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    this._renderer.setStyle(
      this._ref.nativeElement,
      'background-color',
      'orange'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.setStyle(
      this._ref.nativeElement,
      'background-color',
      'white'
    );
  }

  constructor(private _ref: ElementRef, private _renderer: Renderer2) {}
}
