import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPlayer: 1,
  playersStatistic: [],
};

const multiplayerSlice = createSlice({
  name: "multiplayer",
  initialState,
  reducers: {},
});

export const multiplayerReducer = multiplayerSlice.reducer;
