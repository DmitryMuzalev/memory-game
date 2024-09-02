import { createSlice } from '@reduxjs/toolkit';

import { showMenu } from '../Menu/menu-slice';
import {
  checkingOpenedCards,
  restartGame,
  startGame,
} from '../Game/game-slice';
import { resetToDefault } from '../../utils/root-actions';
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

const singleModeSlice = createSlice({
  name: 'singleMode',
  initialState,
  reducers: {
    changeTime: (state) => {
      state.timer.time += 1;
    },
    onSingleMode: (state) => {
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

export const { changeTime, onSingleMode } = singleModeSlice.actions;

export const singleModeReducer = singleModeSlice.reducer;
