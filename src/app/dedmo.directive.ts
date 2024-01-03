import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDedmo]',
  standalone: true
})
export class DedmoDirective 
{

  constructor(private obj : ElementRef) 
  {
    this.obj.nativeElement.style.background = 'yellow'

    this.obj.nativeElement.style.fontWeight = 'bold';

  }


}
