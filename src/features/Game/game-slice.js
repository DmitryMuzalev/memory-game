import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import data from '../../data';
import { shuffleCards } from '../../utils/shuffle-algorithm';
import { resetToDefault } from '../../utils/root-actions';

export const loadCards = createAsyncThunk('game/load-cards', async (grid) => {
  const items = grid === '4x4' ? data.slice(0, 8) : data;
  return shuffleCards(items.concat(items));
});

export const checkingOpenedCards = createAsyncThunk(
  'game/checking-opened-cards',
  async (cards) => {
    return cards[0].number === cards[1].number;
  }
);

export const resumeGame = createAction('game/resumeGame');

const initialState = {
  running: false,
  cards: [],
  openedCards: [],
  movesCounter: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.running = true;
    },
    stopGame: (state) => {
      state.running = false;
    },
    openCard: (state, action) => {
      if (state.openedCards.length !== 2) {
        state.openedCards.push(state.cards[action.payload]);
        state.cards[action.payload].status = 'open';
      }
    },
    restartGame: (state) => {
      state.openedCards = [];
      state.movesCounter = 0;
      state.cards.map((card) => {
        if (card.status !== 'closed') card.status = 'closed';
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadCards.fulfilled, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(checkingOpenedCards.fulfilled, (state, action) => {
        const [fstCard, secCard] = [
          state.openedCards[0].number,
          state.openedCards[1].number,
        ];
        if (action.payload) {
          state.cards.map((card) => {
            if (card.number === fstCard || card.number === secCard) {
              card.status = 'guessed';
            }
          });
        } else {
          state.cards.map((card) => {
            if (card.number === fstCard || card.number === secCard) {
              card.status = 'closed';
            }
          });
        }
        state.openedCards = [];
        state.movesCounter = state.movesCounter + 1;
      })
      .addCase(resetToDefault, () => initialState);
  },

  selectors: {
    getStatus: (state) => state.running,
    getCards: (state) => state.cards,
    getOpenedCards: (state) => state.openedCards,
    getMovesCounter: (state) => state.movesCounter,
  },
});

export const { startGame, stopGame, openCard, restartGame } = gameSlice.actions;
export const { getStatus, getCards, getOpenedCards, getMovesCounter } =
  gameSlice.selectors;

export const gameReducer = gameSlice.reducer;
