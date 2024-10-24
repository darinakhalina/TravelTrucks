import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  total: 0,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearState: state => {
      state.items = [];
      state.total = 0;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
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

export const selectTotal = state => state.campers.total;
export const selectCampers = state => state.campers.items;

export const { clearState } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
