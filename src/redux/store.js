import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import { campersReducer } from './campersSlice';
import { filtersReducer } from './filtersSlice';
import { favoritesReducer } from './favoritesSlice';

const persistFavoritesConfig = {
  key: 'favorites',
  storage,
};

const rootReducer = combineReducers({
  favorites: persistReducer(persistFavoritesConfig, favoritesReducer),
  campers: campersReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

export const persistor = persistStore(store);
