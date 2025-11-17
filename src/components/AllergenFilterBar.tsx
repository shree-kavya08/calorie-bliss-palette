import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { allergensList } from '@/data/dishes';
import { X } from 'lucide-react';

interface AllergenFilterBarProps {
  selectedAllergens: string[];
  onToggleAllergen: (allergen: string) => void;
  onClearFilters: () => void;
}

const allergenIcons: Record<string, string> = {
  Dairy: '🥛',
  Nuts: '🥜',
  Gluten: '🌾',
  Egg: '🥚',
  Soy: '🫘'
};

const AllergenFilterBar: React.FC<AllergenFilterBarProps> = ({
  selectedAllergens,
  onToggleAllergen,
  onClearFilters
}) => {
  return (
    <div className="glass-card rounded-2xl p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-black/70">Filter by Allergens</h3>
        {selectedAllergens.length > 0 && (
          <Button
            onClick={onClearFilters}
            variant="ghost"
            size="sm"
            className="h-8 text-xs text-black/60 hover:text-black"
          >
            <X className="w-3 h-3 mr-1" />
            Clear All
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {allergensList.map((allergen) => {
          const isSelected = selectedAllergens.includes(allergen);
          return (
            <Badge
              key={allergen}
              onClick={() => onToggleAllergen(allergen)}
              className={`cursor-pointer px-4 py-2 text-sm smooth-transition ${
                isSelected
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-muted text-foreground hover:bg-muted/80 border border-border/30'
              }`}
            >
              <span className="mr-1">{allergenIcons[allergen]}</span>
              {allergen}
            </Badge>
          );
        })}
      </div>
      {selectedAllergens.length > 0 && (
        <p className="text-xs text-black/50 mt-3">
          Showing dishes without: {selectedAllergens.join(', ')}
        </p>
      )}
    </div>
  );
};

export default AllergenFilterBar;
