import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cuisine: '',
  mealType: '',
  difficulty: '',
  currentPage: 1,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCuisine: (state, action) => {
      state.cuisine = action.payload;
      state.currentPage = 1;
    },
    setMealType: (state, action) => {
      state.mealType = action.payload;
      state.currentPage = 1;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
      state.currentPage = 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetFilters: (state) => {
      state.cuisine = '';
      state.mealType = '';
      state.difficulty = '';
      state.currentPage = 1;
    },
  },
});

export const { setCuisine, setMealType, setDifficulty, setPage, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
