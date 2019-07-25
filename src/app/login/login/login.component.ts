import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public currentState: string = 'initial';
  
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  loginObj = new FormGroup({
    name: new FormControl(''),
    key: new FormControl('')
  })

  signin() {
    console.log(this.loginObj.value);
    this.loginService.loginService(this.loginObj.value).subscribe(data => console.log(data));
    this.router.navigateByUrl('travel-request');
  }
  signup() {
    this.router.navigateByUrl('register');
  }
}
