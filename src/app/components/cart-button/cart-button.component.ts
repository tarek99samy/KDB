import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  imports: [],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.css',
})
export class CartButtonComponent {
  label = input('');
  btnClicked = output();
}
