import { createSlice } from '@reduxjs/toolkit';
import { resetToDefault } from '../../utils/root-actions';
import { showMenu } from '../Menu/menu-slice';
import { restartGame, resumeGame } from '../Game/game-slice';

const initialState = {
  running: false,
  value: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.running = true;
    },
    stopTimer: (state) => {
      state.running = false;
    },
    resetTimer: () => {
      return initialState;
    },
    changeTimerValue: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, () => initialState)
      .addCase(showMenu, (state) => {
        state.running = false;
      })
      .addCase(resumeGame, (state) => {
        state.running = true;
      })
      .addCase(restartGame, (state) => {
        state.running = true;
        state.value = 0;
      });
  },
});

export const { changeTimerValue, startTimer, stopTimer, resetTimer } =
  timerSlice.actions;

export const timerReducer = timerSlice.reducer;
