import { Component, OnInit } from '@angular/core';
import { ProductHorizontalCard } from "../../shared/components/product-horizontal-card/product-horizontal-card";
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CartItem } from '../../shared/models/cart-item.model';
import { CartService } from '../../shared/services/cart.service';
import { WhatsAppService } from '../../shared/services/whatsapp.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, ProductHorizontalCard, DecimalPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {

  cartItems: CartItem[] = [];
  customerName: string = '';
  customerAddress: string = '';
  customerPhone: string = '';

  shippingCost: number = 5.00;
  taxRate: number = 0.1; // 10% tax rate

  constructor(
    private cartService: CartService,
    private whatsAppService: WhatsAppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }


  // Add this method to handle item removal
  onItemRemoved(product: any): void {
    this.cartService.removeFromCart(product.id);
  }

  // Calculate subtotal (item prices)
  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  // Calculate tax (10% of subtotal)
  getTax(): number {
    return this.getSubtotal() * this.taxRate;
  }

  // Calculate total (subtotal + shipping + tax)
  getTotal(): number {
    return this.getSubtotal() + this.shippingCost + this.getTax();
  }

  // Process checkout
  checkout(): void {
    if (this.cartItems.length === 0) {
      // Display error or notification that cart is empty
      return;
    }

    // For simplicity, hardcoded customer info (in real app, get this from a form)
    const customerInfo = {
      name: 'Customer Name',
      address: 'Customer Address',
      phone: 'Customer Phone'
    };

    // Generate and send WhatsApp message
    const message = this.whatsAppService.generateInvoiceText(this.cartItems, customerInfo);
    this.whatsAppService.sendToWhatsApp(message);

    // Clear cart after checkout
    this.cartService.clearCart();

    // Optionally navigate to a thank you page
    // this.router.navigate(['/thank-you']);
  }

  onQuantityChanged(event: { product: any, quantity: number }): void {
    const { product, quantity } = event;

    this.cartService.updateOrAddItem(product, quantity);

  }

  onItemClicked(product: any): void {
    // Navigate to product detail or perform other actions
    console.log('Item clicked:', product);
  }

  clearCart(): void {
    this.cartService.clearCart();
    // this.toastService.showToast('Cart has been cleared', 'info');
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
