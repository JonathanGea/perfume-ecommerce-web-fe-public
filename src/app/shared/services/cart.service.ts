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

    public updateOrAddItem(product: Product, quantity: number): void {
        if (quantity <= 0) {
            this.removeFromCart(product.id);
            return;
        }

        const currentCart = this.getCartItems();
        const existingItemIndex = currentCart.findIndex(item => item.product.id === product.id);

        if (existingItemIndex !== -1) {
            // Update existing item
            const updatedCart = [...currentCart];
            updatedCart[existingItemIndex].quantity = quantity;
            this.saveCart(updatedCart);
        } else {
            // Add new item
            const newItem: CartItem = { product, quantity };
            this.saveCart([...currentCart, newItem]);
        }
    }

    public removeFromCart(productId: string): void {
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

}