
import { Workout, ShopProduct, LabCategory, Difficulty, WeeklySchedule, ShopCategory, Recipe } from '../types';

export const workouts: Workout[] = [
  {
    id: 'w1',
    title: 'Morning Flow & Glow',
    instructor: 'Elara Vance',
    durationMin: 25,
    category: LabCategory.MAT,
    difficulty: Difficulty.BEGINNER,
    equipment: ['Yoga Mat'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    description: 'A gentle awakening flow to open the hips and spine.',
    tags: ['Morning', 'Flexibility']
  },
  {
    id: 'w2',
    title: 'Power Reformer Sculpt',
    instructor: 'Davina S.',
    durationMin: 45,
    category: LabCategory.REFORMER,
    difficulty: Difficulty.ADVANCED,
    equipment: ['Reformer', 'Box'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    description: 'High intensity sculpting session targeting deep core muscles.',
    tags: ['Strength', 'Cardio']
  },
  {
    id: 'w3',
    title: 'Magic Circle Madness',
    instructor: 'Leo K.',
    durationMin: 30,
    category: LabCategory.MAT,
    difficulty: Difficulty.INTERMEDIATE,
    equipment: ['Magic Circle'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    description: 'Burn out your inner thighs and arms with the circle.',
    tags: ['Toning', 'Prop-based']
  },
  {
    id: 'w4',
    title: 'Spine Corrector Arc',
    instructor: 'Elara Vance',
    durationMin: 20,
    category: LabCategory.SPINE_CORRECTOR,
    difficulty: Difficulty.INTERMEDIATE,
    equipment: ['Spine Corrector'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800',
    description: 'Extension and rotation for a healthy spine.',
    tags: ['Mobility']
  },
  {
    id: 'w5',
    title: 'Jumpboard Cardio',
    instructor: 'Davina S.',
    durationMin: 35,
    category: LabCategory.REFORMER,
    difficulty: Difficulty.ADVANCED,
    equipment: ['Reformer', 'Jumpboard'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    description: 'Get your heart rate up with this low-impact cardio session.',
    tags: ['Cardio', 'Plyometrics']
  },
  {
    id: 'w6',
    title: 'Wunda Chair Balance',
    instructor: 'Leo K.',
    durationMin: 40,
    category: LabCategory.WUNDA_CHAIR,
    difficulty: Difficulty.ADVANCED,
    equipment: ['Wunda Chair'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1517963879466-dbbcd8ebb482?auto=format&fit=crop&q=80&w=800',
    description: 'Challenging balance and stability on the chair.',
    tags: ['Stability', 'Legs']
  },
  {
    id: 'w7',
    title: 'Cadillac Trapeze Flow',
    instructor: 'Davina S.',
    durationMin: 55,
    category: LabCategory.CADILLAC,
    difficulty: Difficulty.ADVANCED,
    equipment: ['Cadillac'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=800',
    description: 'Full body suspension and articulation using the Trapeze Table.',
    tags: ['Suspension', 'Advanced']
  },
  {
    id: 'w8',
    title: 'Ladder Barrel Extension',
    instructor: 'Elara Vance',
    durationMin: 30,
    category: LabCategory.LADDER_BARREL,
    difficulty: Difficulty.INTERMEDIATE,
    equipment: ['Ladder Barrel'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?auto=format&fit=crop&q=80&w=800',
    description: 'Deep stretching and back extension work.',
    tags: ['Flexibility', 'Spine']
  },
  {
    id: 'w9',
    title: 'Tower Power',
    instructor: 'Leo K.',
    durationMin: 45,
    category: LabCategory.REFORMER_TRAPEZE,
    difficulty: Difficulty.INTERMEDIATE,
    equipment: ['Reformer Tower'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1593810450967-a9a2a7e84452?auto=format&fit=crop&q=80&w=800',
    description: 'Using the tower springs for resistance and assistance.',
    tags: ['Springs', 'Full Body']
  }
];

export const shopProducts: ShopProduct[] = [
  // Large Equipment
  { 
    id: 'p1', 
    name: 'C-FLEX Foldable Reformer', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1616259063717-38448ebf5624?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 130,000',
    description: 'Studio performance. Zero compromise on space. Vertical fold, ultra-smooth carriage, adjustable spring resistance.'
  },
  { 
    id: 'p2', 
    name: 'CUX Reformer in Maple Wood', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 140,000',
    description: 'Classic craftsmanship for studios that mean business. Premium maple wood frame, studio-grade aluminium rails.'
  },
  { 
    id: 'p3', 
    name: 'BHX Reformer in Metal', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1593810450967-a9a2a7e84452?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 140,000',
    description: 'Professional grade. Studio ready. Priced to scale. Robust powder-coated metal frame.'
  },
  { 
    id: 'p4', 
    name: 'CX3-Pro Reformer with Movable Foot Bar', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1517963879466-dbbcd8ebb482?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 250,000',
    description: 'The pro\'s reformer. Built for every body, every session. Movable foot bar, commercial-grade powder-coated metal frame.'
  },
  { 
    id: 'p5', 
    name: 'CUX Reformer with Tower in Maple Wood', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1598454443453-6119859f5156?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 180,000',
    description: 'All-in-one maple reformer and tower — double the training. Integrated half Cadillac tower system.'
  },
  { 
    id: 'p6', 
    name: 'BHX Reformer with Tower in Metal', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1586211124239-25d2595f923d?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 180,000',
    description: 'Robust metal reformer upgraded with functional tower. Integrated half Cadillac tower.'
  },
  { 
    id: 'p7', 
    name: 'CX3-Pro Reformer with Tower in Metal', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 250,000',
    description: 'Premium CX3-Pro performance meets tower versatility. CX3-Pro commercial-grade metal frame, integrated half Cadillac tower system.'
  },
  { 
    id: 'p8', 
    name: 'CX3-Pro Reformer with Cadillac Tower in Metal', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1596739266184-db721cb21528?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 340,000',
    description: 'The ultimate Pilates system. Professional. Complete. Full Cadillac frame with complete trapeze system.'
  },
  { 
    id: 'p9', 
    name: 'CUX Reformer with Cadillac Tower in Maple Wood', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 340,000',
    description: 'Maple craftsmanship meets full Cadillac power. Full Cadillac tower with complete trapeze system.'
  },
  { 
    id: 'p10', 
    name: 'Wooden Wunda Chair', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 80,000',
    description: 'Maximum conditioning. Minimum footprint. Solid wooden construction, split pedal design.'
  },
  { 
    id: 'p11', 
    name: 'Wooden Ladder Barrel', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 70,000',
    description: 'The spine\'s best ally. Flexibility, posture, and power. High-quality hardwood construction.'
  },
  { 
    id: 'p12', 
    name: 'Wooden Spine Corrector', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1627483297929-37f416fec7cd?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 22,000',
    description: 'Posture. Breathing. Core. In one ergonomic curve. Ergonomic curved design follows the natural spine.'
  },
  { 
    id: 'p13', 
    name: 'Wooden Swedish Ladder', 
    category: ShopCategory.LARGE_EQUIPMENT, 
    imageUrl: 'https://images.unsplash.com/photo-1552674605-5d2268744b1d?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 18,000',
    description: 'Go vertical. Build strength without taking floor space. Solid hardwood wall-mounted construction.'
  },

  // Accessories
  { 
    id: 'p14', 
    name: 'Pilates Box', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 8,500',
    description: 'Expand your reformer exercise range instantly. Padded surface for comfort.'
  },
  { 
    id: 'p15', 
    name: 'Pilates Arc', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 6,500',
    description: 'Spine support, stretch, and core activation. Dual-use: reformer or floor.'
  },
  { 
    id: 'p16', 
    name: 'Reformer Jump Board', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 9,000',
    description: 'Bring cardio and plyometric power to Pilates. Low-impact cardio training.'
  },
  { 
    id: 'p17', 
    name: 'Reformer Mat Converter', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 7,000',
    description: 'Transform the reformer into an elevated mat platform. Converts to mat platform.'
  },
  { 
    id: 'p18', 
    name: 'Reformer Neck Support', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1627483298606-25f00e957597?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 1,800',
    description: 'Ergonomic cervical alignment for every session. Cervical alignment support.'
  },
  { 
    id: 'p19', 
    name: 'Reformer Foot Strap (Pair)', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1589134767222-383794b15093?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 2,200',
    description: 'Secure footing for precision footwork. Adjustable for all feet.'
  },
  { 
    id: 'p20', 
    name: 'Reformer 5 Spring Set', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 7,500',
    description: 'Dial in your resistance with precision. 5 calibrated springs.'
  },
  { 
    id: 'p21', 
    name: 'Noise-Free Double Loop Straps (Pair)', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 2,800',
    description: 'Silent straps for a distraction-free practice. Silent operation.'
  },
  { 
    id: 'p22', 
    name: 'Carriage Protector Mat — Anti-Slip', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1596739266184-db721cb21528?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 2,000',
    description: 'Protect your reformer. Enhance your grip. Non-slip surface.'
  },
  { 
    id: 'p23', 
    name: 'Reformer Floor Protector Mat (2.5mm)', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 1,800',
    description: 'Shield your floors. Stabilise your reformer. 2.5mm slim profile.'
  },
  { 
    id: 'p24', 
    name: 'Ladder Barrel Floor Mat', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 3,500',
    description: 'Protect floors and stabilise your Ladder Barrel. Purpose-sized fit.'
  },
  { 
    id: 'p25', 
    name: 'Wunda Chair Floor Mat', 
    category: ShopCategory.ACCESSORIES, 
    imageUrl: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 2,500',
    description: 'Non-slip protection for the Wunda Chair. Purpose-sized fit.'
  },

  // Small Props
  { 
    id: 'p26', 
    name: 'Pilates Maple Stick', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1627483298606-25f00e957597?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'From Rs. 1,200',
    description: 'Premium maple wood dowel for alignment, balance and resistance.'
  },
  { 
    id: 'p27', 
    name: 'Pilates Metal Stick', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'From Rs. 1,000',
    description: 'Weighted metal training stick for consistent resistance.'
  },
  { 
    id: 'p28', 
    name: 'Pilates Mat (10mm)', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 2,200',
    description: '10mm cushioning, non-slip surface, full-length 30x72"'
  },
  { 
    id: 'p29', 
    name: 'Pilates Block', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'Rs. 800',
    description: '3 usable height options. Firm high-density foam for stability.'
  },
  { 
    id: 'p30', 
    name: 'Pilates Ring (Magic Circle)', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'From Rs. 1,400',
    description: 'Flexible steel core with foam-padded grips. Isometric resistance.'
  },
  { 
    id: 'p31', 
    name: 'Pilates Ball', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'From Rs. 600',
    description: 'Soft PVC inflatable. Core activation, spinal support.'
  },
  { 
    id: 'p32', 
    name: 'Pilates Resistance Band', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'From Rs. 500',
    description: 'Natural latex. Progressive resistance levels for full-body.'
  },
  { 
    id: 'p33', 
    name: 'Pilates Soft Ball Pair', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'From Rs. 900',
    description: 'Soft PVC with sand fill. Gentle weighted resistance.'
  },
  { 
    id: 'p34', 
    name: 'Pilates Weight Bracelet', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1598454443453-6119859f5156?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'From Rs. 700',
    description: 'Neoprene wrist strap. Hands-free resistance for upper body.'
  },
  { 
    id: 'p35', 
    name: 'Pilates Foot Weight', 
    category: ShopCategory.SMALL_PROPS, 
    imageUrl: 'https://images.unsplash.com/photo-1588286840104-4bd39815d0bf?auto=format&fit=crop&q=80&w=600', 
    affiliateUrl: '#', 
    priceDisplay: 'From Rs. 1,200',
    description: 'Neoprene ankle strap. Targeted lower body resistance.'
  },

  // Bundles
  {
    id: 'b1',
    name: 'The Home Starter Bundle',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 8,150',
    description: 'Start your Pilates journey. Everything you need, nothing you don\'t. Includes Mat, Ring, Ball, Resistance Bands, Block, Maple Stick.'
  },
  {
    id: 'b2',
    name: 'The Home Reformer Bundle',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1616259063717-38448ebf5624?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 165,100',
    description: 'Your home. Your studio. Your reformer. Includes C-FLEX Foldable Reformer, Box, Mat Converter, Jump Board, Neck Support, Straps, Mats.'
  },
  {
    id: 'b3',
    name: 'The Home Wellness Bundle',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1598454443453-6119859f5156?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 33,650',
    description: 'Posture. Spine. Core. Breathe better. Move better. Includes Wooden Spine Corrector, Pilates Arc, Mat, Ball, Band, Block, Soft Balls.'
  },
  {
    id: 'b4',
    name: 'The Boutique Starter Studio',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1593810450967-a9a2a7e84452?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 446,600',
    description: 'Open your studio today. Start teaching from day one. Includes 2x BHX Reformers, Wunda Chair, Spine Corrector, and accessories.'
  },
  {
    id: 'b5',
    name: 'The Premium Boutique Studio',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 1,072,300',
    description: 'The studio your clients will talk about. And return to. Includes 2x CX3-Pro Reformers, 2x CUX Reformers, Ladder Barrel, Wunda Chair, and accessories.'
  },
  {
    id: 'b6',
    name: 'The Reformer Class Studio',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 1,050,600',
    description: 'Built for group reformer. Built for growth. Includes 6x BHX Reformers and accessories.'
  },
  {
    id: 'b7',
    name: 'The Physio Clinic Starter',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1586211124239-25d2595f923d?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 298,200',
    description: 'Evidence-based Pilates rehabilitation. From day one. Includes BHX Reformer with Tower, Wunda Chair, Spine Corrector, Arc, and accessories.'
  },
  {
    id: 'b8',
    name: 'The Advanced Rehab Studio',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 533,250',
    description: 'The full clinical Pilates system. Serious outcomes. Includes CUX Reformer with Cadillac Tower, Wunda Chair, Ladder Barrel, Spine Corrector, and accessories.'
  },
  {
    id: 'b9',
    name: 'The Instructor Training Studio',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1596739266184-db721cb21528?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 831,400',
    description: 'Train the next generation of Pilates professionals. Includes CX3-Pro Reformer with Cadillac Tower, CUX Reformer, Trapeze Cadillac Table, Wunda Chair, Ladder Barrel, Spine Corrector, and accessories.'
  },
  {
    id: 'b10',
    name: 'The Classical Apparatus Collection',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1517963879466-dbbcd8ebb482?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 711,200',
    description: 'Own every piece of classical Pilates apparatus. Includes CUX Reformer with Cadillac Tower, Trapeze Cadillac Table, Wunda Chair, Ladder Barrel, Spine Corrector, Swedish Ladder, and accessories.'
  },
  {
    id: 'b11',
    name: 'The Office Wellness Station',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1552674605-5d2268744b1d?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 62,000',
    description: 'Bring Pilates to the workplace. Healthier teams. Includes Spine Corrector, Arc, Bands, Balls, Blocks, Mats, Rings.'
  },
  {
    id: 'b12',
    name: 'The Corporate Pilates Studio',
    category: ShopCategory.BUNDLES,
    imageUrl: 'https://images.unsplash.com/photo-1593810450967-a9a2a7e84452?auto=format&fit=crop&q=80&w=600',
    affiliateUrl: '#',
    priceDisplay: 'Rs. 503,400',
    description: 'A dedicated Pilates room. The ultimate wellness perk. Includes 2x BHX Reformer with Tower, Wunda Chair, Spine Corrector, Arc, and accessories.'
  }
];

export const recipes: Recipe[] = [
  {
    id: 'r1',
    title: 'Post-Pilates Protein Smoothie',
    category: 'Recovery',
    imageUrl: 'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=600',
    timeMin: 5,
    calories: 320
  },
  {
    id: 'r2',
    title: 'Quinoa & Avocado Bowl',
    category: 'Lunch',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    timeMin: 15,
    calories: 450
  },
  {
    id: 'r3',
    title: 'Matcha Energy Bites',
    category: 'Snack',
    imageUrl: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=600',
    timeMin: 20,
    calories: 120
  },
  {
    id: 'r4',
    title: 'Grilled Salmon with Asparagus',
    category: 'Dinner',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&q=80&w=600',
    timeMin: 25,
    calories: 550
  }
];

export const currentSchedule: WeeklySchedule = {
  weekId: 'wk_2025_42',
  startDate: 'Oct 14',
  dailyMap: {
    mon: 'w1',
    tue: 'w2',
    wed: 'w3',
    thu: 'w4',
    fri: 'w5',
    sat: 'w2',
    sun: 'w1'
  }
};

export const getWorkoutById = (id: string) => workouts.find(w => w.id === id);
