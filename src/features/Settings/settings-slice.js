import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'numbers',
  playersQuantity: 1,
  grid: '4x4',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    changePlayersQuantity: (state, action) => {
      state.playersQuantity = action.payload;
    },
    changeGrid: (state, action) => {
      state.grid = action.payload;
    },
  },
  selectors: {
    getSettings: (state) => state,
  },
});

export const { changeTheme, changePlayersQuantity, changeGrid } =
  settingsSlice.actions;
export const { getSettings } = settingsSlice.selectors;
export const settingsReducer = settingsSlice.reducer;
