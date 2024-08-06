import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import data from "../../data";
import { shuffleCards } from "../../utils/shuffle-algorithm";

export const loadCards = createAsyncThunk("game/load-cards", async (grid) => {
  const items = grid === "4x4" ? data.slice(0, 8) : data;
  return shuffleCards(items.concat(items));
});

export const checkingOpenedCards = createAsyncThunk(
  "game/checking-opened-cards",
  async (cards) => {
    return cards[0].number === cards[1].number;
  }
);

const initialState = {
  status: "setting", // "finished" | "running" | "history" | "pause"
  cards: [],
  openedCards: [],
  movesCounter: 0,
  time: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },

    changeTime: (state, action) => {
      state.time = action.payload;
    },

    openCard: (state, action) => {
      if (state.openedCards.length !== 2) {
        state.openedCards.push(state.cards[action.payload]);
        state.cards[action.payload].status = "open";
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
    builder.addCase(checkingOpenedCards.fulfilled, (state, action) => {
      const [fstCard, secCard] = [
        state.openedCards[0].number,
        state.openedCards[1].number,
      ];
      if (action.payload) {
        state.cards.map((card) => {
          if (card.number === fstCard || card.number === secCard) {
            card.status = "guessed";
          }
        });
      } else {
        state.cards.map((card) => {
          if (card.number === fstCard || card.number === secCard) {
            card.status = "closed";
          }
        });
      }
      state.openedCards = [];
      state.movesCounter = state.movesCounter + 1;
    });
  },
  selectors: {
    getStatus: (state) => state.status,
    getCards: (state) => state.cards,
    getOpenedCards: (state) => state.openedCards,
    getMovesCounter: (state) => state.movesCounter,
    getTime: (state) => state.time,
  },
});

export const { changeStatus, openCard, changeTime } = gameSlice.actions;
export const { getStatus, getCards, getOpenedCards, getMovesCounter, getTime } =
  gameSlice.selectors;

export const gameReducer = gameSlice.reducer;
