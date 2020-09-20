import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  public showHidePopup:boolean = false
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  newBillClick(){
    this._router.navigate(["home/newBill"],{replaceUrl:false,skipLocationChange:true})
  }

  closePoup(data:boolean) {
    this.showHidePopup = data;
  }
  
  printSubmit(){
  
    this.showHidePopup = true;
  }

}
