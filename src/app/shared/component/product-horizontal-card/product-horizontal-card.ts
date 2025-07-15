import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-horizontal-card',
  imports: [],
  templateUrl: './product-horizontal-card.html',
  styleUrl: './product-horizontal-card.css'
})
export class ProductHorizontalCard {

  @Input() product!: {
    id?: string | number; // ID produk (opsional)
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };

  @Input() quantity: number = 1;

  @Output() quantityChanged: EventEmitter<{ product: any, quantity: number }> = new EventEmitter();
  @Output() removed: EventEmitter<any> = new EventEmitter();
  @Output() itemClicked: EventEmitter<any> = new EventEmitter();

  increaseQuantity() {
    this.quantity++;
    this.updateQuantity();
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.updateQuantity();

      // Opsional: Otomatis hapus item jika quantity = 0
      if (this.quantity === 0) {
        this.removeItem();
      }
    }
  }

  updateQuantity() {
    this.quantityChanged.emit({
      product: this.product,
      quantity: this.quantity
    });
  }

  removeItem() {
    this.removed.emit(this.product);
  }

  onCardClick() {
    this.itemClicked.emit(this.product);
  }

}
