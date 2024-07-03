import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import data from "../../data";
import { shuffleCards } from "../../utils/shuffle-algorithm";

export const loadCards = createAsyncThunk("game/load-cards", async (grid) => {
  const items = grid === "4x4" ? data.slice(0, 8) : data;
  return shuffleCards(items.concat(items));
});

const initialState = {
  status: "setting", // "finished" | "running" | "history"
  cards: [],
  openCard: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },

    openCard: (state, action) => {
      state.cards[action.payload].status = "open";
      if (!state.openCard) {
        state.openCard = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
  selectors: {
    getStatus: (state) => state.status,
    getCards: (state) => state.cards,
  },
});

export const { changeStatus, openCard } = gameSlice.actions;
export const { getStatus, getCards } = gameSlice.selectors;

export const gameReducer = gameSlice.reducer;
