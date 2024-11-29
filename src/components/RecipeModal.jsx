import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../redux/slices/modalSlice';
import './RecipeModal.css';

const RecipeModal = () => {
  const dispatch = useDispatch();
  const { isOpen, selectedRecipe } = useSelector((state) => state.modal);

  if (!isOpen || !selectedRecipe) return null;

  const totalCookTime = selectedRecipe.prepTimeMinutes + selectedRecipe.cookTimeMinutes;

  return (
    <div className="modal-overlay" onClick={() => dispatch(closeModal())}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{selectedRecipe.name}</h2>
          <button className="close-button" onClick={() => dispatch(closeModal())}>
            ←
          </button>
        </div>

        <div className="modal-container">
          <div className="tiles-column">
            <div className="info-tile">
              <h4>Кухня:</h4>
              <p>{selectedRecipe.cuisine || 'Не указано'}</p>
            </div>
            <div className="info-tile">
              <h4>Теги:</h4>
              <p>{selectedRecipe.tags?.join(', ') || 'Нет тегов'}</p>
            </div>
            <div className="info-tile">
              <h4>Калорийность:</h4>
              <p>{selectedRecipe.caloriesPerServing || 'Не указано'} ккал</p>
            </div>
            <div className="info-tile">
              <h4>Количество порций:</h4>
              <p>{selectedRecipe.servings || 'Не указано'}</p>
            </div>
            <div className="description-tile">
              <h4>Описание:</h4>
              <p>{selectedRecipe.description || 'Описание отсутствует'}</p>
            </div>
          </div>

          <div className="center-column">
            <div className="info-time">
              <h4>Общее время приготовления:</h4>
              <p>{totalCookTime} минут</p>
            </div>
            <div className="instructions-section">
              <h4>Инструкции по приготовлению:</h4>
              <ul className="instructions-list">
                {selectedRecipe.instructions?.map((step, index) => (
                  <li key={index} className="instruction-step">
                    {step}
                  </li>
                )) || <p>Инструкций нет</p>}
              </ul>
            </div>
          </div>

          <div className="image-section">
            <img src={selectedRecipe.image} alt={selectedRecipe.name} className="recipe-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
