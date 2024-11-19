import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../redux/slices/recipesSlice';
import Card from './Card';
import './CardContainer.css';
import Pagination from './Pagination';

const CardContainer = ({ recipes }) => {
  const dispatch = useDispatch();
  const { currentPage, recipesPerPage } = useSelector((state) => state.recipes);

  const indexOfLastCard = currentPage * recipesPerPage;
  const indexOfFirstCard = indexOfLastCard - recipesPerPage;

  const currentCards = recipes.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  return (
    <div className="card-container">
      <div className="card-header">
        <h2>Найденные рецепты: <span className="card-header-count">{recipes.length}</span></h2> 
      </div>
      <div className="card-wrapper">
        {currentCards.map((recipe) => (
          <Card key={recipe.id} recipe={recipe}/>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default CardContainer;
