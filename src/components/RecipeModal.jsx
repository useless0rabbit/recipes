import React from 'react';
import './RecipeModal.css';
import ModalHeader from './ModalHeader';

const RecipeModal = ({ isOpen, onClose, recipe }) => {
  if (!isOpen || !recipe) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ModalHeader onClose={onClose} />
        <div className="modal-body">
          <div className="tiles-column">
            <div className="info-tile">
              <h4>Кухня</h4>
              <p>{recipe.cuisine || 'Не указано'}</p>
            </div>
            <div className="info-tile">
              <h4>Теги</h4>
              <p>{recipe.tags?.join(', ') || 'Отсутствуют'}</p>
            </div>
            <div className="info-tile">
              <h4>Калорийность</h4>
              <p>{recipe.calories || 'Не указано'}</p>
            </div>
            <div className="info-tile">
              <h4>Количество порций</h4>
              <p>{recipe.servings || 'Не указано'}</p>
            </div>
            <div className="description-tile">
              <h4>Описание</h4>
              <p>{recipe.description || 'Описание отсутствует'}</p>
            </div>
          </div>
          <div className="tiles-column">
            <div className="info-tile">
              <h4>Общее время приготовления</h4>
              <p>{recipe.preparationTime || 'Не указано'}</p>
            </div>
            <div className="instruction-tile">
              <h4>Инструкция по приготовлению</h4>
              <div className="instruction-list">
                {recipe.instructions.split('\n').map((step, index) => (
                  <div className="instruction-step" key={index}>
                    <div className="circle"></div>
                    <p>{step}</p>
                    {index < recipe.instructions.split('\n').length - 1 && <div className="line"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="image-column">
            <div className="image-tile">
              <img src="placeholder-image-url" alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
