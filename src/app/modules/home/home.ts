import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { ProductDetail } from '../product-detail/product-detail';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { ProductService } from '../../shared/services/product.service';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';
import { CartButton } from '../../shared/components/cart-button/cart-button';
import { Router } from '@angular/router';
import { PromoBanner } from "./promo-banner/promo-banner";

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, ProductCard, CartButton, ProductDetail, PromoBanner],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedProduct: Product | null = null;
  searchQuery: string = '';
  activeFilter: string = 'all';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastService: ToastService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = [...products];
    });
  }

  // Handler for product card click
  onProductClicked(product: Product): void {
    this.selectedProduct = product;
  }

  // Handler for closing product detail
  onCloseDetail(): void {
    this.selectedProduct = null;
  }

  onQuantityChanged(event: { product: Product, quantity: number }): void {
    const { product, quantity } = event;
    const previousQuantity = this.getPreviousQuantity(product.id);

    // Gunakan metode baru yang selalu menerima objek product
    this.cartService.updateOrAddItem(product, quantity);

    // Toast notification logic
    if (quantity === 0) {
      this.toastService.showToast(`Removed ${product.name} from cart`, 'info');
    } else if (previousQuantity === 0) {
      this.toastService.showToast(`Added ${product.name} to cart`, 'success');
    } else if (quantity > previousQuantity) {
      this.toastService.showToast(`Increased ${product.name} quantity`, 'success');
    } else {
      this.toastService.showToast(`Decreased ${product.name} quantity`, 'info');
    }
  }

  // Helper method to get previous quantity
  private getPreviousQuantity(productId: string): number {
    const cartItems = this.cartService.getCartItems();
    const item = cartItems.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  }

  // Search products based on query
  searchProducts(): void {
    if (!this.searchQuery.trim()) {
      this.applyFilter(this.activeFilter);
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  }

  // Apply filter to products
  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.applyFilter(filter);
  }

  // Apply selected filter
  private applyFilter(filter: string): void {
    switch (filter) {
      case 'popular':
        this.filteredProducts = this.products.slice(0, 2);
        break;
      case 'new':
        this.filteredProducts = [this.products[this.products.length - 1]];
        break;
      case 'all':
      default:
        this.filteredProducts = [...this.products];
        break;
    }

    if (this.searchQuery.trim()) {
      this.searchProducts();
    }
  }

  // Reset filters
  resetFilters(): void {
    this.searchQuery = '';
    this.activeFilter = 'all';
    this.filteredProducts = [...this.products];
  }

  // Get cart items count for UI
  getCartItemsCount(): number {
    return this.cartService.getCartItemsCount();
  }
  
  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

}

