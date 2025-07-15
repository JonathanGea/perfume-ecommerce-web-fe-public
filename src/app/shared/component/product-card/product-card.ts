import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard implements OnInit, OnDestroy {
  @Input() product!: Product;
  @Output() productClicked: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() quantityChanged: EventEmitter<{ product: Product, quantity: number }> = new EventEmitter();

  quantity: number = 0;
  private cartSubscription?: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Initialize quantity from cart (if product is already in cart)
    this.updateQuantityFromCart();

    // Subscribe to cart changes to keep quantity in sync
    this.cartSubscription = this.cartService.cartItems$.subscribe(() => {
      this.updateQuantityFromCart();
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  private updateQuantityFromCart(): void {
    const cartItems = this.cartService.getCartItems();
    const cartItem = cartItems.find(item => item.product.id === this.product.id);
    this.quantity = cartItem ? cartItem.quantity : 0;
  }

  increaseQuantity(event: Event): void {
    event.stopPropagation(); // Prevent card click
    this.quantity++;
    this.emitQuantityChanged();
  }

  decreaseQuantity(event: Event): void {
    event.stopPropagation(); // Prevent card click
    if (this.quantity > 0) {
      this.quantity--;
      this.emitQuantityChanged();
    }
  }

  private emitQuantityChanged(): void {
    this.quantityChanged.emit({
      product: this.product,
      quantity: this.quantity
    });
  }

  onCardClick(): void {
    this.productClicked.emit(this.product);
  }
}

