import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import favoriteReducer from './slices/favoriteSlice';
import { historyMiddleware } from './slices/historyMiddleware';
import historyReducer from './slices/historySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorite: favoriteReducer,
    history: historyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(historyMiddleware),
});
