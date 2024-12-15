import { useState, useEffect } from 'react';
import { Product } from '../types';
import { api } from '../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await api.getProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product: Omit<Product, 'id'>) => {
    try {
      const newProduct = await api.addProduct(product);
      setProducts([...products, newProduct]);
      return newProduct;
    } catch (err) {
      setError('Failed to add product');
      throw err;
    }
  };

  const updateProduct = async (product: Product) => {
    try {
      const updatedProduct = await api.updateProduct(product);
      setProducts(products.map(p => p.id === product.id ? updatedProduct : p));
      return updatedProduct;
    } catch (err) {
      setError('Failed to update product');
      throw err;
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await api.deleteProduct(id);
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      setError('Failed to delete product');
      throw err;
    }
  };

  return {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
    refreshProducts: fetchProducts,
  };
};