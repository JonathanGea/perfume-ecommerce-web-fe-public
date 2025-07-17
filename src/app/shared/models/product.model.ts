export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  discount?: number; // Persentase diskon jika ada
  rating?: number; // Rating makanan (1-5)
  reviewCount?: number; // Jumlah review
  preparationTime?: number; // Waktu persiapan dalam menit
  calories?: number; // Jumlah kalori
  isAvailable?: boolean; // Ketersediaan produk
  isRecommended?: boolean; // Apakah makanan direkomendasikan
  isBestSeller?: boolean; // Apakah makanan adalah best seller
  isNew?: boolean; // Apakah makanan adalah menu baru

  specifications?: {
    [key: string]: string;
  };

  // Informasi nutrisi makanan
  nutrition?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    fiber?: number;
  };

  // Alergen yang mungkin terkandung
  allergens?: string[]; // ["Gluten", "Dairy", "Nuts", dll]

  // Kategori makanan (mis. Appetizer, Main Course, Dessert)
  category?: {
    id: string;
    name: string;
    imageUrl?: string;
  };

  // Tag untuk makanan (mis. Spicy, Vegetarian, Halal)
  tags?: Array<{
    id: string;
    name: string;
    colorClass?: string; // Untuk styling badge
  }>;

  // Opsi tambahan yang dapat dipilih (mis. Extra cheese, No onion)
  options?: Array<{
    id: string;
    name: string;
    price: number;
    isSelected?: boolean;
  }>;

  // Varian produk jika ada (mis. Ukuran, Level Pedas)
  variants?: Array<{
    id: string;
    name: string;
    price: number;
    isDefault?: boolean;
  }>;

  // Produk terkait atau yang sering dibeli bersama
  relatedProducts?: string[]; // Array of product IDs

  // Informasi restoran
  restaurant?: {
    id: string;
    name: string;
    logo?: string;
    deliveryFee?: number;
    minDeliveryTime?: number;
    maxDeliveryTime?: number;
  };
}
