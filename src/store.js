import { configureStore } from "@reduxjs/toolkit";

import { gameReducer } from "./features/Game/game-slice";
import { settingsReducer } from "./features/Settings/settings-slice";
import { playerModeReducer } from "./features/PlayerMode/player-mode-slice";
import { finishReducer } from "./features/Finish/finish-slice";
import { menuReducer } from "./features/Menu/menu-slice";
import { historyReducer } from "./features/History/history-slice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer,
    playerMode: playerModeReducer,
    finish: finishReducer,
    menu: menuReducer,
    history: historyReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
