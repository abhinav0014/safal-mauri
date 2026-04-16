export interface Product {
  id: string;
  name: string;
  nameNp: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  rating: number;
  reviews: number;
  description: string;
  flavorNotes?: string[];
  pairings?: string[];
  weight?: string;
  calories?: number;
  totalFat?: string;
  sugars?: string;
  sodium?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  total: number;
  count: number;
  clearCart: () => void;
}
