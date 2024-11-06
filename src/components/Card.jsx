import React from 'react';
import './Card.css';

const Card = ({ title, imgSrc, description, difficulty, cuisine, mealTypes }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">
        <img src={imgSrc} alt={title} className="card-image" />
        <div className="card-description">
          <p>{description}</p>
          <p>Кухня: {cuisine}</p>
          <p>Тип блюда: {mealTypes.join(', ')}</p>
          <p>Сложность: {difficulty}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
