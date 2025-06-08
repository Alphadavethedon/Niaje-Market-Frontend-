import { User, Product, Category, Subscription } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Magari (Cars)',
    icon: 'Car',
    description: 'Gari za bei nafuu - from Toyota to Benz!',
    subcategories: ['Toyota', 'Nissan', 'Subaru', 'Mercedes', 'BMW', 'Mitsubishi']
  },
  {
    id: '2',
    name: 'Nyumba (Real Estate)', 
    icon: 'Home',
    description: 'Plots, nyumba na rental properties',
    subcategories: ['Apartments', 'Plots', 'Commercial', 'Rental']
  },
  {
    id: '3',
    name: 'Mitumba & Fashion',
    icon: 'Shirt',
    description: 'Best mitumba deals na designer wear',
    subcategories: ['Clothes', 'Shoes', 'Bags', 'Accessories']
  },
  {
    id: '4',
    name: 'Fundis & Services',
    icon: 'Wrench',
    description: 'Plumbers, electricians, mabwenyenye wa kazi',
    subcategories: ['Plumbing', 'Electrical', 'Carpentry', 'Cleaning']
  },
  {
    id: '5',
    name: 'Electronics',
    icon: 'Smartphone',
    description: 'Phones, laptops na electronics zote',
    subcategories: ['Phones', 'Laptops', 'TVs', 'Audio']
  },
  {
    id: '6',
    name: 'Chakula & Groceries',
    icon: 'Apple',
    description: 'Fresh produce kutoka kwa mama mboga',
    subcategories: ['Vegetables', 'Fruits', 'Grains', 'Meat']
  }
];

export const mockSubscriptions: Subscription[] = [
  {
    id: 'sub_1',
    userId: '1',
    plan: 'premium',
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-02-01',
    amount: 200,
    currency: 'KES',
    paymentMethod: 'mpesa',
    autoRenew: true
  },
  {
    id: 'sub_2',
    userId: '2',
    plan: 'basic',
    status: 'expired',
    startDate: '2023-12-01',
    endDate: '2024-01-01',
    amount: 200,
    currency: 'KES',
    paymentMethod: 'mpesa',
    autoRenew: false
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Kariuki',
    email: 'john@example.com',
    phone: '+254712345678',
    role: 'vendor',
    verified: true,
    rating: 4.8,
    location: 'Nairobi, Kenya',
    joinDate: '2023-01-15',
    subscription: mockSubscriptions[0]
  },
  {
    id: '2',
    name: 'Mary Wanjiku',
    email: 'mary@example.com', 
    phone: '+254798765432',
    role: 'vendor',
    verified: true,
    rating: 4.5,
    location: 'Mombasa, Kenya',
    joinDate: '2023-03-20',
    subscription: mockSubscriptions[1]
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Toyota Vitz - Mzuri Sana!',
    description: 'Clean Toyota Vitz, 2010 model. Mileage ni poa, maintained vizuri. Perfect for Nairobi traffic!',
    price: 850000,
    currency: 'KES',
    category: categories[0],
    images: ['https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg'],
    vendorId: '1',
    vendor: mockUsers[0],
    location: 'Nairobi CBD',
    condition: 'used',
    negotiable: true,
    featured: true,
    views: 245,
    likes: 18,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
    status: 'active'
  },
  {
    id: '2',
    title: 'Mitumba Jacket - Designer Quality',
    description: 'High quality leather jacket, mtumba lakini designer. Size L, condition ni A1!',
    price: 2500,
    currency: 'KES',
    category: categories[2],
    images: ['https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg'],
    vendorId: '1',
    vendor: mockUsers[0],
    location: 'Gikomba Market',
    condition: 'used',
    negotiable: true,
    featured: false,
    views: 89,
    likes: 12,
    createdAt: '2024-01-08',
    updatedAt: '2024-01-08',
    status: 'active'
  },
  {
    id: '3',
    title: 'Fundi Plumber - Maji Expert!',
    description: 'Professional plumber with 10+ years experience. Tunasaidia na maji issues zote - pipes, taps, drainage. Call tukuje haraka!',
    price: 3000,
    currency: 'KES',
    category: categories[3],
    images: ['https://images.pexels.com/photos/8891/pexels-photo-8891.jpeg'],
    vendorId: '2',
    vendor: mockUsers[1],
    location: 'Nairobi & Environs',
    condition: 'new',
    negotiable: true,
    featured: true,
    views: 156,
    likes: 24,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
    status: 'active'
  }
];