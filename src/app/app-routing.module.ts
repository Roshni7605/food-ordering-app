import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'search/:searchFood', component: HomeComponent},
  {path:'tag/:tag', component: HomeComponent},
  {path: 'food/:id', component: FoodpageComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
