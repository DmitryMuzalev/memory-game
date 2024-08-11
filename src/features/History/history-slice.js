import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: false,
  reducers: {
    toggleHistory: (state) => !state,
  },
});

export const { toggleHistory } = historySlice.actions;

export const historyReducer = historySlice.reducer;
