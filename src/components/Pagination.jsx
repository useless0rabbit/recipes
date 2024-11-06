// Pagination.jsx

import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button 
          key={i} 
          className={`pagination-button ${i === currentPage ? 'active' : ''}`} 
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    
    return buttons;
  };

  return (
    <div className="pagination">
      <button 
        className="pagination-arrow" 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      {renderPaginationButtons()}
      <button 
        className="pagination-arrow" 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
