import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { QuantityControlComponent } from "../../shared/components/quantity-control-component/quantity-control-component";

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, QuantityControlComponent],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  @Input() product: Product | undefined;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(private cartService: CartService) { }
  
  onClose() {
    this.close.emit();
  }



  getSpecifications(): { key: string, value: string }[] {
    if (!this.product?.specifications) return [];
    return Object.entries(this.product.specifications).map(([key, value]) => ({
      key,
      value
    }));
  }

  quantity: number = 1;

  increaseQuantity(event: Event): void {
    event.stopPropagation();
    this.quantity++;
  }

  decreaseQuantity(event: Event): void {
    event.stopPropagation();
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.quantity > 0 && this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      this.close.emit();
    }
  }
}