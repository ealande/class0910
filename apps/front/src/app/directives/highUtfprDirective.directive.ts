import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighUtfprDirective]',
  standalone: true,
})
export class HighUtfprDirectiveDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
  console.log('Mouse ativo');
  this.transformText('uppercase');
}

@HostListener('mouseleave') onMouseLeave() {
  console.log('Mouse inativo');
  this.transformText('none');
}


private transformText(textTransform: string) {
  this.el.nativeElement.style.textTransform = textTransform;
}
}
