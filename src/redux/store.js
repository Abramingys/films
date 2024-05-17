import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import favoriteReducer from './slices/favoriteSlice';
import historyReducer from './slices/historySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorite: favoriteReducer,
    history: historyReducer,
  },
});
