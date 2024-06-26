import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "setting", // "finished" | "running"
  isShowStatistic: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    toggleIsShowStatistic: (state) => {
      state.isShowStatistic = !state.isShowStatistic;
    },
  },
  selectors: {
    getIsShowStatistic: (state) => state.isShowStatistic,
    getStatus: (state) => state.status,
  },
});

export const { changeStatus, toggleIsShowStatistic } = gameSlice.actions;
export const { getStatus, getIsShowStatistic } = gameSlice.selectors;

export const gameReducer = gameSlice.reducer;
