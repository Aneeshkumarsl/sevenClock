import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.scss']
})
export class NewBillComponent implements OnInit {
  addItemsForm: FormGroup;
  submitted = false;
  spinner = false;
  totalAmount = 0;
  constructor(private formBuilder: FormBuilder,private _router:Router) { }

  public showHidePopup:boolean = false

  ngOnInit(): void {
    this.createForm();
    
  }
  public createForm(itemsValue = {}){

    this.addItemsForm = this.formBuilder.group({
        'item': [itemsValue['item'] || "", Validators.compose([Validators.required, Validators.minLength(1)])],
        'quantity': [itemsValue['quantity'] || "", Validators.compose([Validators.required, Validators.minLength(1)])],
        'rate': [itemsValue['rate'] || "", Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  public onaddItems(data:any){    
    if (this.addItemsForm.valid) {
      this.submitted = false;
      this.spinner = true;
      data['amount'] = data.rate * data.quantity;
      this.totalAmount += data.amount;
      console.log('aneesh');
      this.tableItems.push(data)
      setTimeout(() => {
        // this.router.navigate(['/login']);
      }, 300);
      this.addItemsForm.reset();        
  } else {
      this.submitted = true;
  }
  }
  editItems(value:any){    
    this.createForm(value);
    this.deleteItems(value)

  }

  deleteItems(value:any) {
    this.tableItems.splice(this.tableItems.indexOf(value), 1);
    this.totalAmount -= value.amount
  }

  tableItems =[]



  closePoup(data:boolean) {
    this.showHidePopup = data;
  }
  
  printSubmit(){
  
    this.showHidePopup = true;
  }

  goBack() {
    this._router.navigate(["home/billing"],{replaceUrl:false,skipLocationChange:true})
  }

}
