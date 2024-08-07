import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    running: false,
    value: 0,
  },
  reducers: {
    startTimer: (state) => {
      state.running = true;
    },
    stopTimer: (state) => {
      state.running = false;
    },
    resetTimer: (state) => {
      state.running = false;
      state.value = 0;
    },
    changeTimerValue: (state) => {
      state.value += 1;
    },
  },
  selectors: {
    getTimerValue: (state) => state,
  },
});

export const { changeTimerValue, startTimer, stopTimer } = timerSlice.actions;
export const { getTimer } = timerSlice.selectors;

export const timerReducer = timerSlice.reducer;
