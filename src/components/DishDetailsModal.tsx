import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Dish } from '@/data/dishes';
import { Badge } from '@/components/ui/badge';

interface DishDetailsModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
}

const DishDetailsModal: React.FC<DishDetailsModalProps> = ({ dish, isOpen, onClose }) => {
  if (!dish) return null;

  const macroPercentages = {
    protein: Math.round((dish.protein * 4 / dish.calories) * 100),
    carbs: Math.round((dish.carbs * 4 / dish.calories) * 100),
    fats: Math.round((dish.fats * 9 / dish.calories) * 100),
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto glass-card border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">{dish.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Dish Image */}
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Calories Summary */}
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-sm text-black/60 mb-1">Total Calories</p>
            <p className="text-4xl font-bold text-black">{dish.calories} kcal</p>
          </div>

          {/* Macronutrients Breakdown */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Nutritional Breakdown</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-sm text-black/60 mb-1">Protein</p>
                <p className="text-2xl font-bold gradient-cool bg-clip-text text-transparent">
                  {dish.protein}g
                </p>
                <p className="text-xs text-black/50 mt-1">{macroPercentages.protein}%</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-sm text-black/60 mb-1">Carbs</p>
                <p className="text-2xl font-bold gradient-warm bg-clip-text text-transparent">
                  {dish.carbs}g
                </p>
                <p className="text-xs text-black/50 mt-1">{macroPercentages.carbs}%</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-sm text-black/60 mb-1">Fats</p>
                <p className="text-2xl font-bold gradient-purple bg-clip-text text-transparent">
                  {dish.fats}g
                </p>
                <p className="text-xs text-black/50 mt-1">{macroPercentages.fats}%</p>
              </div>
            </div>
          </div>

          {/* Visual Macro Bar */}
          <div className="space-y-2">
            <div className="flex h-4 rounded-full overflow-hidden">
              <div
                className="gradient-cool"
                style={{ width: `${macroPercentages.protein}%` }}
              />
              <div
                className="gradient-warm"
                style={{ width: `${macroPercentages.carbs}%` }}
              />
              <div
                className="gradient-purple"
                style={{ width: `${macroPercentages.fats}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>🟦 Protein</span>
              <span>🟧 Carbs</span>
              <span>🟪 Fats</span>
            </div>
          </div>

          {/* Allergens */}
          {dish.allergens.length > 0 && (
            <div className="glass-card rounded-xl p-4 border-2 border-orange-200">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <span className="mr-2">⚠️</span>
                Contains Allergens
              </h3>
              <div className="flex flex-wrap gap-2">
                {dish.allergens.map((allergen, index) => (
                  <Badge
                    key={index}
                    className="px-3 py-1 rounded-xl bg-orange-100 text-orange-800 border border-orange-300"
                  >
                    {allergen}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ingredient, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 rounded-xl bg-muted text-foreground border border-border/30"
                >
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DishDetailsModal;
