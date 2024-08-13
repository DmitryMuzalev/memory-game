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
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, () => initialState)
      .addCase(showMenu, (state) => {
        state.timer.isRun = false;
      })
      .addCase(showFinish, (state) => {
        state.timer.isRun = false;
      })
      .addCase(startGame, (state) => {
        if (!state.timer.isRun) state.timer.isRun = true;
      })
      .addCase(restartGame, (state) => {
        state.timer.isRun = true;
        state.timer.time = 0;
        state.moves = 0;
      })
      .addCase(checkingOpenedCards.fulfilled, (state) => {
        state.moves += 1;
      });
  },
});

export const { changeTime } = playerModeSlice.actions;

export const playerModeReducer = playerModeSlice.reducer;
