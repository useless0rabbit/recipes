import React from 'react';
import cn from 'classnames';
import './DifficultyButton.css';

const DifficultyButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={cn('difficulty-button', { 'active': isActive })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default DifficultyButton;
