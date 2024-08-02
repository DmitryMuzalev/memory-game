import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import data from '../../data';
import { shuffleCards } from '../../utils/shuffle-algorithm';

export const loadCards = createAsyncThunk('game/load-cards', async (grid) => {
  const items = grid === '4x4' ? data.slice(0, 8) : data;
  return shuffleCards(items.concat(items));
});

const initialState = {
  status: 'setting', // "finished" | "running" | "history"
  cards: [],
  openCard: null,
  currentPlayer: 2,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },

    openCard: (state, action) => {
      state.cards[action.payload].status = 'open';
      if (!state.openCard) {
        state.openCard = action.payload;
      }
    },
    toggleShowHistory: (state) => {
      state.isShowHistory = !state.isShowHistory;
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
    getIsShowHistory: (state) => state.isShowHistory,
    getCurrentPlayer: (state) => state.currentPlayer,
  },
});

export const { changeStatus, openCard, toggleShowHistory } = gameSlice.actions;
export const { getStatus, getCards, getIsShowHistory, getCurrentPlayer } =
  gameSlice.selectors;

export const gameReducer = gameSlice.reducer;
