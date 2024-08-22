import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { checkingOpenedCards, restartGame } from "../Game/game-slice";

import { resetToDefault } from "../../utils/root-actions";

const initialState = {
  enabled: false,
  players: [],
  currentPlayer: 1,
};

export const generatePlayers = createAsyncThunk(
  "multiplayerMode/generate-players",
  async (_, { getState }) => {
    const players = getState().settings.playersQuantity;
    return [...Array(players)].map((_, index) => ({
      id: index + 1,
      points: 0,
    }));
  }
);

const multiplayerModeSlice = createSlice({
  name: "multiplayerMode",
  initialState,
  reducers: {
    changeMultiplayerMode: (state, action) => {
      state.enabled = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generatePlayers.fulfilled, (state, action) => {
        if (state.enabled) {
          state.players = action.payload;
        }
      })
      .addCase(checkingOpenedCards.fulfilled, (state, action) => {
        if (state.enabled) {
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
        if (state.enabled) {
          state.currentPlayer = 1;
          state.players = state.players.map((p) => ({ ...p, points: 0 }));
        }
      })
      .addCase(resetToDefault, (state) => state.enabled && initialState);
  },
});

export const { changeMultiplayerMode } = multiplayerModeSlice.actions;

export const multiplayerModeReducer = multiplayerModeSlice.reducer;
