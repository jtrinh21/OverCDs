import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { MyacountComponent } from './myacount/myacount.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ExchangeComponent } from './exchange/exchange.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductComponent, children: [
    {path: ':page', component: ProductListComponent},
    {path: ':page/:id/:name/:artist', component: ProductDetailComponent},
  ]},
  {path: 'exchange-service', component: ExchangeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'myaccount', component: MyacountComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
