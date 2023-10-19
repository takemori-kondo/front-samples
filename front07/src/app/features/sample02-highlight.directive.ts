/*
下記ページをベースにしています
https://angular.jp/guide/attribute-directives
*/

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample02Highlight]'
})
export class Sample02HighlightDirective {

  @Input()
  appSample02Highlight = '';

  @Input()
  defaultColor = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.appSample02Highlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  constructor(private el: ElementRef) {
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
