import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DishCard from '@/components/DishCard';
import { dishes } from '@/data/dishes';
import { Search, LogOut, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const Menu = () => {
  const [selectedDishes, setSelectedDishes] = useState<Record<number, number>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const incrementDish = (dishId: number) => {
    setSelectedDishes((prev) => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1,
    }));
  };

  const decrementDish = (dishId: number) => {
    setSelectedDishes((prev) => {
      const newQuantity = (prev[dishId] || 0) - 1;
      if (newQuantity <= 0) {
        const { [dishId]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [dishId]: newQuantity,
      };
    });
  };

  const clearSelection = () => {
    setSelectedDishes({});
    toast.success('Selection cleared');
  };

  const uniqueDishesCount = Object.keys(selectedDishes).length;
  const totalItemsCount = Object.values(selectedDishes).reduce((sum, qty) => sum + qty, 0);
  const totalCalories = Object.entries(selectedDishes).reduce((total, [dishId, quantity]) => {
    const dish = dishes.find((d) => d.id === Number(dishId));
    return total + (dish?.calories || 0) * quantity;
  }, 0);

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen gradient-multi">
      {/* Header */}
      <header className="glass-card shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Calorie Compass</h1>
              <p className="text-sm text-muted-foreground">Welcome, {user?.email}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="rounded-xl border-border/50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Stats */}
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 rounded-2xl glass-card border-border/50 text-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-sm mb-1 text-black/60">Unique Dishes</p>
              <p className="text-3xl font-bold text-black">
                {uniqueDishesCount}
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-sm mb-1 text-black/60">Total Items</p>
              <p className="text-3xl font-bold text-black">
                {totalItemsCount}
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-sm mb-1 text-black/60">Total Calories</p>
              <p className="text-3xl font-bold text-black">
                {totalCalories} kcal
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Button
                onClick={clearSelection}
                disabled={uniqueDishesCount === 0}
                className="w-full h-12 rounded-xl bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-50"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Selection
              </Button>
            </div>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              quantity={selectedDishes[dish.id] || 0}
              onIncrement={() => incrementDish(dish.id)}
              onDecrement={() => decrementDish(dish.id)}
            />
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No dishes found matching "{searchQuery}"</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Menu;
