import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-button',
  imports: [],
  templateUrl: './cart-button.html',
  styleUrl: './cart-button.css'
})
export class CartButton {
  itemCount: number = 0;
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(() => {
      this.updateCartInfo();
    });
  }

  updateCartInfo(): void {
    this.itemCount = this.cartService.getCartItemsCount();
    this.totalPrice = this.cartService.getCartTotal();
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

}
