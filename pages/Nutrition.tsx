import React from 'react';
import { recipes } from '../services/mockDb';
import { ICONS } from '../constants';

interface NutritionProps {
  onNavigate: (page: string, params?: any) => void;
}

export const Nutrition: React.FC<NutritionProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-sand pb-24">
      <header className="px-6 pt-12 pb-8 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <h1 className="font-serif text-3xl text-charcoal">Nutrition Kitchen</h1>
        <p className="text-terracotta text-sm mt-1 font-medium">Fuel your movement.</p>
      </header>

      <div className="px-4 py-6 columns-2 gap-4 space-y-4">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id}
            onClick={() => alert(`Opening ${recipe.title} details... (Simulated)`)}
            className="break-inside-avoid bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="relative aspect-[3/4]">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold tracking-wide">
                {recipe.category.toUpperCase()}
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-serif text-lg leading-tight mb-1">{recipe.title}</h3>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{recipe.timeMin} min</span>
                <span>{recipe.calories} kcal</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};