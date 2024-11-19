import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCuisine, setMealType, setDifficulty, resetFilters } from '../redux/slices/filtersSlice';
import './FilterSidebar.css';
import restaraunt from '../pictures/restaraunt.jpg';

const FilterSidebar = ({ cuisines = [], mealTypes = [] }) => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  if (!cuisines.length || !mealTypes.length) {
    return <p>Данные фильтров не загружены</p>;
  }

  return (
    <div className="filter-sidebar">
      <img src={restaraunt} alt="Restaurant" className="sidebar-image" />
      <p className="sidebar-fact">Знаете ли вы? Первое пицца-кафе открылось в Неаполе в 1830 году!</p>

      <div className="filter-item">
        <label className="filter-label">Кухня:</label>
        <select onChange={(e) => dispatch(setCuisine(e.target.value))} value={filters.cuisine}>
          <option value="">Все страны и регионы</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>{cuisine}</option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label className="filter-label">Тип блюда:</label>
        <select onChange={(e) => dispatch(setMealType(e.target.value))} value={filters.mealType}>
          <option value="">Все</option>
          {mealTypes.map((mealType) => (
            <option key={mealType} value={mealType}>{mealType}</option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label className="filter-label">Сложность:</label>
        <div className="difficulty-buttons">
          <button
            onClick={() => dispatch(setDifficulty(''))}
            className={filters.difficulty === '' ? 'active' : ''}
          >
            Все
          </button>
          <button
            onClick={() => dispatch(setDifficulty('Easy'))}
            className={filters.difficulty === 'Easy' ? 'active' : ''}
          >
            Легкая
          </button>
          <button
            onClick={() => dispatch(setDifficulty('Medium'))}
            className={filters.difficulty === 'Medium' ? 'active' : ''}
          >
            Средняя
          </button>
          <button
            onClick={() => dispatch(setDifficulty('Hard'))}
            className={filters.difficulty === 'Hard' ? 'active' : ''}
          >
            Сложная
          </button>
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
