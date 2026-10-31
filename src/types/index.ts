export type GlowMode = 'daylight' | 'candlelight' | 'twinkly' | 'night';

export interface HeightVariant {
  height: string;
  price: number;
  originalPrice: number;
  tips: string;
  lights: string;
}

export interface Product {
  id: string;
  name: string;
  slug?: string;
  sku?: string;
  category: 'trees' | 'wreaths' | 'decor';
  badge: string;
  badgeClass: string;
  rating: number;
  reviewsCount: number;
  image: string;
  additionalImages?: string[];
  description: string;
  realism: string;
  lightStyle: string;
  heights: HeightVariant[];
  selectedHeightIndex?: number;
  isFeatured?: boolean;
  specs?: Record<string, string>;
  includes?: string[];
}

export interface Post {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface CartItem {
  id?: string;
  productId: string;
  name: string;
  height: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  lights?: string;
}

export interface Order {
  id?: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  totalAmount: number;
  discountCode?: string;
  discountAmount?: number;
  items: CartItem[];
  status?: string;
  createdAt?: string;
}
