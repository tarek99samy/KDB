import { Component, signal } from '@angular/core';
import { Product } from '../../types/product.type';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  async ngOnInit() {
    const res = await fetch(
      'https://fakestoreapi.com/products/category/electronics'
    );
    const data = await res.json();
    this.products.set(data);
  }

  products = signal<Product[]>([]);
}
