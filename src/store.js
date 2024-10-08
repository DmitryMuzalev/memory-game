import { configureStore } from '@reduxjs/toolkit';

import { gameReducer } from './features/Game/game-slice';
import { settingsReducer } from './features/Settings/settings-slice';
import { singleModeReducer } from './features/SingleMode/single-mode-slice';
import { multiplayerModeReducer } from './features/MultiplayerMode/multiplayer-mode-slice';
import { finishReducer } from './features/Finish/finish-slice';
import { menuReducer } from './features/Menu/menu-slice';
import { historyReducer } from './features/History/history-slice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer,
    singleMode: singleModeReducer,
    multiplayerMode: multiplayerModeReducer,
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
