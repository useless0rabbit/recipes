import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCuisine, setMealType, setDifficulty, resetFilters } from '../redux/slices/filtersSlice';
import './FilterSidebar.css';
import FilterItem from './FilterItem';
import restaraunt from '../pictures/restaraunt.jpg';
import DifficultyButton from './DifficultyButton';

const FilterSidebar = ({ cuisines = [], mealTypes = [] }) => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleSetDifficulty = (value) => {
    dispatch(setDifficulty(value));
  };

  const difficultyLevels = [
    { value: '', label: 'Все' },
    { value: 'Easy', label: 'Легкая' },
    { value: 'Medium', label: 'Средняя' },
    { value: 'Hard', label: 'Сложная' },
  ];

  if (!cuisines.length || !mealTypes.length) {
    return <p>Данные фильтров не загружены</p>;
  }

  return (
    <div className="filter-sidebar">
      <img src={restaraunt} alt="Restaurant" className="sidebar-image" />
      <p className="sidebar-fact">Знаете ли вы? Первое пицца-кафе открылось в Неаполе в 1830 году!</p>

      <FilterItem
        label="Кухня"
        options={cuisines}
        value={filters.cuisine}
        onChange={(value) => dispatch(setCuisine(value))}
      />
      <FilterItem
        label="Тип блюда"
        options={mealTypes}
        value={filters.mealType}
        onChange={(value) => dispatch(setMealType(value))}
      />

      <div className="filter-item">
      <label className="filter-label">Сложность:</label>
      <div className="difficulty-buttons">
        {difficultyLevels.map(({ value, label }) => (
          <DifficultyButton
            key={value}
            label={label}
            isActive={filters.difficulty === value}
            onClick={() => handleSetDifficulty(value)}
          />
        ))}
      </div>
      </div>

      <button
        onClick={() => dispatch(resetFilters())}
        className="reset-button"
      >
        Сбросить все фильтры
      </button>
    </div>
  );
};

export default FilterSidebar;
