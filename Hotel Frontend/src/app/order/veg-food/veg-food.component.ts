import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veg-food',
  templateUrl: './veg-food.component.html',
  styleUrls: ['./veg-food.component.css']
})
export class VegFoodComponent implements OnInit {
name:string="manojj";
price:Number=0;
quantity:Number=0;

//URL:string='https://www.shutterstock.com/image-photo/panoramic-holiday-landscape-luxurious-beach-260nw-1688819209.jpg';
  constructor(private http:HttpClient,private myService:MyServiceService,private router:Router) { }
  
  onSubmit(data:any)
  {
    console.warn(data);
    this.myService.saveUser(data).subscribe((result)=>{
      console.warn(result);
    });


    this.router.navigate(['g_order']);

    // this.http
    // .post(
    //   'http://localhost:8080/addproduct',data
    // ).subscribe(responseData =>{
    //   console.log("sucessful");
    // });
  }

 
  ngOnInit(): void {
    
  }

}
