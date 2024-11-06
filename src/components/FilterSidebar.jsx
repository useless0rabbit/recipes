import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ onCuisineChange, onMealTypeChange, onDifficultyChange, resetFilters }) => {
  return (
    <div className="filter-sidebar">
      <img src="https://via.placeholder.com/150x100" alt="placeholder" /> 
      <p>Описание фильтра или случайный текст о еде.</p>

      <div className="filter-item">
        <label htmlFor="cuisine" className="filter-label">Кухня:</label>
        <select id="cuisine" className="filter-select" onChange={(e) => onCuisineChange(e.target.value)}>
          <option value="">Все страны и регионы</option>
          <option value="Европейская кухня">Европейская кухня</option>
          <option value="Итальянская кухня">Итальянская кухня</option>
          <option value="Мексиканская кухня">Мексиканская кухня</option>
          <option value="Французская кухня">Французская кухня</option>
          <option value="Японская кухня">Японская кухня</option>
          <option value="Индийская кухня">Индийская кухня</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="mealType" className="filter-label">Тип блюда:</label>
        <select id="mealType" className="filter-select" onChange={(e) => onMealTypeChange(e.target.value)}>
          <option value="">Все типы</option>
          <option value="Завтрак">Завтрак</option>
          <option value="Обед">Обед</option>
          <option value="Ужин">Ужин</option>
        </select>
      </div>

      <div className="filter-item">
        <label className="filter-label">Сложность приготовления:</label>
        <div className="difficulty-buttons">
          <button onClick={() => onDifficultyChange('Любая')}>Любая</button>
          <button onClick={() => onDifficultyChange('Низкая')}>Низкая</button>
          <button onClick={() => onDifficultyChange('Средняя')}>Средняя</button>
          <button onClick={() => onDifficultyChange('Высокая')}>Высокая</button>
        </div>
      </div>

      <button onClick={resetFilters} className="reset-button">Сбросить все фильтры</button>
    </div>
  );
};

export default FilterSidebar;
