import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private registerService: RegisterService) { }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    number: new FormControl('')
  })

  signUp() {
    this.registerService.registerService(this.registerForm.value).subscribe(data => console.log('Response: ', data));
    this.router.navigateByUrl('login');
  }

  signin() {
    this.router.navigateByUrl('login');
  }

}
