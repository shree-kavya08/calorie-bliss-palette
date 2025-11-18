import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Target, TrendingDown, TrendingUp } from 'lucide-react';

interface CalorieBudgetTrackerProps {
  budget: number;
  consumed: number;
  onBudgetChange: (budget: number) => void;
}

const CalorieBudgetTracker = ({ budget, consumed, onBudgetChange }: CalorieBudgetTrackerProps) => {
  const remaining = budget - consumed;
  const percentage = budget > 0 ? Math.min((consumed / budget) * 100, 100) : 0;
  const isOverBudget = consumed > budget;

  return (
    <div className="glass-card rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Daily Calorie Budget</h3>
        </div>
        <div className="flex items-center gap-2 w-32">
          <Input
            type="number"
            value={budget}
            onChange={(e) => onBudgetChange(Number(e.target.value))}
            className="h-8 text-sm rounded-lg"
            min="0"
          />
          <span className="text-xs text-muted-foreground">kcal</span>
        </div>
      </div>

      <div className="space-y-2">
        <Progress value={percentage} className="h-3" />
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            {isOverBudget ? (
              <TrendingUp className="w-4 h-4 text-destructive" />
            ) : (
              <TrendingDown className="w-4 h-4 text-secondary" />
            )}
            <span className={isOverBudget ? 'text-destructive font-semibold' : 'text-secondary font-semibold'}>
              {Math.abs(remaining)} kcal {isOverBudget ? 'over' : 'remaining'}
            </span>
          </div>
          <span className="text-muted-foreground">
            {consumed} / {budget} kcal
          </span>
        </div>
      </div>

      {isOverBudget && (
        <div className="text-xs text-destructive bg-destructive/10 rounded-lg p-2">
          You've exceeded your daily calorie budget. Consider adjusting your selections.
        </div>
      )}
    </div>
  );
};

export default CalorieBudgetTracker;
