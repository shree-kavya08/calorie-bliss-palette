export interface Dish {
  id: number;
  name: string;
  calories: number;
  image: string;
  protein: number;
  carbs: number;
  fats: number;
  ingredients: string[];
  allergens: string[];
}

export const allergensList = ["Dairy", "Nuts", "Gluten", "Egg", "Soy"] as const;
export type Allergen = typeof allergensList[number];

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Butter Chicken",
    calories: 490,
    image: "/dish-1.jpg",
    protein: 28,
    carbs: 15,
    fats: 35,
    ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Spices", "Onions", "Garlic", "Ginger"],
    allergens: ["Dairy"]
  },
  {
    id: 2,
    name: "Paneer Tikka",
    calories: 280,
    image: "/dish-2.jpg",
    protein: 15,
    carbs: 12,
    fats: 18,
    ingredients: ["Paneer", "Yogurt", "Spices", "Bell Peppers", "Onions", "Lemon"],
    allergens: ["Dairy"]
  },
  {
    id: 3,
    name: "Biryani",
    calories: 520,
    image: "/dish-3.jpg",
    protein: 22,
    carbs: 65,
    fats: 18,
    ingredients: ["Basmati Rice", "Chicken/Mutton", "Yogurt", "Saffron", "Spices", "Fried Onions"],
    allergens: ["Dairy"]
  },
  {
    id: 4,
    name: "Masala Dosa",
    calories: 360,
    image: "/dish-4.jpg",
    protein: 8,
    carbs: 58,
    fats: 12,
    ingredients: ["Rice", "Lentils", "Potato", "Onions", "Mustard Seeds", "Curry Leaves"],
    allergens: []
  },
  {
    id: 5,
    name: "Chole Bhature",
    calories: 610,
    image: "/dish-5.jpg",
    protein: 18,
    carbs: 75,
    fats: 25,
    ingredients: ["Chickpeas", "Flour", "Tomatoes", "Onions", "Spices", "Yogurt"],
    allergens: ["Gluten", "Dairy"]
  },
  {
    id: 6,
    name: "Samosa",
    calories: 250,
    image: "/dish-6.jpg",
    protein: 6,
    carbs: 30,
    fats: 12,
    ingredients: ["Potato", "Peas", "Flour", "Spices", "Oil"],
    allergens: ["Gluten"]
  },
  {
    id: 7,
    name: "Palak Paneer",
    calories: 320,
    image: "/dish-7.jpg",
    protein: 16,
    carbs: 18,
    fats: 22,
    ingredients: ["Spinach", "Paneer", "Cream", "Onions", "Garlic", "Spices"],
    allergens: ["Dairy"]
  },
  {
    id: 8,
    name: "Tandoori Chicken",
    calories: 380,
    image: "/dish-8.jpg",
    protein: 42,
    carbs: 8,
    fats: 20,
    ingredients: ["Chicken", "Yogurt", "Tandoori Spices", "Lemon", "Ginger", "Garlic"],
    allergens: ["Dairy"]
  },
  {
    id: 9,
    name: "Aloo Paratha",
    calories: 410,
    image: "/dish-9.jpg",
    protein: 9,
    carbs: 52,
    fats: 18,
    ingredients: ["Wheat Flour", "Potato", "Spices", "Ghee", "Onions"],
    allergens: ["Gluten", "Dairy"]
  },
  {
    id: 10,
    name: "Dal Makhani",
    calories: 290,
    image: "/dish-10.jpg",
    protein: 14,
    carbs: 32,
    fats: 12,
    ingredients: ["Black Lentils", "Kidney Beans", "Butter", "Cream", "Tomatoes", "Spices"],
    allergens: ["Dairy"]
  },
  {
    id: 11,
    name: "Rogan Josh",
    calories: 470,
    image: "/dish-11.jpg",
    protein: 32,
    carbs: 12,
    fats: 32,
    ingredients: ["Mutton", "Yogurt", "Kashmiri Chili", "Spices", "Onions", "Garlic"],
    allergens: ["Dairy"]
  },
  {
    id: 12,
    name: "Idli Sambar",
    calories: 180,
    image: "/dish-12.jpg",
    protein: 6,
    carbs: 32,
    fats: 3,
    ingredients: ["Rice", "Lentils", "Vegetables", "Tamarind", "Spices", "Curry Leaves"],
    allergens: []
  },
  {
    id: 13,
    name: "Pav Bhaji",
    calories: 450,
    image: "/dish-13.jpg",
    protein: 10,
    carbs: 58,
    fats: 20,
    ingredients: ["Mixed Vegetables", "Butter", "Bread", "Tomatoes", "Onions", "Spices"],
    allergens: ["Gluten", "Dairy"]
  },
  {
    id: 14,
    name: "Chicken Tikka",
    calories: 340,
    image: "/dish-14.jpg",
    protein: 38,
    carbs: 6,
    fats: 18,
    ingredients: ["Chicken", "Yogurt", "Spices", "Lemon", "Ginger", "Garlic"],
    allergens: ["Dairy"]
  },
  {
    id: 15,
    name: "Vada Pav",
    calories: 310,
    image: "/dish-15.jpg",
    protein: 8,
    carbs: 42,
    fats: 12,
    ingredients: ["Potato", "Bread", "Gram Flour", "Green Chutney", "Spices"],
    allergens: ["Gluten"]
  },
  {
    id: 16,
    name: "Malai Kofta",
    calories: 420,
    image: "/dish-16.jpg",
    protein: 12,
    carbs: 28,
    fats: 30,
    ingredients: ["Paneer", "Potato", "Cream", "Tomatoes", "Cashews", "Spices"],
    allergens: ["Dairy", "Nuts"]
  },
  {
    id: 17,
    name: "Pani Puri",
    calories: 150,
    image: "/dish-17.jpg",
    protein: 4,
    carbs: 28,
    fats: 3,
    ingredients: ["Semolina", "Potato", "Chickpeas", "Tamarind Water", "Mint Water", "Spices"],
    allergens: ["Gluten"]
  },
  {
    id: 18,
    name: "Gulab Jamun",
    calories: 280,
    image: "/dish-18.jpg",
    protein: 5,
    carbs: 48,
    fats: 8,
    ingredients: ["Milk Powder", "Flour", "Sugar Syrup", "Cardamom", "Rose Water"],
    allergens: ["Dairy", "Gluten"]
  },
  {
    id: 19,
    name: "Chicken Korma",
    calories: 510,
    image: "/dish-19.jpg",
    protein: 28,
    carbs: 18,
    fats: 38,
    ingredients: ["Chicken", "Yogurt", "Cream", "Cashews", "Onions", "Spices"],
    allergens: ["Dairy", "Nuts"]
  },
  {
    id: 20,
    name: "Rajma Chawal",
    calories: 390,
    image: "/dish-20.jpg",
    protein: 16,
    carbs: 58,
    fats: 10,
    ingredients: ["Kidney Beans", "Rice", "Tomatoes", "Onions", "Ginger", "Garlic", "Spices"],
    allergens: []
  },
  {
    id: 21,
    name: "Dhokla",
    calories: 160,
    image: "/dish-21.jpg",
    protein: 5,
    carbs: 28,
    fats: 3,
    ingredients: ["Gram Flour", "Yogurt", "Semolina", "Mustard Seeds", "Curry Leaves", "Green Chilies"],
    allergens: ["Gluten"]
  },
  {
    id: 22,
    name: "Ras Malai",
    calories: 300,
    image: "/dish-22.jpg",
    protein: 8,
    carbs: 42,
    fats: 12,
    ingredients: ["Paneer", "Milk", "Sugar", "Saffron", "Cardamom", "Pistachios"],
    allergens: ["Dairy", "Nuts"]
  },
  {
    id: 23,
    name: "Pongal",
    calories: 230,
    image: "/dish-23.jpg",
    protein: 8,
    carbs: 38,
    fats: 6,
    ingredients: ["Rice", "Moong Dal", "Black Pepper", "Cumin", "Cashews", "Curry Leaves"],
    allergens: []
  },
  {
    id: 24,
    name: "Medu Vada",
    calories: 190,
    image: "/dish-24.jpg",
    protein: 7,
    carbs: 22,
    fats: 9,
    ingredients: ["Urad Dal", "Curry Leaves", "Ginger", "Green Chilies", "Black Pepper", "Oil"],
    allergens: []
  },
  {
    id: 25,
    name: "Pesarattu",
    calories: 210,
    image: "/dish-25.jpg",
    protein: 10,
    carbs: 32,
    fats: 5,
    ingredients: ["Green Gram", "Rice", "Ginger", "Onions", "Green Chilies", "Cumin"],
    allergens: []
  },
  {
    id: 26,
    name: "Bhel Puri",
    calories: 170,
    image: "/dish-26.jpg",
    protein: 5,
    carbs: 28,
    fats: 5,
    ingredients: ["Puffed Rice", "Sev", "Onions", "Tomatoes", "Tamarind Chutney", "Green Chutney"],
    allergens: ["Gluten"]
  },
  {
    id: 27,
    name: "Kadhi Pakora",
    calories: 350,
    image: "/dish-27.jpg",
    protein: 10,
    carbs: 38,
    fats: 18,
    ingredients: ["Yogurt", "Gram Flour", "Onions", "Spices", "Turmeric", "Mustard Seeds"],
    allergens: ["Dairy", "Gluten"]
  },
  {
    id: 28,
    name: "Fish Curry",
    calories: 400,
    image: "/dish-28.jpg",
    protein: 35,
    carbs: 12,
    fats: 25,
    ingredients: ["Fish", "Coconut", "Tomatoes", "Onions", "Curry Leaves", "Spices"],
    allergens: []
  },
  {
    id: 29,
    name: "Kheer",
    calories: 260,
    image: "/dish-29.jpg",
    protein: 7,
    carbs: 42,
    fats: 8,
    ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Saffron", "Almonds", "Pistachios"],
    allergens: ["Dairy", "Nuts"]
  },
  {
    id: 30,
    name: "Uttapam",
    calories: 240,
    image: "/dish-30.jpg",
    protein: 8,
    carbs: 38,
    fats: 6,
    ingredients: ["Rice", "Lentils", "Onions", "Tomatoes", "Green Chilies", "Curry Leaves"],
    allergens: []
  },
  {
    id: 31,
    name: "Baingan Bharta",
    calories: 270,
    image: "/dish-31.jpg",
    protein: 5,
    carbs: 22,
    fats: 18,
    ingredients: ["Eggplant", "Tomatoes", "Onions", "Ginger", "Garlic", "Spices"],
    allergens: []
  },
  {
    id: 32,
    name: "Aloo Gobi",
    calories: 220,
    image: "/dish-32.jpg",
    protein: 6,
    carbs: 32,
    fats: 8,
    ingredients: ["Potato", "Cauliflower", "Tomatoes", "Onions", "Turmeric", "Spices"],
    allergens: []
  },
  {
    id: 33,
    name: "Kathi Roll",
    calories: 380,
    image: "/dish-33.jpg",
    protein: 22,
    carbs: 42,
    fats: 14,
    ingredients: ["Paratha", "Chicken/Paneer", "Onions", "Egg", "Sauces", "Spices"],
    allergens: ["Gluten", "Egg"]
  },
  {
    id: 34,
    name: "Jalebi",
    calories: 290,
    image: "/dish-34.jpg",
    protein: 3,
    carbs: 58,
    fats: 6,
    ingredients: ["Flour", "Sugar Syrup", "Yogurt", "Saffron", "Cardamom"],
    allergens: ["Gluten"]
  },
  {
    id: 35,
    name: "Poha",
    calories: 200,
    image: "/dish-35.jpg",
    protein: 5,
    carbs: 35,
    fats: 5,
    ingredients: ["Flattened Rice", "Peanuts", "Onions", "Turmeric", "Curry Leaves", "Lemon"],
    allergens: ["Nuts"]
  },
  {
    id: 36,
    name: "Upma",
    calories: 195,
    image: "/dish-36.jpg",
    protein: 6,
    carbs: 32,
    fats: 5,
    ingredients: ["Semolina", "Vegetables", "Mustard Seeds", "Curry Leaves", "Cashews"],
    allergens: ["Nuts"]
  },
  {
    id: 37,
    name: "Bhindi Masala",
    calories: 240,
    image: "/dish-37.jpg",
    protein: 5,
    carbs: 28,
    fats: 12,
    ingredients: ["Okra", "Onions", "Tomatoes", "Spices", "Mango Powder"],
    allergens: []
  },
  {
    id: 38,
    name: "Rasgulla",
    calories: 186,
    image: "/dish-38.jpg",
    protein: 6,
    carbs: 35,
    fats: 3,
    ingredients: ["Paneer", "Sugar", "Cardamom", "Rose Water"],
    allergens: ["Dairy"]
  },
  {
    id: 39,
    name: "Nihari",
    calories: 530,
    image: "/dish-39.jpg",
    protein: 40,
    carbs: 15,
    fats: 35,
    ingredients: ["Beef/Mutton", "Wheat Flour", "Ginger", "Garlic", "Spices", "Fried Onions"],
    allergens: ["Gluten"]
  },
  {
    id: 40,
    name: "Keema",
    calories: 480,
    image: "/dish-40.jpg",
    protein: 35,
    carbs: 18,
    fats: 32,
    ingredients: ["Minced Meat", "Peas", "Onions", "Tomatoes", "Ginger", "Garlic", "Spices"],
    allergens: []
  },
  {
    id: 41,
    name: "Appam",
    calories: 150,
    image: "/dish-41.jpg",
    protein: 4,
    carbs: 28,
    fats: 3,
    ingredients: ["Rice", "Coconut", "Yeast", "Sugar"],
    allergens: []
  },
  {
    id: 42,
    name: "Mysore Pak",
    calories: 320,
    image: "/dish-42.jpg",
    protein: 5,
    carbs: 45,
    fats: 15,
    ingredients: ["Gram Flour", "Ghee", "Sugar", "Cardamom"],
    allergens: ["Dairy"]
  },
  {
    id: 43,
    name: "Prawn Curry",
    calories: 370,
    image: "/dish-43.jpg",
    protein: 32,
    carbs: 15,
    fats: 22,
    ingredients: ["Prawns", "Coconut Milk", "Tomatoes", "Onions", "Curry Leaves", "Spices"],
    allergens: []
  },
  {
    id: 44,
    name: "Kashmiri Pulao",
    calories: 440,
    image: "/dish-44.jpg",
    protein: 8,
    carbs: 68,
    fats: 15,
    ingredients: ["Basmati Rice", "Dry Fruits", "Saffron", "Ghee", "Spices", "Vegetables"],
    allergens: ["Nuts", "Dairy"]
  },
  {
    id: 45,
    name: "Mutton Biryani",
    calories: 580,
    image: "/dish-45.jpg",
    protein: 30,
    carbs: 65,
    fats: 22,
    ingredients: ["Mutton", "Basmati Rice", "Yogurt", "Saffron", "Fried Onions", "Spices"],
    allergens: ["Dairy"]
  },
  {
    id: 46,
    name: "Litti Chokha",
    calories: 310,
    image: "/dish-46.jpg",
    protein: 10,
    carbs: 48,
    fats: 10,
    ingredients: ["Wheat Flour", "Roasted Gram", "Eggplant", "Tomato", "Potato", "Spices"],
    allergens: ["Gluten"]
  },
  {
    id: 47,
    name: "Misal Pav",
    calories: 420,
    image: "/dish-47.jpg",
    protein: 16,
    carbs: 58,
    fats: 14,
    ingredients: ["Sprouted Beans", "Bread", "Farsan", "Onions", "Lemon", "Spices"],
    allergens: ["Gluten"]
  },
  {
    id: 48,
    name: "Shahi Tukda",
    calories: 340,
    image: "/dish-48.jpg",
    protein: 8,
    carbs: 52,
    fats: 12,
    ingredients: ["Bread", "Milk", "Sugar", "Saffron", "Cardamom", "Nuts"],
    allergens: ["Gluten", "Dairy", "Nuts"]
  },
  {
    id: 49,
    name: "Halwa Puri",
    calories: 460,
    image: "/dish-49.jpg",
    protein: 10,
    carbs: 62,
    fats: 20,
    ingredients: ["Semolina", "Flour", "Sugar", "Ghee", "Chickpeas", "Spices"],
    allergens: ["Gluten", "Dairy"]
  },
  {
    id: 50,
    name: "Chicken 65",
    calories: 390,
    image: "/dish-50.jpg",
    protein: 35,
    carbs: 15,
    fats: 24,
    ingredients: ["Chicken", "Yogurt", "Curry Leaves", "Red Chilies", "Ginger", "Garlic", "Spices"],
    allergens: ["Dairy", "Egg"]
  }
];
