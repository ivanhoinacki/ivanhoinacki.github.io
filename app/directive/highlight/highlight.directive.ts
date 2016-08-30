import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#fff');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#000000');
  }

  private highlight(color: string) {
    // this.renderer.setElementStyle(this.el.nativeElement, 'fill', color);
    // console.log(this.renderer);
    // this.renderer.setElementClass(this.renderer.se)
    this.el.nativeElement.setElementStyle('fill', color);
  }

}
