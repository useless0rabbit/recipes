import React, { useState } from 'react';
import Card from './Card';
import RecipeModal from './RecipeModal';
import './CardContainer.css';
import './pagination.css';

const CardContainer = ({ cards, currentPage, totalPages, onPageChange }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button 
          key={i} 
          className={`pagination-button ${i === currentPage ? 'active' : ''}`} 
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="pagination">
        <button 
          className="pagination-arrow" 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        {pages}
        <button 
          className="pagination-arrow" 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
      </div>
    );
  };

  return (
    <div className="card-container">
      <h2 className="card-title">Найденные рецепты</h2>
      <div className="card-wrapper">
        {cards.map(card => (
          <div key={card.id} onClick={() => handleCardClick(card)}>
            <Card 
              title={card.title}
              imgSrc="https://via.placeholder.com/150x100"
              description={`Описание для ${card.title}`}
              difficulty={card.difficulty}
              cuisine={card.cuisine}
              mealTypes={card.mealTypes}
            />
          </div>
        ))}
      </div>
      {renderPagination()}
      <RecipeModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        recipe={selectedRecipe} 
      />
    </div>
  );
};

export default CardContainer;
