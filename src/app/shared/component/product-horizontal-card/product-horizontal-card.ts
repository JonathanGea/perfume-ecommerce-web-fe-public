import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-horizontal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-horizontal-card.html',
  styleUrls: ['./product-horizontal-card.css']
})
export class ProductHorizontalCard implements OnInit, OnDestroy {
  @Input() product!: Product;
  @Input() quantity: number = 1;

  @Output() quantityChanged: EventEmitter<{ product: Product, quantity: number }> = new EventEmitter();
  @Output() removed: EventEmitter<Product> = new EventEmitter();
  @Output() itemClicked: EventEmitter<Product> = new EventEmitter();

  private cartSubscription?: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Sync quantity with cart on initialization
    this.updateQuantityFromCart();

    // Keep quantity synced with cart
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
    if (cartItem) {
      this.quantity = cartItem.quantity;
    }
  }

  increaseQuantity(event?: Event): void {
    if (event) event.stopPropagation();
    this.quantity++;
    this.updateQuantity();
  }

  decreaseQuantity(event?: Event): void {
    if (event) event.stopPropagation();
    if (this.quantity > 0) {
      this.quantity--;
      this.updateQuantity();

      // Auto remove if quantity becomes 0
      if (this.quantity === 0) {
        this.removeItem(event);
      }
    }
  }

  updateQuantity(): void {
    this.quantityChanged.emit({
      product: this.product,
      quantity: this.quantity
    });
  }

  removeItem(event?: Event): void {
    if (event) event.stopPropagation();
    this.removed.emit(this.product);
  }

  onCardClick(event: Event): void {
    event.stopPropagation();
    this.itemClicked.emit(this.product);
  }
}