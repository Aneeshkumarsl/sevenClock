import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
    selector:'[numberOnly]'
})
export class numberOnlyDirective {
    constructor(public elmRef:ElementRef){        
    }

    @HostListener('input', ['$event'])  onInputChange(event) {        
        const initalValue = this.elmRef.nativeElement.value;
    
        this.elmRef.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if ( initalValue !== this.elmRef.nativeElement.value) {
          event.stopPropagation();
        }
      }
}