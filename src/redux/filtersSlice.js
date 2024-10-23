import { createSlice } from '@reduxjs/toolkit';

// toDo: add filters - name only for test
const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = state => state.filters.name;

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
