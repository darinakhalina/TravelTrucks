import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  AC: false,
  TV: false,
  kitchen: false,
  bathroom: false,
  autoTransmission: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state = payload;
    },
    clearFilters: () => initialState,
  },
});

export const selectNameFilter = state => state.filters;

export const { setFilter, clearFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
