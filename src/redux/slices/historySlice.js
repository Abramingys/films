import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorageHistory } from '../../utils/LocalStorageUtil';

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
      }
    },
  },
});

export const { addToHistory } = historySlice.actions;
export const selectHistory = (state) => state.history.histories;

export default historySlice.reducer;
