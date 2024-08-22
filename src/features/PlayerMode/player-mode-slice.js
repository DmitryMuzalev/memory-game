import { createSlice } from "@reduxjs/toolkit";
import { resetToDefault } from "../../utils/root-actions";
import { showMenu } from "../Menu/menu-slice";
import {
  checkingOpenedCards,
  restartGame,
  startGame,
} from "../Game/game-slice";
import { showFinish } from "../Finish/finish-slice";

const initialState = {
  enabled: false,
  timer: {
    isRun: false,
    time: 0,
  },
  moves: 0,
};

const playerModeSlice = createSlice({
  name: "playerMode",
  initialState,
  reducers: {
    changeTime: (state) => {
      state.timer.time += 1;
    },
    changePlayerMode: (state, action) => {
      state.enabled = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, (state) => state.enabled && initialState)
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
      });
  },
});

export const { changeTime, changePlayerMode } = playerModeSlice.actions;

export const playerModeReducer = playerModeSlice.reducer;
