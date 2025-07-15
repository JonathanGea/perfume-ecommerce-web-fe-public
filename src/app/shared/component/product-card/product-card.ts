import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  @Output() quantityChanged: EventEmitter<{ product: Product, quantity: number }> = new EventEmitter();

  private _quantity: number = 0;

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    // Jika kuantitas berubah, emit event
    if (this._quantity !== value) {
      this._quantity = value;
      this.quantityChanged.emit({ product: this.product, quantity: this._quantity });
    }
  }

  increaseQuantity(event: Event) {
    event.stopPropagation();
    this.quantity++;
  }

  decreaseQuantity(event: Event) {
    event.stopPropagation();
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  // Emit event ketika card diklik
  onCardClick() {
    this.productClicked.emit(this.product);
    console.log("oncard click");
  }
}
