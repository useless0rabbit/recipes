import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const data = await response.json();
  return data.recipes;
});

const initialState = {
  recipes: [],
  filteredRecipes: [],
  currentPage: 1,
  recipesPerPage: 6,
  loading: false,
  error: null,
  cuisines: [],
  mealTypes: [],
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    applyFilters(state, action) {
      const { cuisine, mealType, difficulty } = action.payload;
      state.filteredRecipes = state.recipes.filter((recipe) => {
        return (
          (cuisine === '' || recipe.cuisine === cuisine) &&
          (mealType === '' || recipe.mealType.includes(mealType)) &&
          (difficulty === '' || recipe.difficulty === difficulty)
        );
      });
      state.currentPage = 1;
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
        state.filteredRecipes = action.payload;

        state.cuisines = [...new Set(action.payload.map((recipe) => recipe.cuisine))];
        state.mealTypes = [...new Set(action.payload.flatMap((recipe) => recipe.mealType))];
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { applyFilters, setPage } = recipesSlice.actions;
export default recipesSlice.reducer;
