
import React from 'react';

interface FavoriteToggleButtonProps {
  isActive: boolean;
  onToggle: (e: React.MouseEvent) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const FavoriteToggleButton: React.FC<FavoriteToggleButtonProps> = ({ 
  isActive, 
  onToggle, 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10"
  };

  return (
    <button
      onClick={onToggle}
      className={`relative group focus:outline-none transition-transform active:scale-90 ${className}`}
      aria-label={isActive ? "Remove from favorites" : "Add to favorites"}
    >
      <svg 
        className={`${sizeClasses[size]} transition-all duration-300 ease-out ${
          isActive ? 'text-orange fill-orange scale-110' : 'text-gray-400 fill-transparent hover:text-orange/70'
        }`}
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={isActive ? 0 : 2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      {/* Pulse Effect on Click */}
      {isActive && (
          <span className="absolute inset-0 rounded-full bg-orange/20 animate-ping" />
      )}
    </button>
  );
};
