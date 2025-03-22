import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types/product.type';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-cart-summary',
  imports: [ButtonComponent],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
})
export class CartSummaryComponent {
  cartSerive = inject(CartService);
  total = computed(() => {
    let total = this.cartSerive
      .cart()
      .reduce((acc: number, product: Product) => {
        return acc + product.price;
      }, 0);
    return total;
  });
}
