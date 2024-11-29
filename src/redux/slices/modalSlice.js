import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  selectedRecipe: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectedRecipe = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedRecipe = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
