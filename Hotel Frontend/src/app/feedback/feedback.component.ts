import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  products:{img:string,name:string,id:string,price:string} []=[];
  constructor(private myServiceService:MyServiceService) { }

  ngOnInit(): void {
    this.products=this.myServiceService.products;
  }

}
