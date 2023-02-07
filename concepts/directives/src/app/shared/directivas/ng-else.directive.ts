import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]',
})
export class NgElseDirective {
  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      this._viewRef.createEmbeddedView(this._tempRef);
    } else {
      this._viewRef.clear();
    }
  }

  constructor(
    private _tempRef: TemplateRef<any>,
    private _viewRef: ViewContainerRef
  ) {}
}
