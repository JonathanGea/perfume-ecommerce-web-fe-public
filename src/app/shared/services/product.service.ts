import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Armourage',
      description: 'Eau de Parfum dengan aroma tahan lama',
      price: 280000, // Harga dalam Rupiah
      imageUrl: 'https://picsum.photos/200/200.jpg'
    },
    {
      id: 2,
      name: 'Produk B',
      description: 'Deskripsi Produk B',
      price: 350000, // Harga dalam Rupiah
      imageUrl: 'https://picsum.photos/200/200.jpg'
    },
    {
      id: 3,
      name: 'Premium Cologne',
      description: 'Eau de Parfum berkualitas premium',
      price: 280000, // Harga dalam Rupiah
      imageUrl: 'https://picsum.photos/200/200.jpg'
    },
    {
      id: 4,
      name: 'Symbol Royal',
      description: 'Parfum dengan aroma sensual dan elegan, cocok untuk wanita yang percaya diri',
      price: 450000, // Harga dalam Rupiah
      imageUrl: 'https://picsum.photos/200/200.jpg'
    },
    {
      id: 5,
      name: 'Dior Sauvage',
      description: 'Parfum pria dengan aroma maskulin dan tahan lama',
      price: 1200000, // Harga dalam Rupiah
      imageUrl: 'https://picsum.photos/200/200.jpg'
    },
    {
      id: 6,
      name: 'Fresh Blossom',
      description: 'Parfum dengan aroma bunga segar yang menyegarkan',
      price: 320000, // Harga dalam Rupiah
      imageUrl: 'https://picsum.photos/200/200.jpg'
    }
  ];


  constructor() { }

  public getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  public getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}