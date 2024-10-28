import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamper, fetchMoreCampers } from './campersOps';
import { INITIAL_PAGE } from '../constants/constants';

const initialState = {
  selectedItem: null,
  items: [],
  isLoading: false,
  error: null,
  total: 0,
  currentPage: 1,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearItemsState: state => {
      state.items = [];
      state.total = 0;
      state.error = null;
    },
    clearSelectedItem: state => {
      state.selectedItem = null;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    resetCurrentPage: state => {
      state.currentPage = INITIAL_PAGE;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = payload.items;
        state.total = payload.total;
      })
      .addCase(fetchMoreCampers.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
      })
      .addCase(fetchCamper.fulfilled, (state, { payload }) => {
        state.selectedItem = payload;
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

export const { clearItemsState, clearSelectedItem, resetCurrentPage, setCurrentPage } =
  campersSlice.actions;

export const campersReducer = campersSlice.reducer;
