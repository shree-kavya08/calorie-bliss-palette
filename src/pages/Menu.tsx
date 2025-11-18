import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DishCard from '@/components/DishCard';
import DishDetailsModal from '@/components/DishDetailsModal';
import AllergenFilterBar from '@/components/AllergenFilterBar';
import CalorieBudgetTracker from '@/components/CalorieBudgetTracker';
import MealPlansModal from '@/components/MealPlansModal';
import { dishes, Dish } from '@/data/dishes';
import { Search, LogOut, Trash2, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const Menu = () => {
  const [selectedDishes, setSelectedDishes] = useState<Record<number, number>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMealPlansOpen, setIsMealPlansOpen] = useState(false);
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [dailyBudget, setDailyBudget] = useState(2000);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('dailyCalorieBudget');
    if (saved) setDailyBudget(Number(saved));
  }, []);

  const handleBudgetChange = (budget: number) => {
    setDailyBudget(budget);
    localStorage.setItem('dailyCalorieBudget', budget.toString());
  };

  const handleSelectMealPlan = (dishIds: number[]) => {
    const newSelection: Record<number, number> = {};
    dishIds.forEach(id => { newSelection[id] = 1; });
    setSelectedDishes(newSelection);
  };

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

  const toggleAllergen = (allergen: string) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen)
        ? prev.filter((a) => a !== allergen)
        : [...prev, allergen]
    );
  };

  const clearAllergenFilters = () => {
    setSelectedAllergens([]);
  };

  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAllergens = selectedAllergens.length === 0 || 
      !selectedAllergens.some(allergen => dish.allergens.includes(allergen));
    return matchesSearch && matchesAllergens;
  });

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

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
          {/* Allergen Filter */}
          <AllergenFilterBar
            selectedAllergens={selectedAllergens}
            onToggleAllergen={toggleAllergen}
            onClearFilters={clearAllergenFilters}
          />

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

          <CalorieBudgetTracker
            budget={dailyBudget}
            consumed={totalCalories}
            onBudgetChange={handleBudgetChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-sm mb-1 text-black/60">Unique Dishes</p>
              <p className="text-3xl font-bold text-black">{uniqueDishesCount}</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-sm mb-1 text-black/60">Total Items</p>
              <p className="text-3xl font-bold text-black">{totalItemsCount}</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <p className="text-sm mb-1 text-black/60">Total Calories</p>
              <p className="text-3xl font-bold text-black">{totalCalories} kcal</p>
            </div>
            <div className="glass-card rounded-2xl p-6 flex gap-2">
              <Button onClick={() => setIsMealPlansOpen(true)} className="flex-1 h-12 rounded-xl gradient-purple text-white">
                <Calendar className="w-4 h-4 mr-2" />Meal Plans
              </Button>
              <Button onClick={clearSelection} disabled={uniqueDishesCount === 0} variant="outline" className="h-12 rounded-xl">
                <Trash2 className="w-4 h-4" />
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
              onCardClick={() => handleDishClick(dish)}
            />
          ))}
        </div>

        <DishDetailsModal dish={selectedDish} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <MealPlansModal isOpen={isMealPlansOpen} onClose={() => setIsMealPlansOpen(false)} onSelectPlan={handleSelectMealPlan} />

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
