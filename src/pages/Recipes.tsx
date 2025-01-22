import React, { useState } from 'react';
import { Dumbbell, Flame, Timer, X } from 'lucide-react';
import { motion } from 'framer-motion';

const recipes = [
  {
    id: 1,
    title: "Bowl Protéiné au Poulet",
    category: "Prise de masse",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 650,
    protein: 45,
    time: 25,
    ingredients: [
      "300g de poulet",
      "100g de quinoa",
      "1 avocat",
      "100g de patate douce",
      "Légumes verts variés",
      "Huile d'olive",
      "Épices au choix"
    ],
    instructions: [
      "Faire cuire le quinoa selon les instructions",
      "Couper le poulet en dés et le faire mariner avec les épices",
      "Faire cuire le poulet à la poêle",
      "Cuire la patate douce au four",
      "Assembler le bowl avec tous les ingrédients",
      "Ajouter l'avocat et un filet d'huile d'olive"
    ],
    nutritionFacts: {
      calories: 650,
      protein: 45,
      carbs: 55,
      fats: 25,
      fiber: 12
    }
  },
  {
    id: 2,
    title: "Saumon aux Légumes",
    category: "Perte de poids",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 450,
    protein: 35,
    time: 20,
    ingredients: [
      "200g de saumon",
      "200g de brocolis",
      "100g de carottes",
      "Citron",
      "Aneth",
      "Huile d'olive",
      "Sel et poivre"
    ],
    instructions: [
      "Préchauffer le four à 180°C",
      "Placer le saumon sur une feuille de papier cuisson",
      "Assaisonner avec sel, poivre, aneth et citron",
      "Cuire au four pendant 15-20 minutes",
      "Pendant ce temps, faire cuire les légumes à la vapeur",
      "Servir le saumon avec les légumes et un filet d'huile d'olive"
    ],
    nutritionFacts: {
      calories: 450,
      protein: 35,
      carbs: 20,
      fats: 28,
      fiber: 8
    }
  },
  {
    id: 3,
    title: "Smoothie Énergisant",
    category: "Pré-entraînement",
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 320,
    protein: 20,
    time: 10,
    ingredients: [
      "1 banane",
      "30g de flocons d'avoine",
      "30g de protéine whey",
      "200ml de lait d'amande",
      "1 cuillère à café de miel",
      "1 poignée d'épinards",
      "5g de graines de chia"
    ],
    instructions: [
      "Mettre tous les ingrédients dans un blender",
      "Mixer jusqu'à obtention d'une consistance lisse",
      "Ajouter de la glace si désiré",
      "Servir immédiatement"
    ],
    nutritionFacts: {
      calories: 320,
      protein: 20,
      carbs: 45,
      fats: 8,
      fiber: 6
    }
  },
  {
    id: 4,
    title: "Toast à l'Avocat et Œuf",
    category: "Pré-entraînement",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 380,
    protein: 18,
    time: 15,
    ingredients: [
      "2 tranches de pain complet",
      "1 avocat",
      "2 œufs",
      "Graines de sésame",
      "Piment en flocons",
      "Sel et poivre"
    ],
    instructions: [
      "Toaster le pain",
      "Écraser l'avocat et assaisonner",
      "Faire pocher les œufs",
      "Étaler l'avocat sur les toasts",
      "Ajouter les œufs pochés",
      "Saupoudrer de graines et d'épices"
    ],
    nutritionFacts: {
      calories: 380,
      protein: 18,
      carbs: 35,
      fats: 22,
      fiber: 9
    }
  },
  {
    id: 5,
    title: "Shake Récupération",
    category: "Récupération",
    image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 290,
    protein: 25,
    time: 5,
    ingredients: [
      "40g de protéine whey",
      "1 banane",
      "200ml de lait",
      "30g de fruits rouges",
      "1 cuillère à soupe de miel",
      "5g de glutamine"
    ],
    instructions: [
      "Mettre tous les ingrédients dans un blender",
      "Mixer pendant 30 secondes",
      "Ajouter de la glace si désiré",
      "Consommer dans les 15 minutes après l'entraînement"
    ],
    nutritionFacts: {
      calories: 290,
      protein: 25,
      carbs: 40,
      fats: 5,
      fiber: 4
    }
  },
  {
    id: 6,
    title: "Bowl de Récupération au Thon",
    category: "Récupération",
    image: "https://image.over-blog.com/2Ywu3OKxF4n7Rsz9cZSUPiChC7I=/filters:no_upscale()/image%2F0651923%2F20191118%2Fob_c0948b_ob-f85b8c-pokebowl-thon-riz.jpg",
    calories: 520,
    protein: 40,
    time: 20,
    ingredients: [
      "200g de thon",
      "150g de riz brun",
      "100g d'edamame",
      "1 avocat",
      "Algues nori",
      "Sauce soja",
      "Gingembre mariné"
    ],
    instructions: [
      "Cuire le riz brun",
      "Préparer les edamame",
      "Couper l'avocat en tranches",
      "Émietter le thon",
      "Assembler le bowl",
      "Garnir d'algues et de gingembre",
      "Assaisonner avec la sauce soja"
    ],
    nutritionFacts: {
      calories: 520,
      protein: 40,
      carbs: 50,
      fats: 20,
      fiber: 10
    }
  }
];

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [selectedRecipe, setSelectedRecipe] = useState<typeof recipes[0] | null>(null);

  const filteredRecipes = selectedCategory === "Tout"
    ? recipes
    : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <motion.div 
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Nos Recettes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des recettes équilibrées et délicieuses, adaptées à vos objectifs sportifs
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button 
            className={`px-6 py-2 rounded-full ${
              selectedCategory === "Tout" 
                ? "bg-[#2e7d32] text-white" 
                : "bg-gray-200 hover:bg-[#2e7d32] hover:text-white"
            }`}
            onClick={() => setSelectedCategory("Tout")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tout
          </motion.button>
          {["Prise de masse", "Perte de poids", "Pré-entraînement", "Récupération"].map(category => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category 
                  ? "bg-[#2e7d32] text-white" 
                  : "bg-gray-200 hover:bg-[#2e7d32] hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Recipe Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredRecipes.map((recipe, index) => (
            <motion.div 
              key={recipe.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-[#2e7d32] font-semibold">{recipe.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-4">{recipe.title}</h3>
                
                <div className="flex justify-between text-gray-600">
                  <div className="flex items-center">
                    <Flame className="h-5 w-5 mr-1" />
                    <span>{recipe.calories} kcal</span>
                  </div>
                  <div className="flex items-center">
                    <Dumbbell className="h-5 w-5 mr-1" />
                    <span>{recipe.protein}g prot</span>
                  </div>
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 mr-1" />
                    <span>{recipe.time} min</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="mt-6 w-full bg-[#2e7d32] text-white py-2 rounded-lg hover:bg-[#1b5e20]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Voir la recette
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recipe Modal */}
        {selectedRecipe && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="relative">
                <motion.button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedRecipe.title}</h2>
                <span className="text-sm text-[#2e7d32] font-semibold">{selectedRecipe.category}</span>

                <div className="flex justify-between text-gray-600 my-4">
                  <div className="flex items-center">
                    <Flame className="h-5 w-5 mr-1" />
                    <span>{selectedRecipe.calories} kcal</span>
                  </div>
                  <div className="flex items-center">
                    <Dumbbell className="h-5 w-5 mr-1" />
                    <span>{selectedRecipe.protein}g prot</span>
                  </div>
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 mr-1" />
                    <span>{selectedRecipe.time} min</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Valeurs nutritionnelles</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Calories: {selectedRecipe.nutritionFacts.calories} kcal</p>
                      <p className="text-gray-600">Protéines: {selectedRecipe.nutritionFacts.protein}g</p>
                      <p className="text-gray-600">Glucides: {selectedRecipe.nutritionFacts.carbs}g</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Lipides: {selectedRecipe.nutritionFacts.fats}g</p>
                      <p className="text-gray-600">Fibres: {selectedRecipe.nutritionFacts.fiber}g</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Ingrédients</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-600">{ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Instructions</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    {selectedRecipe.instructions.map((instruction, index) => (
                      <li key={index} className="text-gray-600">{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Recipes;