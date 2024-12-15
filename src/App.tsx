import React from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { CartModal } from './components/CartModal';
import { ProductGrid } from './components/ProductGrid';
import { useProducts } from './hooks/useProducts';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <ProductGrid products={products} />
          <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;