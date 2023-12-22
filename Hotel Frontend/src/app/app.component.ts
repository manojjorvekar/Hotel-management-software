import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyServiceService]
  
})
export class AppComponent {
  title = 'hotel';
  constructor(public myService:MyServiceService,private router:Router){}

  logout()
  {
    this.myService.sLogin=false;
    this.router.navigate(['Auth']);
  }

  //name:string="manoj";
}
