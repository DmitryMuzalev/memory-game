import { createSlice } from '@reduxjs/toolkit';
import { resetToDefault } from '../../utils/root-actions';
import { showMenu } from '../Menu/menu-slice';
import {
  checkingOpenedCards,
  restartGame,
  startGame,
} from '../Game/game-slice';
import { showFinish } from '../Finish/finish-slice';
import { onMultiplayerMode } from '../MultiplayerMode/multiplayer-mode-slice';

const initialState = {
  enabled: true,
  timer: {
    isRun: false,
    time: 0,
  },
  moves: 0,
};

const playerModeSlice = createSlice({
  name: 'playerMode',
  initialState,
  reducers: {
    changeTime: (state) => {
      state.timer.time += 1;
    },
    onPlayerMode: (state) => {
      state.enabled = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, () => initialState)
      .addCase(showMenu, (state) => {
        if (state.enabled) {
          state.timer.isRun = false;
        }
      })
      .addCase(showFinish, (state) => {
        if (state.enabled) {
          state.timer.isRun = false;
        }
      })
      .addCase(startGame, (state) => {
        if (state.enabled) state.timer.isRun = true;
      })
      .addCase(restartGame, (state) => {
        if (state.enabled) {
          state.timer.isRun = true;
          state.timer.time = 0;
          state.moves = 0;
        }
      })
      .addCase(checkingOpenedCards.fulfilled, (state) => {
        if (state.enabled) {
          state.moves += 1;
        }
      })
      .addCase(onMultiplayerMode, (state) => {
        state.enabled = false;
      });
  },
});

export const { changeTime, onPlayerMode } = playerModeSlice.actions;

export const playerModeReducer = playerModeSlice.reducer;
