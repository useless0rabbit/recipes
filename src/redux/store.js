import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice'; // Импорт API
import filtersReducer from './slices/filtersSlice';
import modalReducer from './slices/modalSlice';
import recipesReducer from './slices/recipesSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    modal: modalReducer,
    recipes: recipesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // Добавляем API-редюсер
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Добавляем middleware API
});

export default store;
