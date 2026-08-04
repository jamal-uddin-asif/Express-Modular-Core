export interface TItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  stock: number;
  rating: number;
  inStock: boolean;
  tags: string[];
}
