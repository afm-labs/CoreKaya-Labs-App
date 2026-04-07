
export enum LabCategory {
  MAT = 'Mat Lab',
  REFORMER = 'Reformer Lab',
  REFORMER_TRAPEZE = 'Reformer Trapeze',
  CADILLAC = 'Cadillac Lab',
  WUNDA_CHAIR = 'Wunda Chair',
  LADDER_BARREL = 'Ladder Barrel',
  SPINE_CORRECTOR = 'Spine Corrector'
}

export enum Difficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface Workout {
  id: string;
  title: string;
  instructor: string;
  durationMin: number;
  category: LabCategory;
  difficulty: Difficulty;
  equipment: string[];
  thumbnailUrl: string;
  description: string;
  tags: string[];
}

export enum ShopCategory {
  LARGE_EQUIPMENT = 'Large Equipment',
  SMALL_PROPS = 'Small Props',
  ACCESSORIES = 'Accessories',
  BUNDLES = 'Bundles'
}

export interface ShopProduct {
  id: string;
  name: string;
  category: ShopCategory;
  imageUrl: string;
  affiliateUrl: string;
  priceDisplay: string;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  timeMin: number;
  calories: number;
}

export interface WeeklySchedule {
  weekId: string;
  startDate: string;
  dailyMap: {
    mon: string; // Workout ID
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
}

export interface UserState {
  streak: number;
  favorites: string[]; // Workout IDs
  wishlist: string[]; // Product IDs
  completedWorkouts: string[];
  isPremium: boolean;
}
