import { configureStore } from "@reduxjs/toolkit";
import { settingsReducer } from "./features/Settings/settings-slice";
import { gameReducer } from "./features/Game/game-slice";
import { historyReducer } from "./features/History/history-slice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer,
    history: historyReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
