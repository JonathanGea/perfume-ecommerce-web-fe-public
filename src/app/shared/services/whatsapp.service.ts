// src/app/services/whatsapp.service.ts
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

interface CustomerInfo {
  name: string;
  address: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  private adminPhoneNumber: string = '6289619166030'; // Change to your WhatsApp number

  constructor() { }

  public generateInvoiceText(cartItems: CartItem[], customerInfo: CustomerInfo): string {
    // Format current date
    const date = new Date();
    const formattedDate = date.toLocaleDateString();

    // Start building the message
    let message = `*ORDER INVOICE*\n`;
    message += `Date: ${formattedDate}\n\n`;

    // Customer info
    message += `*Customer Details:*\n`;
    message += `Name: ${customerInfo.name}\n`;
    message += `Address: ${customerInfo.address}\n`;
    message += `Phone: ${customerInfo.phone}\n\n`;

    // Order items
    message += `*Order Items:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} x${item.quantity}\n`;
      message += `   Price: $${item.product.price.toFixed(2)}\n`;
      message += `   Subtotal: $${(item.product.price * item.quantity).toFixed(2)}\n`;
    });

    // Order summary
    const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    message += `\n*Order Summary:*\n`;
    message += `Total Items: ${cartItems.reduce((count, item) => count + item.quantity, 0)}\n`;
    message += `Total Amount: $${total.toFixed(2)}\n\n`;

    message += `Thank you for your order!`;

    return message;
  }

  public sendToWhatsApp(message: string): void {
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${this.adminPhoneNumber}?text=${encodedMessage}`;

    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  }
}