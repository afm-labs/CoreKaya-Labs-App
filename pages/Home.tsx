
import React, { useEffect, useState } from 'react';
import { workouts, currentSchedule, getWorkoutById, shopProducts } from '../services/mockDb';
import { WorkoutCard } from '../components/WorkoutCard';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { ICONS } from '../constants';
import { Button } from '../components/Button';
import { useUser } from '../context/UserContext';
import { ShopProduct } from '../types';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
  showCelebration?: boolean;
  onCelebrationComplete?: () => void;
}

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const DAILY_KEYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Inline Logo Component
const CoreKayaLogo = () => (
  <div>
    <h1 className="font-serif text-2xl text-navy leading-none">CoreKaya</h1>
    <p className="text-[10px] font-bold text-orange tracking-widest uppercase">Pilates Labs</p>
  </div>
);

// Achievement Overlay Component
const CelebrationOverlay: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { userState } = useUser();
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 animate-[fadeIn_0.5s_ease-out]">
      <div className="relative w-full max-w-sm p-8 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-6xl mb-4 animate-[bounce_1s_infinite]">🔥</div>
          <h2 className="font-serif text-3xl text-white mb-2 animate-[slideUp_0.5s_ease-out]">Workout Complete!</h2>
          <p className="text-gray-300 mb-6 animate-[slideUp_0.7s_ease-out]">You're on fire! Keep the momentum going.</p>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 w-full mb-8 border border-white/20 animate-[scaleIn_0.5s_ease-out_0.3s_both]">
             <p className="text-xs text-orange font-bold uppercase tracking-widest mb-1">Current Streak</p>
             <div className="flex justify-center items-baseline gap-2">
                <span className="text-4xl font-serif text-white">{userState.streak}</span>
                <span className="text-sm text-gray-400">days</span>
             </div>
          </div>
          <Button variant="primary" size="lg" onClick={onClose} className="animate-[fadeIn_1s_ease-out_0.8s_both]">Continue</Button>
        </div>
      </div>
    </div>
  );
};

export const Home: React.FC<HomeProps> = ({ onNavigate, showCelebration, onCelebrationComplete }) => {
  const { userState } = useUser();
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);
  
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  // Hydrate lists
  // Reverse the list to show most recently added favorites first
  const favoriteWorkoutsList = [...userState.favorites]
    .reverse()
    .map(id => getWorkoutById(id))
    .filter(Boolean);
    
  const wishlistProductsList = userState.wishlist.map(id => shopProducts.find(p => p.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-sand pb-24">
      {/* Celebration Overlay */}
      {showCelebration && onCelebrationComplete && (
        <CelebrationOverlay onClose={onCelebrationComplete} />
      )}

      {/* Header */}
      <header className="px-6 pt-12 pb-4 flex justify-between items-center bg-white sticky top-0 z-40 shadow-sm">
        <CoreKayaLogo />
        <div className={`flex items-center gap-2 bg-sand-dark px-3 py-1.5 rounded-full transition-transform duration-500 ${showCelebration ? 'scale-110 bg-orange/20' : ''}`}>
          <span className="text-sm">{ICONS.FIRE}</span>
          <span className="text-sm font-bold text-navy-dark">{userState.streak} Day Streak</span>
        </div>
      </header>

      {/* 1. WEEKLY DROP SECTION (The "Dashboard") */}
      <section className="mt-6">
        <div className="px-6 flex justify-between items-baseline mb-4">
          <h2 className="font-serif text-xl text-charcoal">Weekly Drop</h2>
          <span className="text-xs text-gray-500 font-medium">Week of {currentSchedule.startDate}</span>
        </div>

        {/* Calendar Strip */}
        <div className="flex justify-between px-4 mb-6 overflow-x-auto no-scrollbar">
          {DAYS.map((day, idx) => {
            const isToday = idx === todayIndex;
            const isDone = idx < todayIndex;
            return (
              <div key={day} className="flex flex-col items-center min-w-[48px]">
                <span className="text-[10px] font-bold text-gray-400 mb-2">{day}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all 
                  ${isToday ? 'bg-navy text-white border-navy shadow-lg scale-110' : 
                    isDone ? 'bg-navy-light/20 text-navy border-transparent' : 'bg-white border-gray-200 text-gray-400'}`}>
                  {isDone ? '✓' : idx + 14} 
                </div>
              </div>
            );
          })}
        </div>

        {/* Today's Recommended Workout */}
        <div className="px-6">
          <div className="mb-2 text-sm font-medium text-navy-dark">TODAY'S PRESCRIPTION</div>
          {(() => {
             const todayKey = DAILY_KEYS[todayIndex] as keyof typeof currentSchedule.dailyMap;
             const workoutId = currentSchedule.dailyMap[todayKey];
             const workout = getWorkoutById(workoutId);
             if (workout) {
               return <WorkoutCard workout={workout} onClick={() => onNavigate('player', { workoutId })} featured />;
             }
             return null;
          })()}
        </div>
        
        <div className="px-6 mt-4">
            <Button variant="outline" fullWidth size="sm" className="gap-2">
                {ICONS.CALENDAR} Add Schedule to Calendar
            </Button>
        </div>
      </section>

      {/* 2. YOUR WISHLIST (Products) */}
      {wishlistProductsList.length > 0 && (
        <section className="mt-10 pl-6 animate-[fadeIn_0.5s_ease-out]">
          <h2 className="font-serif text-xl text-charcoal mb-4 flex items-center gap-2">
             Your Wishlist <span className="text-sm text-gray-400 font-sans">({wishlistProductsList.length})</span>
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar pr-6">
            {wishlistProductsList.map(product => (
               <div key={product!.id} className="min-w-[180px] w-[180px]">
                  <ProductCard product={product!} onOpen={setSelectedProduct} />
               </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. YOUR FAVORITE CLASSES (Workouts) */}
      {favoriteWorkoutsList.length > 0 && (
        <section className="mt-8 pl-6 animate-[fadeIn_0.5s_ease-out]">
          <h2 className="font-serif text-xl text-charcoal mb-4 flex items-center gap-2">
            Your Favorite Classes <span className="text-sm text-gray-400 font-sans">({favoriteWorkoutsList.length})</span>
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-8 no-scrollbar pr-6">
            {favoriteWorkoutsList.map(w => (
              <WorkoutCard key={w!.id} workout={w!} onClick={() => onNavigate('player', { workoutId: w!.id })} />
            ))}
          </div>
        </section>
      )}

      {/* Product Modal for Wishlist Items */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};
