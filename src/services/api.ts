import { Product } from '../types';

const BASE_URL = 'https://api.jsonbin.io/v3/b/your-bin-id';

export const api = {
  async getProducts(): Promise<Product[]> {
    // For demo purposes, we'll return the static products
    // In a real app, this would be: const response = await fetch(`${BASE_URL}/products`);
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 500);
    });
  },

  async addProduct(product: Omit<Product, 'id'>): Promise<Product> {
    // Simulate API call
    return new Promise((resolve) => {
      const newProduct = {
        ...product,
        id: Math.floor(Math.random() * 1000),
      };
      setTimeout(() => resolve(newProduct), 500);
    });
  },

  async updateProduct(product: Product): Promise<Product> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(product), 500);
    });
  },

  async deleteProduct(id: number): Promise<void> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  },
};

// Temporary products data for demo
const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    description: "Feature-rich smartwatch with health tracking",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 149.99,
    description: "Portable bluetooth speaker with premium sound",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 79.99,
    description: "Water-resistant backpack with laptop compartment",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
  }
];