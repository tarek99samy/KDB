import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartCardComponent } from '../../components/cart-card/cart-card.component';
import { CartSummaryComponent } from "../../components/cart-summary/cart-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartCardComponent, CartSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartService = inject(CartService);
}
