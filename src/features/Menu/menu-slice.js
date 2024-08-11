import { createSlice } from '@reduxjs/toolkit';
import { resetToDefault } from '../../utils/root-actions';
import { restartGame, resumeGame } from '../Game/game-slice';

const menuSlice = createSlice({
  name: 'menu',
  initialState: false,
  reducers: {
    showMenu: () => true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, (state) => state && false)
      .addCase(resumeGame, () => false)
      .addCase(restartGame, () => false);
  },
});

export const { showMenu } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
