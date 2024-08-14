import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { checkingOpenedCards, restartGame } from "../Game/game-slice";

import { resetToDefault } from "../../utils/root-actions";

const initialState = {
  players: [],
  currentPlayer: 1,
};

export const generatePlayers = createAsyncThunk(
  "multiplayerMode/generate-players",
  async (players) => {
    if (players !== 1) {
      return [...Array(players)].map((_, index) => ({
        id: index + 1,
        points: 0,
      }));
    } else {
      return [];
    }
  }
);

const multiplayerModeSlice = createSlice({
  name: "multiplayerMode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generatePlayers.fulfilled, (state, action) => {
        state.players = action.payload;
      })
      .addCase(checkingOpenedCards.fulfilled, (state, action) => {
        if (state.players.length) {
          if (action.payload) {
            state.players[state.currentPlayer - 1].points += 1;
          } else {
            state.currentPlayer =
              state.players.length === state.currentPlayer
                ? 1
                : state.currentPlayer + 1;
          }
        }
      })
      .addCase(restartGame, (state) => {
        if (state.players.length) {
          state.currentPlayer = 1;
          state.players = state.players.map((p) => ({ ...p, points: 0 }));
        }
      })
      .addCase(resetToDefault, () => initialState);
  },
});

export const multiplayerModeReducer = multiplayerModeSlice.reducer;
