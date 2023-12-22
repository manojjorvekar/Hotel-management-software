import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
  providers: []
})
export class MenuCardComponent implements OnInit {

  constructor(private myServiceService:MyServiceService) { }


products =[
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws2zUT2_CJtW1UZZkIt8iu6yRgPmkW8pl_Q&usqp=CAU', name:'french Frys' , id:'pro01' , price:140},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDV3zLl8UC4H67IQiA4uFkyOsg9U_YqDPLcA&usqp=CAU', name:'Biscute' , id:'pro02' , price:80},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0bRRbgvbpeLmMyYncrKP6gG5pHFMmmN4eQ&usqp=CAU', name:'lonlings' , id:'pro03' , price:60},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSUyvrxgsTBtZIFXjaLhEEoEuVrV9R3vVLw&usqp=CAU', name:'chau_min' , id:'pro04' , price:120}
]

variable:boolean=true;
placeNewOrder()
{
  // this.myServiceService.ActivatedEmitter.next(this.variable);
  this.myServiceService.ActivatedEmitter.emit(true);
}

callWaiter()
{
  
}


  ngOnInit(): void {



  }

}
