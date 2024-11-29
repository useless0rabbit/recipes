import React from 'react';

const FilterItem = ({ label, options, value, onChange }) => {
  return (
    <div className="filter-item">
      <label className="filter-label">{label}</label>
      <select onChange={(e) => onChange(e.target.value)} value={value}>
        <option value="">Все</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterItem;
