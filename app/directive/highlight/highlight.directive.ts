import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#f4f4f4');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#000000');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.fill = color;
  }
}
