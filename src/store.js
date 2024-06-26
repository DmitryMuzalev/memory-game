import { configureStore } from "@reduxjs/toolkit";
import { settingsReducer } from "./features/Settings/settings-slice";
import { gameReducer } from "./features/Game/game-slice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer,
  },
  devTools: true,
});
