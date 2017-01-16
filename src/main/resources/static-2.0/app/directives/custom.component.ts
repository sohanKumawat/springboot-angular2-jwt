import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}

@Directive({ selector: '[highlight1]' })
export class HighlightDirective1 {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}