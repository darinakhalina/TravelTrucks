import { createSlice } from '@reduxjs/toolkit';

// toDo: add filters - name only for test
const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.name = payload;
    },
    clearFilters: () => initialState,
  },
});

export const selectNameFilter = state => state.filters.name;

export const { setFilter, clearFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
