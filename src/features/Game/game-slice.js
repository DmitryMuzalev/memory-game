import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import data from "../../data";
import { shuffleCards } from "../../utils/shuffle-algorithm";
import { resetToDefault } from "../../utils/root-actions";

export const loadCards = createAsyncThunk(
  "game/load-cards",
  async (_, { getState }) => {
    const items = getState().settings.grid === "4x4" ? data.slice(0, 8) : data;
    return shuffleCards(items.concat(items));
  }
);

export const checkingOpenedCards = createAsyncThunk(
  "game/checking-opened-cards",
  async (_, { getState }) => {
    const [fstCardID, secCardID] = getState().game.openedCards;
    const fstCard = getState().game.cards[fstCardID];
    const secCard = getState().game.cards[secCardID];
    return fstCard.number === secCard.number;
  }
);

const initialState = {
  isRun: false,
  cards: [],
  openedCards: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.isRun = true;
    },

    stopGame: (state) => {
      state.isRun = false;
    },

    openCard: (state, action) => {
      if (state.openedCards.length !== 2) {
        const id = action.payload;
        state.openedCards.push(id);
        state.cards[id].status = "open";
      }
    },

    restartGame: (state) => {
      state.openedCards = [];
      state.cards.map((card) => {
        if (card.status !== "closed") card.status = "closed";
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadCards.fulfilled, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(checkingOpenedCards.fulfilled, (state, action) => {
        const [fstCardID, secCardID] = state.openedCards;
        if (action.payload) {
          state.cards[fstCardID].status = "guessed";
          state.cards[secCardID].status = "guessed";
        } else {
          state.cards[fstCardID].status = "closed";
          state.cards[secCardID].status = "closed";
        }
        state.openedCards = [];
      })
      .addCase(resetToDefault, () => initialState);
  },
});

export const { startGame, stopGame, openCard, restartGame } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
