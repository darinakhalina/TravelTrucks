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
    setFilters: (state, { payload }) => {
      return { ...state, ...payload };
    },
    clearFilters: () => initialState,
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
