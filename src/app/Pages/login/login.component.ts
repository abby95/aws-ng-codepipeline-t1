import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,private service:HttpService,private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  login(){
    console.log(this.loginForm.value)
    this.service.login(this.loginForm.value).subscribe(res=>{
      alert("Successfully Logged IN")
      this.router.navigate(["home"])
    },err=>{
      alert("Error: "+ err)
    })
  }
}
