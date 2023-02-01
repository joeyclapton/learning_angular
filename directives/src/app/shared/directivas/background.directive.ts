import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef = elementRef;
    this.renderer = renderer;

    // Note usual(XSS attack can provide)
    // this.elementRef.nativeElement.style.backgroundColor = this.color;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'cyan'
    );
  }
}
