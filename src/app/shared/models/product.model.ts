export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  specifications?: { 
    [key: string]: string;
  };
  category?: { 
    id: string;
    name: string;
  };
  tag?: Array<{ 
    id: string;
    name: string;
  }>;
}