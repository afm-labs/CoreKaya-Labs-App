
import React, { useState } from 'react';
import { shopProducts } from '../services/mockDb';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { ShopCategory, ShopProduct } from '../types';

export const Shop: React.FC = () => {
  const [filter, setFilter] = useState<ShopCategory | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);

  const filteredProducts = filter === 'All' 
    ? shopProducts 
    : shopProducts.filter(p => p.category === filter);

  const categories = ['All', ...Object.values(ShopCategory)];

  return (
    <div className="min-h-screen bg-sand pb-24 relative">
      <header className="px-6 pt-12 pb-6 bg-white sticky top-0 z-40 shadow-sm">
        <h1 className="font-serif text-3xl text-charcoal mb-2">The Shop</h1>
        <p className="text-gray-500 text-sm">Curated apparatus and essentials.</p>
        
        {/* Simple Horizontal Filter */}
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors
                ${filter === cat 
                  ? 'bg-charcoal text-white' 
                  : 'bg-sand-dark text-gray-500 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOpen={setSelectedProduct}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center px-6">
           <p className="text-xs text-gray-400 leading-relaxed">
             * CoreKaya Pilates Labs may earn a commission from qualifying purchases via these curated links.
           </p>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};
