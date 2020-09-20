import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  spinner = false;
  show:boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [ 'aneesh@gmail.com', [Validators.required, Validators.email]],
      password: [ '1234', Validators.required]
    });
  }

  login() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value.trim();
      const password = this.loginForm.get('password').value.trim();

      this.spinner = true;
      setTimeout(() => {
        localStorage.setItem('email', email);
        this.router.navigate(['/home/dashBoard']);
      }, 300);
    }

  }

}
