import { configureStore } from '@reduxjs/toolkit';

import { gameReducer } from './features/Game/game-slice';
import { settingsReducer } from './features/Settings/settings-slice';
import { timerReducer } from './features/Timer/timer-slice';
import { finishReducer } from './features/Finish/finish-slice';
import { menuReducer } from './features/Menu/menu-slice';
import { historyReducer } from './features/History/history-slice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer,
    timer: timerReducer,
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
