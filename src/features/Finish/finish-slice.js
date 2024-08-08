import { createSlice } from "@reduxjs/toolkit";

const finishSlice = createSlice({
  name: "finish",
  initialState: {
    isShow: false,
  },
  reducers: {
    showFinish: (state, action) => {
      state.isShow = action.payload;
    },
  },
  selectors: {
    getIsShowFinish: (state) => state.isShow,
  },
});

export const { showFinish } = finishSlice.actions;
export const { getIsShowFinish } = finishSlice.selectors;

export const finishReducer = finishSlice.reducer;
