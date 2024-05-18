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
      const item = action.payload;
      if (!state.histories.includes(item)) {
        state.histories.push(item);
        setLocalStorageHistory(state.histories);
      }
    },
    loadHistoryFromLocalStorage: (state) => {
      state.histories = getLocalStorageHistory();
    },
  },
});

export const { addToHistory, loadHistoryFromLocalStorage } =
  historySlice.actions;
export const selectHistory = (state) => state.history.histories;

export default historySlice.reducer;
