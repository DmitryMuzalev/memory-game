import { createSlice } from '@reduxjs/toolkit';
import { resetToDefault } from '../../utils/root-actions';

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
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => initialState);
  },
});

export const { changeTheme, changePlayersQuantity, changeGrid } =
  settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
