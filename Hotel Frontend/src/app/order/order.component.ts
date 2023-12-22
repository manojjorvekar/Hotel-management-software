import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyServiceService } from '../my-service.service';
import { myProduct } from '../product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: []
})
export class OrderComponent implements OnInit {
islogin:boolean=true;
// private activatedSub:Subscription;

  constructor(private myServiceService:MyServiceService) {  }
  //private activatedSub:Subscription;
name:string="manoj";

dinamic:string="";

isAdmin:boolean=true;


path:string="https://images.news18.com/ibnlive/uploads/2022/05/lord-buddha-16524345924x3.jpg";

// didActivate:boolean=false;
orderB=false;
//products:{img:string,name:string,id:string,price:string} []=[];

public poductA:{  id:number,name:string,price:number,quantity:number} []= [];
  ngOnInit(){
    this.myServiceService.ActivatedEmitter.subscribe( (param: boolean) =>{
        this.orderB=param;
      });

this.myServiceService.getProduct()
.subscribe(data => this.poductA= data);

  }


  deleteProduct(id: number){
    this.myServiceService.deleteUser(id).subscribe( data => {
      console.log(data);
       this.getMeproduct();

    })
  }



 clickme()
{
  if(this.name=="manoj")
  {
  this.name="poonam";
  }
  else{
    this.name="manoj";
  }
}

  

getMeproduct(){
  this.myServiceService.getProduct()
  .subscribe(data => this.poductA= data);
}


  
}
