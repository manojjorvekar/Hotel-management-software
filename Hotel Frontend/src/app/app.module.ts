import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { VegFoodComponent } from './order/veg-food/veg-food.component';
import { NonVegFoodComponent } from './order/non-veg-food/non-veg-food.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyServiceService } from './my-service.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { MixComponent } from './order/mix/mix.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
const appRoutes: Routes=[
  {path:'g_order',component:OrderComponent},      // can access by typing url in searchBar
  {path:'snacks',component:MenuCardComponent},
  {path:'Menu',component:FeedbackComponent}, // can not access by typing url in searchBar
  {path:'M_order',component:VegFoodComponent},
  {path:'',component:AuthComponent},
  {path:'for_kids',component:NonVegFoodComponent},
  {path:'special',component:MixComponent},
  {path:'Auth',component:AuthComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    VegFoodComponent,
    NonVegFoodComponent,
    MenuCardComponent,
    FeedbackComponent,
    MixComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
