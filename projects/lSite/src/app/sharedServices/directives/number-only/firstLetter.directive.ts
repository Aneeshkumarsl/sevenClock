import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[titleCase]'
})
export class TitleCaseDirective {

  constructor(private el: ElementRef) {      
  }

  @HostListener('keyup') onInputChange() {      
    if (this.el.nativeElement.value) {
      const arr: string[] = this.el.nativeElement.value.split('');
      arr[0] = arr[0].toUpperCase();
      this.el.nativeElement.value = arr.join('');
   }
  }
}