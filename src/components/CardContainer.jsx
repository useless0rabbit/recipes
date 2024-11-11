import React, { useState } from 'react';
import Card from './Card';
import './CardContainer.css';
import './Pagination.css';

const CardContainer = ({ recipes, openModal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = recipes.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(recipes.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-button ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return <div className="pagination">{pages}</div>;
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <h2>Найденные рецепты: <span className="card-header-count">{recipes.length}</span></h2> 
      </div>
      <div className="card-wrapper">
        {currentCards.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} openModal={openModal} />
        ))}
      </div>
      {renderPagination()}
    </div>
  );
};

export default CardContainer;
