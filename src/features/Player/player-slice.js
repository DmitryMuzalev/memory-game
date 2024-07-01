import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 0,
  moves: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
});

export const gameReducer = playerSlice.reducer;
