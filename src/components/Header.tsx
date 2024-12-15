import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
        <button
          onClick={onCartClick}
          className="p-2 hover:bg-gray-100 rounded-full relative"
        >
          <ShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
};