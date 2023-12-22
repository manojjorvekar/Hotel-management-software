import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../../my-service.service';

@Component({
  selector: 'app-non-veg-food',
  templateUrl: './non-veg-food.component.html',
  styleUrls: ['./non-veg-food.component.css']
})
export class NonVegFoodComponent implements OnInit {

  products:{img:string,name:string,id:string,price:string} []=[];
  constructor(private myServiceService:MyServiceService) { }
onSubmit(form:NgForm)
{
  console.log(form);
}
  ngOnInit(): void {

    this.products=this.myServiceService.for_kids;

  }

}
