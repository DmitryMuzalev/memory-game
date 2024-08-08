import { configureStore } from "@reduxjs/toolkit";
import { settingsReducer } from "./features/Settings/settings-slice";
import { gameReducer } from "./features/Game/game-slice";
import { historyReducer } from "./features/History/history-slice";
import { timerReducer } from "./features/Timer/timer-slice";
import { finishReducer } from "./features/Finish/finish-slice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer,
    history: historyReducer,
    timer: timerReducer,
    finish: finishReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
