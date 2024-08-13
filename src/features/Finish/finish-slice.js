import { createSlice } from "@reduxjs/toolkit";

import { resetToDefault } from "../../utils/root-actions";
import { restartGame } from "../Game/game-slice";

const finishSlice = createSlice({
  name: "finish",
  initialState: false,
  reducers: {
    showFinish: () => true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, () => false)
      .addCase(restartGame, (state) => state && false);
  },
});

export const { showFinish } = finishSlice.actions;
export const finishReducer = finishSlice.reducer;
