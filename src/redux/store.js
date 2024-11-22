import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import filtersReducer from './slices/filtersSlice';
import modalReducer from './slices/modalSlice';
import recipesReducer from './slices/recipesSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    modal: modalReducer,
    recipes: recipesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
