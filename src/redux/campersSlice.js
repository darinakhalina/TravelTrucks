import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearItems: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.items];
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const selectCampers = state => state.campers.items;

export const { clearItems } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
