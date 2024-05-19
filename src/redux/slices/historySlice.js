import { createSlice } from '@reduxjs/toolkit';

import {
  getLocalStorageHistory,
  setLocalStorageHistory,
} from '../../utils/LocalStorageUtil';

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    histories: getLocalStorageHistory(),
  },
  reducers: {
    addToHistory: (state, action) => {
      const { userId, historiesId } = action.payload;

      if (!state.histories[userId]) {
        state.histories[userId] = [];
      }

      if (!state.histories[userId].includes(historiesId)) {
        state.histories[userId].push(historiesId);
        setLocalStorageHistory(state.histories);
      }
    },
  },
});

export const { addToHistory } = historySlice.actions;
export const selectHistory = (state) => state.history.histories;

export default historySlice.reducer;
