import React from 'react';
import './FilterSidebar.css';
import restaraunt from '../pictures/restaraunt.jpg';

const FilterSidebar = ({ filters, applyFilters, cuisines, mealTypes, onRandomRecipe }) => {
  const handleCuisineChange = (e) => {
    applyFilters({ ...filters, cuisine: e.target.value });
  };

  const handleMealTypeChange = (e) => {
    applyFilters({ ...filters, mealType: e.target.value });
  };

  const handleDifficultyChange = (difficulty) => {
    applyFilters({ ...filters, difficulty });
  };

  const resetFilters = () => {
    applyFilters({ cuisine: '', mealType: '', difficulty: '' });
  };

  const hasActiveFilters = filters.cuisine || filters.mealType || filters.difficulty;

  return (
    <div className="filter-sidebar">
      <img src={restaraunt} alt="placeholder" className="sidebar-image" />
      <p className="sidebar-fact">Знаете ли вы? Первое пицца-кафе открылось в Неаполе в 1830 году!</p>
      
      <div className="filter-item">
        <label className="filter-label">Кухня:</label>
        <select value={filters.cuisine} onChange={handleCuisineChange}>
          <option value="">Все страны и регионы</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>{cuisine}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-item">
        <label className="filter-label">Тип блюда:</label>
        <select value={filters.mealType} onChange={handleMealTypeChange}>
          <option value="">Все типы</option>
          {mealTypes.map((mealType) => (
            <option key={mealType} value={mealType}>{mealType}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-item">
        <label className="filter-label">Сложность:</label>
        <div className="difficulty-buttons">
          <button onClick={() => handleDifficultyChange('')} className={filters.difficulty === '' ? 'active' : ''}>Любая</button>
          <button onClick={() => handleDifficultyChange('Easy')} className={filters.difficulty === 'Easy' ? 'active' : ''}>Низкая</button>
          <button onClick={() => handleDifficultyChange('Medium')} className={filters.difficulty === 'Medium' ? 'active' : ''}>Средняя</button>
          <button onClick={() => handleDifficultyChange('Hard')} className={filters.difficulty === 'Hard' ? 'active' : ''}>Высокая</button>
        </div>
      </div>

      <button className="reset-button" onClick={resetFilters}>
        Сбросить все фильтры
      </button>

      <p className="try-luck-text">А еще можно попробовать на вкус удачу</p>
      <button className="luck-button" onClick={onRandomRecipe}>
        Мне повезет!
      </button>
    </div>
  );
};

export default FilterSidebar;
