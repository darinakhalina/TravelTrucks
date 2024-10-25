import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.items;
export const selectSelectedCamper = state => state.campers.selectedItem;
export const selectTotal = state => state.campers.total;
export const selectCurrentPage = state => state.campers.currentPage;
export const selectIsLoading = state => state.campers.isLoading;
export const selectFilters = state => state.filters;
export const selectFavorites = state => state.favorites.ids;
export const selectIsFavorite = id =>
  createSelector([selectFavorites], favorites => favorites.includes(id));
