import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public submitted = false;
  loading = false;
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('',[ Validators.required]),
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required, 
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    )
   }

   

  ngOnInit(): void {
  }


  registerUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
  }

}
