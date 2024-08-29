import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { checkingOpenedCards, restartGame } from '../Game/game-slice';

import { resetToDefault } from '../../utils/root-actions';
import { onSingleMode } from '../SingleMode/single-mode-slice';

const initialState = {
  enabled: false,
  players: [],
  currentPlayer: 1,
};

export const generatePlayers = createAsyncThunk(
  'multiplayerMode/generate-players',
  async (_, { getState }) => {
    const players = getState().settings.playersQuantity;
    return [...Array(players)].map((_, index) => ({
      id: index + 1,
      points: 0,
    }));
  }
);

const multiplayerModeSlice = createSlice({
  name: 'multiplayerMode',
  initialState,
  reducers: {
    onMultiplayerMode: (state) => {
      state.enabled = true;
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
          state.currentPlayer = initialState.currentPlayer;
          state.players = state.players.map((p) => ({ ...p, points: 0 }));
        }
      })
      .addCase(resetToDefault, (state) => {
        if (state.enabled) {
          return initialState;
        }
      })
      .addCase(onSingleMode, (state) => {
        state.enabled = false;
      });
  },
});

export const { onMultiplayerMode } = multiplayerModeSlice.actions;

export const multiplayerModeReducer = multiplayerModeSlice.reducer;
