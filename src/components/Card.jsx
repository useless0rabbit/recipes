import React from 'react';
import './Card.css';

const Card = ({ recipe, openModal }) => {
  const totalCookTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  const getStars = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return '★☆☆';
      case 'Medium':
        return '★★☆';
      case 'Hard':
        return '★★★';
      default:
        return '☆☆☆';
    }
  };

  return (
    <div className="card" onClick={() => openModal(recipe)}>
      <h3 className="card-title">{recipe.name}</h3>
      <div className="card-content">
        <img src={recipe.image || "https://via.placeholder.com/150"} alt={recipe.name} className="card-image" />
        <div className="card-info">
          <p className="description"> {recipe.description || "Нет описания"}</p>
          <p className="time">⏰ {totalCookTime} минут</p>
          <p>Сложность {getStars(recipe.difficulty)}</p>
          <p>{recipe.cuisine} cuisine </p>
          <p>{recipe.mealType?.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
