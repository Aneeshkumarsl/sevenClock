import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-inventory-popup',
  templateUrl: './inventory-popup.component.html',
  styleUrls: ['./inventory-popup.component.scss']
})
export class InventoryPopupComponent implements OnInit {
  InventoryForm:FormGroup;
  @Output() closePoup = new EventEmitter<boolean>();
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    
  }
  public createForm(){

    this.InventoryForm = this.formBuilder.group({
        'id': ["", Validators.compose([Validators.required, Validators.minLength(1)])],
        'name': ["", Validators.compose([Validators.required, Validators.minLength(1)])],
        'rate': ["", Validators.compose([Validators.required, Validators.minLength(1)])],
        'color': ["", Validators.compose([Validators.required, Validators.minLength(1)])],
        'brand': ["", Validators.compose([Validators.required, Validators.minLength(1)])],
        'total': ["", Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  cancelBtnClick(){
    this.closePoup.emit(false)
  }

}


