import { createSlice } from '@reduxjs/toolkit';
import { resetToDefault } from '../../utils/root-actions';

const finishSlice = createSlice({
  name: 'finish',
  initialState: false,
  reducers: {
    toggleFinish: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => false);
  },
});

export const { toggleFinish } = finishSlice.actions;

export const finishReducer = finishSlice.reducer;
