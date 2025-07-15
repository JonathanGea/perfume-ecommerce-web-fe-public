import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { CardBottom } from '../../shared/component/card-bottom/card-bottom';
import { ProductCard } from '../../shared/component/product-card/product-card';
import { ProductDetail } from '../product-detail/product-detail';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { ProductService } from '../../shared/services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, ProductCard, CardBottom, ProductDetail],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  products: Product[] = [];

  filteredProducts: Product[] = [];
  selectedProduct: Product | null = null;
  searchQuery: string = '';
  activeFilter: string = 'all';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.resetFilters()
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product, 1);
    // Here you could add a toast/notification
  }


  onProductClicked(product: any) {
    this.selectedProduct = product;
    // Ketika detail produk dibuka, nonaktifkan scrolling pada body
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  onCloseDetail() {
    this.selectedProduct = null;
    // Ketika detail produk ditutup, aktifkan kembali scrolling pada body
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }



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

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.applyFilter(filter);
  }

  applyFilter(filter: string): void {
    switch (filter) {
      case 'popular':
        // This is a placeholder - in a real app, you'd have a popularity metric
        this.filteredProducts = this.products.slice(0, 2);
        break;
      case 'new':
        // This is a placeholder - in a real app, you'd filter by date
        this.filteredProducts = [this.products[this.products.length - 1]];
        break;
      case 'all':
      default:
        this.filteredProducts = [...this.products];
        break;
    }

    // If there's a search query, apply it on top of the filter
    if (this.searchQuery.trim()) {
      this.searchProducts();
    }
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.activeFilter = 'all';
    this.filteredProducts = [...this.products];
  }

  getCartItemsCount(): number {
    return this.cartService.getCartItemsCount();
  }

  onQuantityChanged(event: {product: Product, quantity: number}): void {
    const { product, quantity } = event;

    if (quantity > 0) {
      this.cartService.updateQuantity(product.id, quantity);
    } else {
      this.cartService.removeFromCart(product.id);
    }
  }

}
