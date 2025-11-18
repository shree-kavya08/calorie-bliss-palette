import { Badge } from '@/components/ui/badge';
import { Flame } from 'lucide-react';

interface SpiceLevelBadgeProps {
  level: 'mild' | 'medium' | 'hot' | 'extra-hot';
  size?: 'sm' | 'md';
}

const SpiceLevelBadge = ({ level, size = 'sm' }: SpiceLevelBadgeProps) => {
  const getSpiceConfig = () => {
    switch (level) {
      case 'mild':
        return { label: 'Mild', flames: 1, color: 'bg-secondary/20 text-secondary-foreground border-secondary' };
      case 'medium':
        return { label: 'Medium', flames: 2, color: 'bg-primary/20 text-primary-foreground border-primary' };
      case 'hot':
        return { label: 'Hot', flames: 3, color: 'bg-destructive/20 text-destructive border-destructive' };
      case 'extra-hot':
        return { label: 'Extra Hot', flames: 4, color: 'bg-destructive/30 text-destructive border-destructive' };
    }
  };

  const config = getSpiceConfig();
  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <Badge variant="outline" className={`${config.color} ${textSize} flex items-center gap-1`}>
      {Array.from({ length: config.flames }).map((_, i) => (
        <Flame key={i} className={`${iconSize} fill-current`} />
      ))}
      {size === 'md' && <span>{config.label}</span>}
    </Badge>
  );
};

export default SpiceLevelBadge;
