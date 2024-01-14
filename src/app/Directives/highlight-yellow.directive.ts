import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightYellow]'
})
export class HighlightYellowDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    this.renderer.setStyle(this.el.nativeElement,"background-color","yellow")
    this.renderer.setStyle(this.el.nativeElement,"margin-top","20px")
    this.renderer.setStyle(this.el.nativeElement,"padding","10px")
   }


}
