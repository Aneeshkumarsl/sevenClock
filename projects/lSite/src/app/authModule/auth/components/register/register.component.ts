import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator,matchingPasswords} from '../../../../sharedServices/validator/validator'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  spinner = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
   
  }
  public createForm(){

    const nameValidationPattern = '[a-zA-Z \'-,;.]*';
    this.registerForm = this.formBuilder.group({
        'name': ['', Validators.compose([Validators.required, Validators.pattern(nameValidationPattern), Validators.minLength(3)])],
        'email': ['', Validators.compose([Validators.required, emailValidator])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        'confirmPassword': ['', Validators.compose([Validators.required])],
        'phoneNumber': ['', Validators.compose([Validators.required, Validators.minLength(10)])]
    }, {validator: matchingPasswords('password', 'confirmPassword')});
  }

  public onRegisterFormSubmit(values: Object): void {
    if (this.registerForm.valid) {
        this.submitted = false;
        this.spinner = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 300);
        this.registerForm.reset();        
    } else {
        this.submitted = true;
    }
}

}
