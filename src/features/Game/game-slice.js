import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import data from "../../data";
import { shuffleCards } from "../../utils/shuffle-algorithm";

export const loadCards = createAsyncThunk("game/load-cards", async (grid) => {
  const items = grid === "4x4" ? data.slice(0, 8) : data;
  return shuffleCards(items.concat(items));
});

const initialState = {
  status: "setting", // "finished" | "running"
  isShowStatistic: false,
  cards: [],
  openCards: [],
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

    openCard: (state, action) => {
      state.cards[action.payload].status = "open";
    },

    closedCard: (state, action) => {
      state.cards[action.payload].status = "closed";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
  selectors: {
    getIsShowStatistic: (state) => state.isShowStatistic,
    getStatus: (state) => state.status,
    getCards: (state) => state.cards,
  },
});

export const { changeStatus, toggleIsShowStatistic, openCard, closedCard } =
  gameSlice.actions;
export const { getStatus, getIsShowStatistic, getCards } = gameSlice.selectors;

export const gameReducer = gameSlice.reducer;
