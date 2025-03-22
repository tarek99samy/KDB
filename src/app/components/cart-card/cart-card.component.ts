import { Component, inject, input } from '@angular/core';
import { Product } from '../../types/product.type';
import { CartButtonComponent } from '../cart-button/cart-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-card',
  imports: [CartButtonComponent],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css',
})
export class CartCardComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}
