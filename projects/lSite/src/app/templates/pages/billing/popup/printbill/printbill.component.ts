import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-printbill',
  templateUrl: './printbill.component.html',
  styleUrls: ['./printbill.component.scss']
})
export class PrintbillComponent implements OnInit {

  @Output() closePoup = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  cancelBtnClick(){
    this.closePoup.emit(false)
  }
}
