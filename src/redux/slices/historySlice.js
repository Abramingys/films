import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    histories: [],
  },
  reducers: {
    addToHistory: (state, action) => {
      const item = action.payload;
      state.histories.push(item);
    },
  },
});

export const { addToHistory } = historySlice.actions;
export const selectHistory = (state) => state.history.histories;

export default historySlice.reducer;
