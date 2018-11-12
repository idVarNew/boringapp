import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAccordion]'
})
export class AccordionDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  
  }
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'border-left', '2px dashed #000');
  }
}
