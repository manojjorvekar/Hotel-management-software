import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isMode=true;
// isLogin=false;


  constructor(private router:Router,private myService:MyServiceService) { }

  switchMode()
  {
    this.isMode=!this.isMode;

  }

// for login 

errorMsg:string="Autherize yourself";

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    

    if(this.isMode){
    this.myService.loginUser(form.value).subscribe((myResponce)=>{
      console.warn(myResponce);

      if(myResponce==3)
      {
        this.myService.sLogin=false;
        this.errorMsg='email does not exists';

      }

      if(myResponce==2)
      {
        this.myService.sLogin=false;
        this.errorMsg='password does not match....';
        
      }

      if(myResponce==1)
      {
        this.myService.sLogin=true;
        this.errorMsg='Welcome';
        this.router.navigate(['Menu']);
        
      }

      
    });
   


  } else{

    this.myService.signupUser(form.value).subscribe((myResponce)=>{

    })

    //this.router.navigate(['Menu']);

  }

  form.reset();

  }

  inMe()
  {
    this.myService.sLogin=true;
    this.router.navigate(['Menu']);

  }

  outMe()
  {
    this.myService.sLogin=false;
    this.router.navigate(['Auth']);

  }
  
  ngOnInit(): void {
  }

}
