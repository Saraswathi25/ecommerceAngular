import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContainerComponent } from './components/container/container.component';



const routes: Routes = [
  {
    path: '',component: ContainerComponent
  },

  {
    path: 'cart',component: CartComponent
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
