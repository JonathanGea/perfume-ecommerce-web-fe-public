import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
    public cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

    constructor() {
        // Load cart from localStorage on service initialization
        this.loadCart();
    }

    private loadCart(): void {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.cartItemsSubject.next(JSON.parse(savedCart));
        }
    }

    private saveCart(cartItems: CartItem[]): void {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        this.cartItemsSubject.next(cartItems);
    }

    public getCartItems(): CartItem[] {
        return this.cartItemsSubject.value;
    }

    public addToCart(product: Product, quantity: number = 1): void {
        const currentCart = this.getCartItems();
        const existingItemIndex = currentCart.findIndex(item => item.product.id === product.id);

        if (existingItemIndex !== -1) {
            // Product already exists in cart, update quantity
            const updatedCart = [...currentCart];
            updatedCart[existingItemIndex].quantity += quantity;
            this.saveCart(updatedCart);
        } else {
            // Add new product to cart
            const newItem: CartItem = { product, quantity };
            this.saveCart([...currentCart, newItem]);
        }
    }


    public removeFromCart(productId: number): void {
        const currentCart = this.getCartItems();
        const updatedCart = currentCart.filter(item => item.product.id !== productId);
        this.saveCart(updatedCart);
    }

    public getCartTotal(): number {
        return this.getCartItems().reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    public getCartItemsCount(): number {
        return this.getCartItems().reduce((count, item) => count + item.quantity, 0);
    }

    public clearCart(): void {
        this.saveCart([]);
    }

    public updateQuantity(productId: number, quantity: number): void {
        const currentCart = this.getCartItems();
        const itemIndex = currentCart.findIndex(item => item.product.id === productId);

        if (quantity <= 0) {
            // Jika kuantitas <= 0, hapus dari keranjang
            this.removeFromCart(productId);
            return;
        }

        if (itemIndex !== -1) {
            // Item sudah ada di keranjang, update kuantitas
            const updatedCart = [...currentCart];
            updatedCart[itemIndex].quantity = quantity;
            this.saveCart(updatedCart);
        } else {
            // Item belum ada di keranjang, temukan produk dan tambahkan
            const product = this.findProductById(productId);
            if (product) {
                this.addToCart(product, quantity);
            }
        }
    }

    private findProductById(productId: number): Product | null {
        // Implementasi ini harus disesuaikan dengan cara Anda menyimpan/mengakses produk
        // Contoh sederhana:
        return null; // Ganti dengan implementasi yang sesuai
    }
}