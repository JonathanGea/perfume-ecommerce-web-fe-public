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
      description: 'Eau de Parfum with long-lasting fragrance',
      price: 28.00,
      imageUrl: 'https://picsum.photos/200/200.jpg'
    },
    {
      id: 2,
      name: 'Product B',
      description: 'Description B',
      price: 35.00,
      imageUrl: 'https://picsum.photos/200/200.jpg'
    },
    {
      id: 3,
      name: 'Premium Cologne',
      description: 'Eau de Parfum',
      price: 28.00,
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