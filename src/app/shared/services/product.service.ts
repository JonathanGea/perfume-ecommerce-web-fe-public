import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: "2d1c6a8f-28c0-438e-9c16-29a39f6f6e52",
      name: "Elegance Oud",
      description: "Perpaduan mewah antara kayu oud, mawar, dan amber yang menciptakan aroma elegan dan tahan lama.",
      price: 1200000,
      imageUrl: "https://picsum.photos/200/300?random=1",
      specifications: {
        "Material": "Premium Glass & Gold Cap",
        "Weight": "0.45 kg",
        "Dimensions": "12 x 6 x 3 cm",
        "Volume": "100 ml",
        "Fragrance Type": "Woody Oriental",
        "Longevity": "8-12 hours"
      },
      category: {
        id: "c1f7b9e0-0a2f-4c8d-8a3b-2f1e0d9c4b7a",
        name: "Unisex"
      },
      tag: [
        {
          id: "a9b2c3d4-e5f6-7890-1234-567890abcdef",
          name: "Best Seller"
        }
      ]
    },
    {
      id: "e7b9d0c2-3a4f-4d5e-8b6a-7c8d9e0f1a2b",
      name: "Morning Dew",
      description: "Aroma segar dan ringan seperti embun pagi dengan sentuhan bunga lily dan green tea.",
      price: 550000,
      imageUrl: "https://picsum.photos/200/300?random=2",
      specifications: {
        "Material": "Frosted Glass",
        "Weight": "0.35 kg",
        "Dimensions": "10 x 5 x 2 cm",
        "Volume": "50 ml",
        "Fragrance Type": "Floral Aquatic",
        "Longevity": "4-6 hours"
      },
      category: {
        id: "f2e1d0c9-8b7a-6f5e-4d3c-2b1a0f9e8d7c",
        name: "Women"
      },
      tag: [
        {
          id: "b0a1c2d3-e4f5-6789-0123-456789abcdef",
          name: "New Arrival"
        }
      ]
    },
    {
      id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      name: "Urban Legend",
      description: "Parfum maskulin dengan aroma rempah-rempah hangat, kayu cedar, dan musk yang kuat.",
      price: 850000,
      imageUrl: "https://picsum.photos/200/300?random=3",
      specifications: {
        "Material": "Black Glass & Wood Cap",
        "Weight": "0.5 kg",
        "Dimensions": "11 x 5.5 x 2.5 cm",
        "Volume": "75 ml",
        "Fragrance Type": "Spicy Woody",
        "Longevity": "6-8 hours"
      },
      category: {
        id: "d9c8b7a6-f5e4-d3c2-b1a0-f9e8d7c6b5a4",
        name: "Men"
      },
      tag: [
        {
          id: "c1d2e3f4-g5h6-7890-1234-567890abcdef",
          name: "Best Seller"
        }
      ]
    },
    {
      id: "c3d4e5f6-g7h8-9101-1213-141516171819",
      name: "Vanilla Dream",
      description: "Aroma manis dan creamy dari vanilla murni dengan sentuhan karamel yang lembut.",
      price: 600000,
      imageUrl: "https://picsum.photos/200/300?random=4",
      specifications: {
        "Material": "Cream Glass",
        "Weight": "0.4 kg",
        "Dimensions": "10 x 5 x 2 cm",
        "Volume": "60 ml",
        "Fragrance Type": "Gourmand",
        "Longevity": "5-7 hours"
      },
      category: {
        id: "f2e1d0c9-8b7a-6f5e-4d3c-2b1a0f9e8d7c",
        name: "Women"
      },
      tag: [
        {
          id: "d2e3f4g5-h6i7-8901-2345-678901abcdef",
          name: "Top Rated"
        }
      ]
    },
    {
      id: "f8a7b6c5-d4e3-f2a1-b0c9-d8e7f6a5b4c3",
      name: "Ocean Breeze",
      description: "Aroma segar dan energik yang mengingatkan pada hembusan angin laut.",
      price: 450000,
      imageUrl: "https://picsum.photos/200/300?random=5",
      specifications: {
        "Material": "Blue Recycled Glass",
        "Weight": "0.3 kg",
        "Dimensions": "9 x 4.5 x 2 cm",
        "Volume": "50 ml",
        "Fragrance Type": "Aquatic",
        "Longevity": "3-5 hours"
      },
      category: {
        id: "c1f7b9e0-0a2f-4c8d-8a3b-2f1e0d9c4b7a",
        name: "Unisex"
      },
      tag: [
        {
          id: "e3f4g5h6-i7j8-9012-3456-789012abcdef",
          name: "New Arrival"
        }
      ]
    },
    {
      id: "d9e8f7a6-b5c4-d3e2-f1a0-b9c8d7e6f5a4",
      name: "Spicy Wood",
      description: "Kombinasi rempah-rempah pedas dan kayu-kayuan yang memberikan kesan hangat dan berani.",
      price: 950000,
      imageUrl: "https://picsum.photos/200/300?random=6",
      specifications: {
        "Material": "Amber Glass & Metal Cap",
        "Weight": "0.55 kg",
        "Dimensions": "12 x 6 x 3 cm",
        "Volume": "80 ml",
        "Fragrance Type": "Spicy Oriental",
        "Longevity": "7-9 hours"
      },
      category: {
        id: "d9c8b7a6-f5e4-d3c2-b1a0-f9e8d7c6b5a4",
        name: "Men"
      },
      tag: [
        {
          id: "f4g5h6i7-j8k9-0123-4567-890123abcdef",
          name: "Best Seller"
        }
      ]
    },
    {
      id: "b1c2d3e4-f5g6-7h8i-9j0k-1l2m3n4o5p6q",
      name: "Rose Garden",
      description: "Aroma klasik dari kebun mawar yang sedang mekar, lembut dan romantis.",
      price: 700000,
      imageUrl: "https://picsum.photos/200/300?random=7",
      specifications: {
        "Material": "Pink Glass",
        "Weight": "0.38 kg",
        "Dimensions": "10 x 5 x 2 cm",
        "Volume": "60 ml",
        "Fragrance Type": "Floral",
        "Longevity": "5-7 hours"
      },
      category: {
        id: "f2e1d0c9-8b7a-6f5e-4d3c-2b1a0f9e8d7c",
        name: "Women"
      },
      tag: [
        {
          id: "g5h6i7j8-k9l0-1234-5678-901234abcdef",
          name: "Top Rated"
        }
      ]
    },
    {
      id: "f9e8d7c6-b5a4-c3d2-e1f0-a9b8c7d6e5f4",
      name: "Citrus Splash",
      description: "Aroma ceria dan menyegarkan dari jeruk, lemon, dan grapefruit.",
      price: 500000,
      imageUrl: "https://picsum.photos/200/300?random=8",
      specifications: {
        "Material": "Clear Glass",
        "Weight": "0.35 kg",
        "Dimensions": "9 x 4.5 x 2 cm",
        "Volume": "50 ml",
        "Fragrance Type": "Citrus",
        "Longevity": "3-5 hours"
      },
      category: {
        id: "c1f7b9e0-0a2f-4c8d-8a3b-2f1e0d9c4b7a",
        name: "Unisex"
      },
      tag: [
        {
          id: "h6i7j8k9-l0m1-2345-6789-012345abcdef",
          name: "New Arrival"
        }
      ]
    },
    {
      id: "a1b2c3d4-e5f6-7890-1234-567890abcde1",
      name: "Leather & Smoke",
      description: "Aroma kuat dan misterius dari kulit, tembakau, dan sentuhan asap.",
      price: 1500000,
      imageUrl: "https://picsum.photos/200/300?random=9",
      specifications: {
        "Material": "Black Matte Glass",
        "Weight": "0.6 kg",
        "Dimensions": "13 x 6 x 3 cm",
        "Volume": "100 ml",
        "Fragrance Type": "Leather",
        "Longevity": "10-12 hours"
      },
      category: {
        id: "d9c8b7a6-f5e4-d3c2-b1a0-f9e8d7c6b5a4",
        name: "Men"
      },
      tag: [
        {
          id: "i7j8k9l0-m1n2-3456-7890-123456abcdef",
          name: "Luxury"
        }
      ]
    },
    {
      id: "c2d3e4f5-g6h7-8i9j-0k1l-2m3n4o5p6q7r",
      name: "Sweet Blossom",
      description: "Aroma bunga-bungaan yang manis dan feminin, cocok untuk acara spesial.",
      price: 650000,
      imageUrl: "https://picsum.photos/200/300?random=10",
      specifications: {
        "Material": "Violet Glass",
        "Weight": "0.42 kg",
        "Dimensions": "10 x 5 x 2 cm",
        "Volume": "60 ml",
        "Fragrance Type": "Floral Fruity",
        "Longevity": "5-7 hours"
      },
      category: {
        id: "f2e1d0c9-8b7a-6f5e-4d3c-2b1a0f9e8d7c",
        name: "Women"
      },
      tag: [
        {
          id: "j8k9l0m1-n2o3-4567-8901-234567abcdef",
          name: "Top Rated"
        }
      ]
    },
    {
      id: "e4f5g6h7-i8j9-0k1l-2m3n-4o5p6q7r8s9t",
      name: "Aqua Marine",
      description: "Aroma air yang bersih dan sejuk, memberikan sensasi kesegaran seperti di tepi pantai.",
      price: 580000,
      imageUrl: "https://picsum.photos/200/300?random=11",
      specifications: {
        "Material": "Teal Glass",
        "Weight": "0.37 kg",
        "Dimensions": "9 x 4.5 x 2 cm",
        "Volume": "50 ml",
        "Fragrance Type": "Aquatic",
        "Longevity": "4-6 hours"
      },
      category: {
        id: "c1f7b9e0-0a2f-4c8d-8a3b-2f1e0d9c4b7a",
        name: "Unisex"
      },
      tag: [
        {
          id: "k9l0m1n2-o3p4-5678-9012-345678abcdef",
          name: "New Arrival"
        }
      ]
    },
    {
      id: "g6h7i8j9-k0l1-2m3n-4o5p-6q7r8s9t0u1v",
      name: "Black Pepper",
      description: "Aroma pedas dan tajam dari lada hitam yang dicampur dengan vetiver dan musk.",
      price: 900000,
      imageUrl: "https://picsum.photos/200/300?random=12",
      specifications: {
        "Material": "Dark Gray Glass",
        "Weight": "0.48 kg",
        "Dimensions": "11 x 5.5 x 2.5 cm",
        "Volume": "70 ml",
        "Fragrance Type": "Spicy Aromatic",
        "Longevity": "6-8 hours"
      },
      category: {
        id: "d9c8b7a6-f5e4-d3c2-b1a0-f9e8d7c6b5a4",
        name: "Men"
      },
      tag: [
        {
          id: "l0m1n2o3-p4q5-6789-0123-456789abcdef",
          name: "Best Seller"
        }
      ]
    },
    {
      id: "i8j9k0l1-m2n3-4o5p-6q7r-8s9t0u1v2w3x",
      name: "Velvet Iris",
      description: "Aroma lembut dan powdery dari bunga iris, cocok untuk kesan yang elegan dan halus.",
      price: 800000,
      imageUrl: "https://picsum.photos/200/300?random=13",
      specifications: {
        "Material": "Lavender Glass",
        "Weight": "0.4 kg",
        "Dimensions": "10 x 5 x 2 cm",
        "Volume": "60 ml",
        "Fragrance Type": "Powdery Floral",
        "Longevity": "5-7 hours"
      },
      category: {
        id: "f2e1d0c9-8b7a-6f5e-4d3c-2b1a0f9e8d7c",
        name: "Women"
      },
      tag: [
        {
          id: "m1n2o3p4-q5r6-7890-1234-567890abcdef",
          name: "Luxury"
        }
      ]
    },
    {
      id: "k0l1m2n3-o4p5-6q7r-8s9t-0u1v2w3x4y5z",
      name: "Green Tea & Mint",
      description: "Aroma teh hijau yang menenangkan dengan sentuhan mint yang menyegarkan.",
      price: 480000,
      imageUrl: "https://picsum.photos/200/300?random=14",
      specifications: {
        "Material": "Green Glass",
        "Weight": "0.36 kg",
        "Dimensions": "9 x 4.5 x 2 cm",
        "Volume": "50 ml",
        "Fragrance Type": "Herbal",
        "Longevity": "3-5 hours"
      },
      category: {
        id: "c1f7b9e0-0a2f-4c8d-8a3b-2f1e0d9c4b7a",
        name: "Unisex"
      },
      tag: [
        {
          id: "n2o3p4q5-r6s7-8901-2345-678901abcdef",
          name: "New Arrival"
        }
      ]
    },
    {
      id: "m2n3o4p5-q6r7-8s9t-0u1v-2w3x4y5z6a7b",
      name: "Sandalwood & Musk",
      description: "Aroma hangat dan sensual dari kayu cendana yang dipadukan dengan musk.",
      price: 1100000,
      imageUrl: "https://picsum.photos/200/300?random=15",
      specifications: {
        "Material": "Brown Glass & Wood Cap",
        "Weight": "0.52 kg",
        "Dimensions": "12 x 6 x 3 cm",
        "Volume": "90 ml",
        "Fragrance Type": "Woody Musky",
        "Longevity": "8-10 hours"
      },
      category: {
        id: "d9c8b7a6-f5e4-d3c2-b1a0-f9e8d7c6b5a4",
        name: "Men"
      },
      tag: [
        {
          id: "o3p4q5r6-s7t8-9012-3456-789012abcdef",
          name: "Luxury"
        }
      ]
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