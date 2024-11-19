import React from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import FilterSidebar from './components/FilterSidebar';
import RecipeModal from './components/RecipeModal';
import './App.css';
import { useSelector } from 'react-redux';
import { useFetchRecipesQuery } from './redux/api/apiSlice';

const App = () => {
  const filters = useSelector((state) => state.filters);

  const { data: recipesData, isLoading, isError } = useFetchRecipesQuery();
  const recipes = Array.isArray(recipesData) ? recipesData : recipesData?.recipes || [];

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (filters.cuisine === '' || recipe.cuisine === filters.cuisine) &&
      (filters.mealType === '' || recipe.mealType.includes(filters.mealType)) &&
      (filters.difficulty === '' || recipe.difficulty === filters.difficulty)
    );
  });

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <FilterSidebar cuisines={[...new Set(recipes.map((r) => r.cuisine))]} mealTypes={[...new Set(recipes.flatMap((r) => r.mealType))]} />
        {isLoading ? (
          <p>Загрузка рецептов...</p>
        ) : isError ? (
          <p>Ошибка загрузки рецептов</p>
        ) : (
          <CardContainer recipes={filteredRecipes} />
        )}
      </div>
      <RecipeModal />
    </div>
  );
};

export default App;
