import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mealPlans, MealPlan } from '@/data/meal-plans';
import { dishes } from '@/data/dishes';
import { Calendar, Flame, ChefHat } from 'lucide-react';
import { toast } from 'sonner';

interface MealPlansModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (dishIds: number[]) => void;
}

const MealPlansModal = ({ isOpen, onClose, onSelectPlan }: MealPlansModalProps) => {
  const handleSelectPlan = (plan: MealPlan) => {
    onSelectPlan(plan.dishIds);
    toast.success(`${plan.name} meal plan selected!`);
    onClose();
  };

  const getCategoryColor = (category: MealPlan['category']) => {
    switch (category) {
      case 'weight-loss':
        return 'bg-secondary/20 text-secondary-foreground border-secondary';
      case 'high-protein':
        return 'bg-primary/20 text-primary-foreground border-primary';
      case 'vegetarian':
        return 'bg-accent/20 text-accent-foreground border-accent';
      case 'balanced':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Calendar className="w-6 h-6 text-primary" />
            Meal Plans
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {mealPlans.map((plan) => {
            const planDishes = dishes.filter((dish) => plan.dishIds.includes(dish.id));
            
            return (
              <div key={plan.id} className="glass-card rounded-xl p-5 space-y-3 hover:shadow-glow smooth-transition">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  </div>
                  <Badge className={getCategoryColor(plan.category)} variant="outline">
                    {plan.category.replace('-', ' ')}
                  </Badge>
                </div>

                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    {plan.totalCalories} kcal total
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ChefHat className="w-4 h-4" />
                    <span>Includes {planDishes.length} dishes:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {planDishes.map((dish) => (
                      <Badge key={dish.id} variant="secondary" className="text-xs">
                        {dish.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => handleSelectPlan(plan)}
                  className="w-full rounded-lg gradient-cool text-white hover:scale-105 smooth-transition"
                >
                  Select This Plan
                </Button>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MealPlansModal;
