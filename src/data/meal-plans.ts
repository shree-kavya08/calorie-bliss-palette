import { Dish } from './dishes';

export interface MealPlan {
  id: number;
  name: string;
  description: string;
  totalCalories: number;
  dishIds: number[];
  category: 'weight-loss' | 'balanced' | 'high-protein' | 'vegetarian';
}

export const mealPlans: MealPlan[] = [
  {
    id: 1,
    name: 'Light & Healthy',
    description: 'Perfect for weight management with balanced nutrition',
    totalCalories: 1200,
    dishIds: [4, 7, 17, 30], // Masala Dosa, Palak Paneer, Pani Puri, Idli
    category: 'weight-loss',
  },
  {
    id: 2,
    name: 'High Protein Powerhouse',
    description: 'Protein-rich meals for muscle building and recovery',
    totalCalories: 1800,
    dishIds: [1, 8, 3, 11], // Butter Chicken, Tandoori Chicken, Biryani, Dal Tadka
    category: 'high-protein',
  },
  {
    id: 3,
    name: 'Vegetarian Delight',
    description: 'Complete vegetarian nutrition for the day',
    totalCalories: 1500,
    dishIds: [2, 7, 4, 11, 6], // Paneer Tikka, Palak Paneer, Masala Dosa, Dal Tadka, Samosa
    category: 'vegetarian',
  },
  {
    id: 4,
    name: 'Balanced Indian Feast',
    description: 'Well-rounded Indian meal plan with all nutrients',
    totalCalories: 2000,
    dishIds: [1, 3, 12, 15, 22], // Butter Chicken, Biryani, Naan, Raita, Gulab Jamun
    category: 'balanced',
  },
  {
    id: 5,
    name: 'Street Food Special',
    description: 'Enjoy your favorite street foods guilt-free',
    totalCalories: 1400,
    dishIds: [6, 17, 5, 18], // Samosa, Pani Puri, Chole Bhature, Aloo Tikki
    category: 'balanced',
  },
  {
    id: 6,
    name: 'South Indian Classic',
    description: 'Traditional South Indian flavors for the day',
    totalCalories: 1300,
    dishIds: [4, 30, 9, 20], // Masala Dosa, Idli, Vada, Uttapam
    category: 'vegetarian',
  },
];
