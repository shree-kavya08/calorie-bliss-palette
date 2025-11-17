import { Minus, Plus } from 'lucide-react';
import { Dish } from '@/data/dishes';
import { Button } from '@/components/ui/button';

interface DishCardProps {
  dish: Dish;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onCardClick: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, quantity, onIncrement, onDecrement, onCardClick }) => {
  const isSelected = quantity > 0;

  return (
    <div
      onClick={onCardClick}
      className={`relative glass-card rounded-2xl overflow-hidden smooth-transition hover:scale-105 cursor-pointer ${
        isSelected ? 'ring-4 ring-primary shadow-glow' : 'hover:shadow-soft'
      }`}
    >
      {isSelected && (
        <div className="absolute top-3 right-3 z-10 min-w-[2rem] h-8 px-2 rounded-full gradient-warm flex items-center justify-center shadow-soft animate-scale-in">
          <span className="text-white font-bold text-sm">{quantity}</span>
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
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted-foreground text-sm">{dish.calories} kcal</span>
          <span className="text-xs text-muted-foreground">per serving</span>
        </div>
        
        {dish.allergens.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {dish.allergens.slice(0, 3).map((allergen, index) => (
              <span
                key={index}
                className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200"
              >
                {allergen}
              </span>
            ))}
          </div>
        )}

        {!isSelected ? (
          <Button
            onClick={onIncrement}
            className="w-full h-10 rounded-xl gradient-purple text-white hover:scale-105 smooth-transition"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add to Selection
          </Button>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onDecrement();
              }}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-xl border-border/50 hover:bg-muted"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <div className="flex-1 text-center">
              <p className="text-sm text-muted-foreground">Quantity</p>
              <p className="text-2xl font-bold gradient-warm bg-clip-text text-transparent">{quantity}</p>
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onIncrement();
              }}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-xl border-primary/50 hover:bg-primary/10"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishCard;
