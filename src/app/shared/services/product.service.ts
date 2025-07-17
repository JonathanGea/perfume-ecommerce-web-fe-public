import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: "f001",
      name: "Nasi Goreng Spesial",
      description: "Nasi goreng dengan bumbu pilihan, disajikan dengan telur mata sapi, ayam suwir, dan kerupuk udang. Dilengkapi dengan irisan mentimun dan tomat segar.",
      price: 45000,
      imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      discount: 10,
      rating: 4.8,
      reviewCount: 356,
      preparationTime: 15,
      calories: 650,
      isAvailable: true,
      isRecommended: true,
      isBestSeller: true,
      nutrition: {
        calories: 650,
        protein: 22,
        carbs: 85,
        fat: 18,
        fiber: 3
      },
      allergens: ["Telur", "Udang", "Kacang"],
      category: {
        id: "c001",
        name: "Makanan Utama"
      },
      tags: [
        {
          id: "t001",
          name: "Pedas",
          colorClass: "bg-red-100 text-red-800"
        },
        {
          id: "t002",
          name: "Favorit",
          colorClass: "bg-orange-100 text-orange-800"
        }
      ],
      options: [
        {
          id: "o001",
          name: "Tambah Telur",
          price: 5000
        },
        {
          id: "o002",
          name: "Tambah Kerupuk",
          price: 3000
        },
        {
          id: "o003",
          name: "Ekstra Pedas",
          price: 2000
        }
      ],
      variants: [
        {
          id: "v001",
          name: "Porsi Reguler",
          price: 0,
          isDefault: true
        },
        {
          id: "v002",
          name: "Porsi Jumbo",
          price: 15000
        }
      ],
      relatedProducts: ["f002", "f004", "f005"],
      restaurant: {
        id: "r001",
        name: "Warung Nusantara",
        logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        deliveryFee: 10000,
        minDeliveryTime: 25,
        maxDeliveryTime: 40
      }
    },
    {
      id: "f002",
      name: "Ayam Bakar Madu",
      description: "Potongan ayam pilihan yang dibakar dengan madu asli dan rempah-rempah tradisional. Disajikan dengan nasi putih, lalapan, dan sambal terasi.",
      price: 55000,
      imageUrl: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviewCount: 289,
      preparationTime: 20,
      calories: 720,
      isAvailable: true,
      isRecommended: true,
      nutrition: {
        calories: 720,
        protein: 35,
        carbs: 60,
        fat: 25,
        fiber: 2
      },
      allergens: ["Kacang", "Kedelai"],
      category: {
        id: "c001",
        name: "Makanan Utama"
      },
      tags: [
        {
          id: "t003",
          name: "Bakar",
          colorClass: "bg-yellow-100 text-yellow-800"
        },
        {
          id: "t004",
          name: "Halal",
          colorClass: "bg-green-100 text-green-800"
        }
      ],
      options: [
        {
          id: "o004",
          name: "Tambah Nasi",
          price: 5000
        },
        {
          id: "o005",
          name: "Ekstra Sambal",
          price: 3000
        }
      ],
      variants: [
        {
          id: "v003",
          name: "Paha",
          price: 0,
          isDefault: true
        },
        {
          id: "v004",
          name: "Dada",
          price: 5000
        },
        {
          id: "v005",
          name: "Sayap",
          price: -5000
        }
      ],
      relatedProducts: ["f001", "f003"],
      restaurant: {
        id: "r001",
        name: "Warung Nusantara",
        logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        deliveryFee: 10000,
        minDeliveryTime: 25,
        maxDeliveryTime: 40
      }
    },
    {
      id: "f003",
      name: "Soto Ayam Kampung",
      description: "Soto ayam dengan kaldu bening khas, disajikan dengan potongan ayam kampung, tauge, kol, dan telur rebus. Dilengkapi dengan emping dan sambal.",
      price: 35000,
      imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      discount: 15,
      rating: 4.6,
      reviewCount: 201,
      preparationTime: 15,
      calories: 450,
      isAvailable: true,
      isNew: true,
      nutrition: {
        calories: 450,
        protein: 25,
        carbs: 40,
        fat: 15,
        fiber: 5
      },
      allergens: ["Telur", "Kacang"],
      category: {
        id: "c002",
        name: "Sup & Soto"
      },
      tags: [
        {
          id: "t004",
          name: "Halal",
          colorClass: "bg-green-100 text-green-800"
        },
        {
          id: "t005",
          name: "Menu Baru",
          colorClass: "bg-blue-100 text-blue-800"
        }
      ],
      options: [
        {
          id: "o006",
          name: "Tambah Jeruk Nipis",
          price: 1000
        },
        {
          id: "o007",
          name: "Tambah Emping",
          price: 3000
        }
      ],
      variants: [
        {
          id: "v006",
          name: "Regular",
          price: 0,
          isDefault: true
        },
        {
          id: "v007",
          name: "Large",
          price: 10000
        }
      ],
      relatedProducts: ["f001", "f002"],
      restaurant: {
        id: "r002",
        name: "Soto Madura",
        deliveryFee: 8000,
        minDeliveryTime: 20,
        maxDeliveryTime: 35
      }
    },
    {
      id: "f004",
      name: "Es Cendol Durian",
      description: "Minuman tradisional dengan cendol pandan, santan kental, gula merah, dan potongan durian Montong asli. Disajikan dingin dengan es serut.",
      price: 25000,
      imageUrl: "https://media.istockphoto.com/id/1147519319/photo/es-cendol-durian-or-es-dawet-duren-a-peranakan-icy-dessert-of-pandan-noodle-jelly-with-durian.webp?a=1&b=1&s=612x612&w=0&k=20&c=1UamfPh8EkAPk2gsB-P6VJ2Hb4JoDYxduE2uCzJfrO8=",
      rating: 4.9,
      reviewCount: 412,
      preparationTime: 10,
      calories: 320,
      isAvailable: true,
      isBestSeller: true,
      nutrition: {
        calories: 320,
        protein: 3,
        carbs: 65,
        fat: 10,
        fiber: 1
      },
      allergens: ["Susu"],
      category: {
        id: "c003",
        name: "Minuman"
      },
      tags: [
        {
          id: "t006",
          name: "Manis",
          colorClass: "bg-pink-100 text-pink-800"
        },
        {
          id: "t007",
          name: "Dingin",
          colorClass: "bg-blue-100 text-blue-800"
        }
      ],
      options: [
        {
          id: "o008",
          name: "Tambah Durian",
          price: 10000
        },
        {
          id: "o009",
          name: "Kurangi Gula",
          price: 0
        }
      ],
      variants: [
        {
          id: "v008",
          name: "Regular",
          price: 0,
          isDefault: true
        },
        {
          id: "v009",
          name: "Large",
          price: 8000
        }
      ],
      relatedProducts: ["f005"],
      restaurant: {
        id: "r003",
        name: "Es Paling Enak",
        logo: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        deliveryFee: 12000,
        minDeliveryTime: 15,
        maxDeliveryTime: 30
      }
    },
    {
      id: "f005",
      name: "Martabak Manis Spesial",
      description: "Martabak manis dengan topping keju, coklat, kacang, dan susu. Dibuat dengan adonan premium yang lembut dan gurih di dalamnya.",
      price: 65000,
      imageUrl: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      discount: 5,
      rating: 4.7,
      reviewCount: 354,
      preparationTime: 25,
      calories: 850,
      isAvailable: false,
      isRecommended: true,
      nutrition: {
        calories: 850,
        protein: 15,
        carbs: 100,
        fat: 45,
        fiber: 2
      },
      allergens: ["Susu", "Telur", "Gluten", "Kacang"],
      category: {
        id: "c004",
        name: "Dessert"
      },
      tags: [
        {
          id: "t008",
          name: "Manis",
          colorClass: "bg-pink-100 text-pink-800"
        },
        {
          id: "t009",
          name: "Populer",
          colorClass: "bg-purple-100 text-purple-800"
        }
      ],
      options: [
        {
          id: "o010",
          name: "Ekstra Keju",
          price: 8000
        },
        {
          id: "o011",
          name: "Ekstra Coklat",
          price: 7000
        },
        {
          id: "o012",
          name: "Tanpa Kacang",
          price: 0
        }
      ],
      variants: [
        {
          id: "v010",
          name: "Regular (Diameter 20cm)",
          price: 0,
          isDefault: true
        },
        {
          id: "v011",
          name: "Large (Diameter 30cm)",
          price: 25000
        }
      ],
      relatedProducts: ["f004", "f001"],
      restaurant: {
        id: "r004",
        name: "Martabak 88",
        logo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        deliveryFee: 15000,
        minDeliveryTime: 30,
        maxDeliveryTime: 45
      }
    }
  ];



  constructor() { }

  public getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  public getProductById(id: string): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}