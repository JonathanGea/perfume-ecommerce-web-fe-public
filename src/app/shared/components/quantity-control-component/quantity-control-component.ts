import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-control-component',
  templateUrl: './quantity-control-component.html',
  styleUrl: './quantity-control-component.css'
})
export class QuantityControlComponent {
  @Input() quantity: number = 1;
  @Input() min: number = 1;
  @Input() max?: number;
  @Output() quantityChange = new EventEmitter<number>();

  decrease() {
    if (this.quantity > this.min) {
      this.quantity--;
      this.emitQuantity();
    }
  }

  increase() {
    if (!this.max || this.quantity < this.max) {
      this.quantity++;
      this.emitQuantity();
    }
  }

  private emitQuantity() {
    this.quantityChange.emit(this.quantity);
  }
}
