import React, { useState } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import FilterSidebar from './components/FilterSidebar';
import './App.css';

const App = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedMealType, setSelectedMealType] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const [cards] = useState([
    { id: 1, title: "Паста с томатным соусом", cuisine: "Европейская кухня",  tags: ["паста", "соус"],  instructions: "1. Нарезать ингредиенты.\n2. Смешать с соусом.\n3. Варить на среднем огне.", calories: 500, servings: 4, description: "Вкусная паста с томатным соусом.", mealTypes: ["Завтрак", "Ужин"], difficulty: "★★☆☆☆" },
    { id: 2, title: "Блюдо 2", cuisine: "Итальянская кухня", mealTypes: ["Обед"], difficulty: "★★★☆☆" },
    { id: 3, title: "Блюдо 3", cuisine: "Мексиканская кухня", mealTypes: ["Завтрак", "Ужин"], difficulty: "★★★★☆" },
    { id: 4, title: "Блюдо 4", cuisine: "Французская кухня", mealTypes: ["Обед"], difficulty: "★☆☆☆☆" },
    { id: 5, title: "Блюдо 5", cuisine: "Японская кухня", mealTypes: ["Ужин", "Завтрак"], difficulty: "★★☆☆☆" },
    { id: 6, title: "Блюдо 6", cuisine: "Индийская кухня", mealTypes: ["Обед"], difficulty: "★★★★★" },
    { id: 7, title: "Блюдо 7", cuisine: "Американская кухня", mealTypes: ["Обед"], difficulty: "★★★☆☆" },
    { id: 8, title: "Блюдо 8", cuisine: "Китайская кухня", mealTypes: ["Ужин"], difficulty: "★★★★☆" }
  ]);

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
    setCurrentPage(1);
  };

  const handleMealTypeChange = (mealType) => {
    setSelectedMealType(mealType);
    setCurrentPage(1);
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSelectedCuisine('');
    setSelectedMealType('');
    setSelectedDifficulty('');
    setCurrentPage(1);
  };

  const filteredCards = cards.filter(card => {
    const matchesCuisine = selectedCuisine ? card.cuisine === selectedCuisine : true;
    const matchesMealType = selectedMealType ? card.mealTypes.includes(selectedMealType) : true;
    const matchesDifficulty =
      selectedDifficulty === 'Любая' ||
      (selectedDifficulty === 'Низкая' && (card.difficulty === "★☆☆☆☆" || card.difficulty === "★★☆☆☆")) ||
      (selectedDifficulty === 'Средняя' && (card.difficulty === "★★★☆☆" || card.difficulty === "★★★★☆")) ||
      (selectedDifficulty === 'Высокая' && card.difficulty === "★★★★★");

    return matchesCuisine && matchesMealType && matchesDifficulty;
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <FilterSidebar 
          onCuisineChange={handleCuisineChange} 
          onMealTypeChange={handleMealTypeChange}
          onDifficultyChange={handleDifficultyChange}
          resetFilters={resetFilters} 
        />
        <CardContainer 
          cards={currentCards} 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default App;
