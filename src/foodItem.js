import recipe1 from "./assets/recipe1.jpg";
import recipe2 from "./assets/recipe2.jpg";
import recipe3 from "./assets/recipe3.jpeg";
import breakfast1 from "./assets/breakfast1.jpeg";
import breakfast2 from "./assets/breakfast2.jpeg";
import breakfast3 from "./assets/breakfast3.jpeg";
import vegan1 from "./assets/vegan1.webp";
import vegan2 from "./assets/vegan2.jpeg";
import vegan3 from "./assets/vegan3.jpeg";
import juice1 from "./assets/juice1.jpg";
import mint from "./assets/mint.webp";
import shakes from "./assets/shakes.avif";

export const recipes = [
  {
    id: 1,
    name: "Grilled Veggie Bowl",
    category: "Vegan",
    image: vegan1,
    rating: 4.3,
    description: "A colorful bowl of grilled vegetables served with quinoa and light dressing.",
    ingredients: [
      "1 cup quinoa",
      "1 cup mixed grilled vegetables",
      "1 tbsp olive oil",
      "Salt to taste",
      "Black pepper",
      "Garlic dressing"
    ],
    instructions: [
      "Boil the quinoa until soft and fluffy.",
      "Grill the vegetables with olive oil, salt, and pepper.",
      "Layer quinoa in a bowl and top with grilled veggies.",
      "Pour garlic dressing and serve warm."
    ]
  },

  {
    id: 2,
    name: "Mint Lemonade",
    category: "Drinks",
    image: mint,
    rating: 4.8,
    description: "A cool, tangy drink made with fresh mint leaves and lemon juice — perfect for summer.",
    ingredients: [
      "1 cup cold water",
      "2 tbsp lemon juice",
      "10–12 mint leaves",
      "2 tbsp sugar",
      "Ice cubes"
    ],
    instructions: [
      "Blend mint leaves with sugar and lemon juice.",
      "Add cold water and mix well.",
      "Strain the mixture into a glass.",
      "Add ice cubes and serve chilled."
    ]
  },

  {
    id: 3,
    name: "Avocado Salad",
    category: "Vegan",
    image: vegan2,
    rating: 4.5,
    description: "A fresh and healthy salad made with creamy avocado, cherry tomatoes, and greens.",
    ingredients: [
      "1 ripe avocado",
      "1 cup cherry tomatoes",
      "1 cup mixed greens",
      "1 tbsp olive oil",
      "Salt & pepper"
    ],
    instructions: [
      "Chop avocado and cherry tomatoes.",
      "Mix with greens in a large bowl.",
      "Add olive oil, salt, and pepper.",
      "Toss gently and serve fresh."
    ]
  },

  {
    id: 4,
    name: "Chocolate Shake",
    category: "Drinks",
    image: shakes,
    rating: 4.9,
    description: "Rich and frothy chocolate milkshake topped with whipped cream.",
    ingredients: [
      "1 cup milk",
      "2 tbsp cocoa powder",
      "2 tbsp sugar",
      "1 scoop chocolate ice cream",
      "Whipped cream"
    ],
    instructions: [
      "Blend milk, cocoa powder, sugar, and ice cream.",
      "Blend until smooth and frothy.",
      "Pour into a tall glass.",
      "Top with whipped cream and serve."
    ]
  },

  {
    id: 5,
    name: "Tofu Stir Fry",
    category: "Vegan",
    image: vegan3,
    rating: 4.5,
    description: "Crispy tofu tossed with vegetables in a savory soy-garlic sauce.",
    ingredients: [
      "1 cup tofu cubes",
      "1 cup mixed vegetables",
      "2 tbsp soy sauce",
      "1 garlic clove (minced)",
      "1 tbsp oil"
    ],
    instructions: [
      "Fry tofu cubes until golden.",
      "Stir fry vegetables in a pan.",
      "Add soy sauce and garlic.",
      "Mix tofu with vegetables and serve hot."
    ]
  },

  {
    id: 6,
    name: "Ice Cream Sundae",
    category: "Desserts",
    image: recipe1,
    rating: 3.5,
    description: "Classic vanilla ice cream topped with chocolate syrup, nuts, and a cherry.",
    ingredients: [
      "2 scoops vanilla ice cream",
      "Chocolate syrup",
      "Chopped nuts",
      "1 cherry"
    ],
    instructions: [
      "Scoop ice cream into a bowl.",
      "Drizzle chocolate syrup on top.",
      "Sprinkle chopped nuts.",
      "Place a cherry on top & serve."
    ]
  },

  {
    id: 7,
    name: "Banana Smoothie",
    category: "Drinks",
    image: juice1,
    rating: 3.5,
    description: "A creamy and refreshing smoothie made with ripe bananas and chilled milk.",
    ingredients: [
      "1 banana",
      "1 cup chilled milk",
      "1 tbsp honey",
      "Ice cubes"
    ],
    instructions: [
      "Add banana, milk, and honey to a blender.",
      "Add ice cubes.",
      "Blend until smooth.",
      "Serve chilled."
    ]
  },

  {
    id: 8,
    name: "Pancakes",
    category: "Breakfast",
    image: breakfast1,
    rating: 4.6,
    description: "Fluffy pancakes served with maple syrup and a pat of butter.",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "2 tbsp sugar",
      "1 tbsp butter"
    ],
    instructions: [
      "Mix flour, sugar, egg, and milk to make batter.",
      "Pour batter into a heated pan.",
      "Cook until bubbles appear and flip.",
      "Serve with butter and maple syrup."
    ]
  },

  {
    id: 9,
    name: "Butter Cookies",
    category: "Desserts",
    image: recipe3,
    rating: 3.9,
    description: "Crispy golden butter cookies that melt in your mouth.",
    ingredients: [
      "1 cup flour",
      "1/2 cup butter",
      "1/3 cup sugar",
      "1 tsp vanilla essence"
    ],
    instructions: [
      "Mix butter and sugar until creamy.",
      "Add flour and vanilla essence.",
      "Shape dough into cookies.",
      "Bake at 180°C for 12–15 minutes."
    ]
  },

  {
    id: 10,
    name: "Omelette",
    category: "Breakfast",
    image: breakfast2,
    rating: 4.8,
    description: "A soft, fluffy omelette filled with vegetables and cheese.",
    ingredients: [
      "2 eggs",
      "1/4 cup vegetables (chopped)",
      "2 tbsp cheese",
      "Salt & pepper"
    ],
    instructions: [
      "Beat eggs with salt and pepper.",
      "Pour mixture into a hot pan.",
      "Add vegetables and cheese.",
      "Fold and cook until fluffy."
    ]
  },

  {
    id: 11,
    name: "French Toast",
    category: "Breakfast",
    image: breakfast3,
    rating: 4.5,
    description: "Golden-brown French toast served with honey and fresh fruits.",
    ingredients: [
      "2 slices bread",
      "1 egg",
      "1/4 cup milk",
      "Honey",
      "Fresh fruits"
    ],
    instructions: [
      "Mix egg and milk.",
      "Dip bread slices into the mixture.",
      "Cook on a pan until golden brown.",
      "Serve with honey and fruits."
    ]
  },

  {
    id: 12,
    name: "Chocolate Cake",
    category: "Desserts",
    image: recipe2,
    rating: 4.7,
    description: "Moist and rich chocolate cake layered with smooth chocolate ganache.",
    ingredients: [
      "1 cup flour",
      "1/2 cup cocoa powder",
      "1/2 cup sugar",
      "1/2 cup butter",
      "Chocolate ganache"
    ],
    instructions: [
      "Mix all dry ingredients.",
      "Add butter and blend well.",
      "Pour batter into a baking pan.",
      "Bake at 180°C for 25–30 minutes.",
      "Layer with chocolate ganache and serve."
    ]
  }
];


export const categories = ["All", "Breakfast", "Vegan", "Desserts", "Drinks"];

