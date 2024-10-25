import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      if (!state.ids.includes(payload)) {
        state.ids.push(payload);
      }
    },
    removeFavorite: (state, { payload }) => {
      state.ids = state.ids.filter(id => id !== payload);
    },
    clearFavorites: () => initialState,
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
