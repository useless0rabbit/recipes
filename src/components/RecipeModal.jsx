import React from 'react';
import './RecipeModal.css';
import ModalHeader from './ModalHeader';

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  const totalCookTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <ModalHeader onClose={onClose} />
        <div className="modal-container">

          <div className="tiles-column">
            <div className="info-tile">
              <h4>Кухня</h4>
              <hr className="section-divider" />
              <p>{recipe.cuisine || 'Не указано'}</p>
            </div>
            <div className="info-tile">
              <h4>Теги</h4>
              <hr className="section-divider" />
              <p>{recipe.tags && recipe.tags.length > 0 ? recipe.tags.map(tag => `#${tag}`).join(', ') : 'Нет тегов'}</p>
            </div>
            <div className="info-tile">
              <h4>Калорийность</h4>
              <hr className="section-divider" />
              <p>{recipe.caloriesPerServing} ккал</p>
            </div>
            <div className="info-tile">
              <h4>Количество порций</h4>
              <hr className="section-divider" />
              <p>{recipe.servings}</p>
            </div>
            <div className="description-tile">
              <h4>Описание</h4>
              <hr className="section-divider" />
              <p>{recipe.description || 'Описание отсутствует'}</p>
            </div>
          </div>

          <div className="center-column">
            <div className="info-time">
              <h4>Общее время приготовления</h4>
              <hr className="section-divider" />
              <p>{totalCookTime} минут</p>
            </div>
            <div className="instructions-tile">
              <h4>Инструкции по приготовлению</h4>
              <hr className="section-divider" />
              <ul>
                {recipe.instructions && recipe.instructions.length > 0 ? (
                  recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))
                ) : (
                  <li>Инструкции отсутствуют</li>
                )}
              </ul>
            </div>
          </div>

          <div className="image-section">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
