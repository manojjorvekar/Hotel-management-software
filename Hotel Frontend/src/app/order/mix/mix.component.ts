import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormControlName } from '@angular/forms';
import { MyServiceService } from '../../my-service.service';
// import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-mix',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.css'],
  
})


export class MixComponent implements OnInit {
product_id :number=0;


  constructor(private myServiceService:MyServiceService) {  }
  products:{img:string,name:string,id:string,price:string} []=[];

  signupForm= new FormGroup({
    username:new FormControl(null),
    email:new FormControl(null)
    
  });
  

  deleteMe()
  {
    console.log(this.signupForm);
  
      this.myServiceService.deleteUser(this.product_id).subscribe( data => {
        console.log(data);
      
      })
  }
  

  ngOnInit(): void {
    this.products=this.myServiceService.special;
  }

// deleteMe()
// {
//   console.log(this.signupForm);

//     this.myServiceService.deleteUser(this.product_id).subscribe( data => {
//       console.log(data);
    
//     })
// }



}
