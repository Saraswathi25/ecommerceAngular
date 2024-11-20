import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContainerComponent } from './components/container/container.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';



const routes: Routes = [
  {
    path: '',component: ContainerComponent
  },

  {
    path: 'cart',component: CartComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  },
  {
    path:'thankyou',component:ThankyouComponent
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
