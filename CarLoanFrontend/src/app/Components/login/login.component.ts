import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup
  constructor(private fb : FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username :[],
      password :[]
    })
  }

  onLogin(){
    if(this.loginForm.controls['username'].value=="re" && this.loginForm.controls['password'].value=="re@123"){
      console.log("re");
      sessionStorage.setItem("userType", "re")
      this.router.navigateByUrl("/dash/login/re")
      
    }
    // else if(this.loginForm.controls['username'].value=="oe" && this.loginForm.controls['password'].value=="oe@123")
    // {
    //   console.log("oe")
    //   sessionStorage.setItem('userType','oe')
    //   this.router.navigateByUrl("/dash/oe")
    // }
    else{
      alert("Invalid Credential.Enter Valid")
    }
  }

}
