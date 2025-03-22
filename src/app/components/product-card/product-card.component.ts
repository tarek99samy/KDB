import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../types/product.type';
import { ButtonComponent } from '../button/button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}
