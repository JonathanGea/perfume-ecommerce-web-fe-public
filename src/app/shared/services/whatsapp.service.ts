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
  private adminPhoneNumber: string = '6281385172485'; // Change to your WhatsApp number

  constructor() { }

  public generateInvoiceText(cartItems: CartItem[], customerInfo: CustomerInfo): string {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    const orderItemsText = cartItems.map(item =>
      `> ${item.product.name}\n  ${item.quantity} x Rp${item.product.price.toLocaleString('id-ID')} = *Rp${(item.product.price * item.quantity).toLocaleString('id-ID')}*`
    ).join('\n');

    // Versi invoice tanpa emoji
    const message = `
*--- INVOICE PESANAN ---*

Terima kasih telah berbelanja!
Pesanan Anda sedang kami siapkan.

*Tanggal:* ${formattedDate}

*RINCIAN PRODUK*
${orderItemsText}

----------------------------------------
*TOTAL PEMBAYARAN*
*_Rp${total.toLocaleString('id-ID')}_*
----------------------------------------

Silakan transfer ke rekening:
*Bank XYZ* - 1234567890
(a/n Nama Toko Anda)

Mohon kirimkan bukti transfer agar pesanan bisa segera kami proses. Ditunggu konfirmasinya. Terima kasih.
  `;

    return message.trim();
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