import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  emotion: string;
}

const initialState: AppState = {
  emotion: 'neutral',
}

export const appSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    neutral: (state) => {
      state.emotion = 'neutral';
    },
    sad: (state) => {
      state.emotion = 'sad';
    }
  },
});

export const { neutral, sad } = appSlice.actions;
export default appSlice.reducer;