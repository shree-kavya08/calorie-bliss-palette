import { Check } from 'lucide-react';
import { Dish } from '@/data/dishes';

interface DishCardProps {
  dish: Dish;
  isSelected: boolean;
  onToggle: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, isSelected, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`relative glass-card rounded-2xl overflow-hidden cursor-pointer smooth-transition hover:scale-105 ${
        isSelected ? 'ring-4 ring-primary shadow-glow' : 'hover:shadow-soft'
      }`}
    >
      {isSelected && (
        <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full gradient-warm flex items-center justify-center shadow-soft animate-scale-in">
          <Check className="w-5 h-5 text-white" />
        </div>
      )}
      
      <div className="aspect-square overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className={`w-full h-full object-cover smooth-transition ${
            isSelected ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-1">{dish.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">{dish.calories} kcal</span>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
            isSelected ? 'gradient-warm text-white' : 'bg-muted text-muted-foreground'
          }`}>
            {isSelected ? 'Selected' : 'Select'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
