import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card-bottom',
  imports: [],
  templateUrl: './card-bottom.html',
  styleUrl: './card-bottom.css'
})
export class CardBottom {

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
