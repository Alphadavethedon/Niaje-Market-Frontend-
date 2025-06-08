export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'vendor' | 'buyer';
  avatar?: string;
  verified: boolean;
  rating: number;
  location: string;
  joinDate: string;
  subscription?: Subscription;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'basic' | 'premium';
  status: 'active' | 'expired' | 'cancelled';
  startDate: string;
  endDate: string;
  amount: number;
  currency: 'KES';
  paymentMethod: 'mpesa' | 'card';
  autoRenew: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: 'KES' | 'USD';
  category: Category;
  images: string[];
  vendorId: string;
  vendor: User;
  location: string;
  condition: 'new' | 'used' | 'refurbished';
  negotiable: boolean;
  featured: boolean;
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'sold' | 'inactive';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  subcategories?: string[];
}

export interface Review {
  id: string;
  userId: string;
  user: User;
  targetId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Transaction {
  id: string;
  buyerId: string;
  vendorId: string;
  productId: string;
  amount: number;
  currency: 'KES' | 'USD';
  paymentMethod: 'mpesa' | 'paypal' | 'card';
  status: 'pending' | 'completed' | 'cancelled' | 'disputed';
  escrowStatus: 'held' | 'released' | 'refunded';
  createdAt: string;
}

export interface ContactRequest {
  id: string;
  buyerId: string;
  vendorId: string;
  productId: string;
  message: string;
  status: 'pending' | 'approved' | 'blocked';
  createdAt: string;
}