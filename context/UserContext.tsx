
import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserState } from '../types';
import { MOCK_USER } from '../constants';

interface UserContextType {
  userState: UserState;
  toggleFavoriteWorkout: (workoutId: string) => void;
  toggleWishlistProduct: (productId: string) => void;
  isWorkoutFavorite: (workoutId: string) => boolean;
  isProductInWishlist: (productId: string) => boolean;
  completeWorkout: (workoutId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userState, setUserState] = useState<UserState>(() => {
    // Load from local storage or fall back to mock
    const saved = localStorage.getItem('corekaya_user_state');
    return saved ? JSON.parse(saved) : { 
      ...MOCK_USER, 
      favorites: [], 
      wishlist: [],
      completedWorkouts: [] 
    };
  });

  useEffect(() => {
    localStorage.setItem('corekaya_user_state', JSON.stringify(userState));
  }, [userState]);

  const toggleFavoriteWorkout = (workoutId: string) => {
    setUserState(prev => {
      const isFav = prev.favorites.includes(workoutId);
      return {
        ...prev,
        favorites: isFav 
          ? prev.favorites.filter(id => id !== workoutId)
          : [...prev.favorites, workoutId]
      };
    });
  };

  const toggleWishlistProduct = (productId: string) => {
    setUserState(prev => {
      const isInWishlist = prev.wishlist.includes(productId);
      return {
        ...prev,
        wishlist: isInWishlist
          ? prev.wishlist.filter(id => id !== productId)
          : [...prev.wishlist, productId]
      };
    });
  };

  const completeWorkout = (workoutId: string) => {
     setUserState(prev => {
         // Increment streak if not already completed today (simplified logic)
         const newStreak = prev.streak + 1; 
         return {
             ...prev,
             streak: newStreak,
             completedWorkouts: [...prev.completedWorkouts, workoutId]
         }
     })
  };

  const isWorkoutFavorite = (workoutId: string) => userState.favorites.includes(workoutId);
  const isProductInWishlist = (productId: string) => userState.wishlist.includes(productId);

  return (
    <UserContext.Provider value={{ 
      userState, 
      toggleFavoriteWorkout, 
      toggleWishlistProduct,
      isWorkoutFavorite,
      isProductInWishlist,
      completeWorkout
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
