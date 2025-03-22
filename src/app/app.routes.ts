import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: 'products', pathMatch: 'full', component: ProductsComponent },
  { path: 'cart', pathMatch: 'full', component: CartComponent },
];
