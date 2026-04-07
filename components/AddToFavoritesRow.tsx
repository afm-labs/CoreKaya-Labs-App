
import React from 'react';

interface AddToFavoritesRowProps {
  isFavorite: boolean;
  onToggle: () => void;
}

export const AddToFavoritesRow: React.FC<AddToFavoritesRowProps> = ({ isFavorite, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className="flex items-center gap-3 py-4 w-full group focus:outline-none transition-all"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <div className="relative">
        <svg 
          className={`w-6 h-6 transition-all duration-300 ease-out ${
            isFavorite ? 'text-orange fill-orange scale-110' : 'text-gray-400 fill-transparent group-hover:text-white'
          }`}
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={isFavorite ? 0 : 2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        {isFavorite && (
           <span className="absolute inset-0 rounded-full bg-orange/20 animate-ping" />
        )}
      </div>
      
      <span className={`text-sm font-medium transition-colors ${
        isFavorite ? 'text-orange' : 'text-white/90 group-hover:text-white'
      }`}>
        {isFavorite ? "Added to Favorites" : "Add to Favorites"}
      </span>
    </button>
  );
};
