import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import FilterSidebar from './components/FilterSidebar';
import RecipeModal from './components/RecipeModal';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    cuisine: '',
    mealType: '',
    difficulty: '',
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);

        const uniqueCuisines = [...new Set(data.recipes.map(recipe => recipe.cuisine))];
        const uniqueMealTypes = [...new Set(data.recipes.flatMap(recipe => recipe.mealType))];
        
        setCuisines(uniqueCuisines);
        setMealTypes(uniqueMealTypes);
        
        setLoading(false);
      } catch (error) {
        setError('Ошибка при загрузке данных');
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const applyFilters = (filters) => {
    setFilters(filters);
    const filtered = recipes.filter((recipe) => {
      return (
        (filters.cuisine === '' || recipe.cuisine === filters.cuisine) &&
        (filters.mealType === '' || recipe.mealType.includes(filters.mealType)) &&
        (filters.difficulty === '' || recipe.difficulty === filters.difficulty)
      );
    });
    setFilteredRecipes(filtered);
  };

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setIsModalOpen(false);
  };

  const handleRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    setFilteredRecipes([randomRecipe]);
  };

  return (
    <div className="app">
      <Header className="header"/>
      <div className="main-content">
        <FilterSidebar
          filters={filters}
          applyFilters={applyFilters}
          cuisines={cuisines}
          mealTypes={mealTypes}
          onRandomRecipe={handleRandomRecipe} 
        />
        {loading ? (
          <p>Загрузка рецептов...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <CardContainer recipes={filteredRecipes} openModal={openModal} />
        )}
      </div>
      {isModalOpen && selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
