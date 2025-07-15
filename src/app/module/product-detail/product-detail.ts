import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  @Input() product!: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  addToCart() {
    console.log('Menambahkan ke cart:', this.product);
    // Implementasi logic add to cart
    this.close.emit(); // Tutup modal setelah add to cart
  }
}
