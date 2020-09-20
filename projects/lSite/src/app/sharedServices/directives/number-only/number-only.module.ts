import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { numberDirective } from './numberOnly.directive';
import { TitleCaseDirective } from './firstLetter.directive';
import { numberOnlyDirective } from './number0to9.directive'
@NgModule({
  declarations: [numberDirective,TitleCaseDirective,numberOnlyDirective],
  imports: [
    CommonModule
  ],
  exports:[numberDirective,TitleCaseDirective,numberOnlyDirective]
})
export class NumberOnlyModule { }
