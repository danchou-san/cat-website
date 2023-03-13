import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  emotion: string;
}

const initialState: AppState = {
  emotion: 'neutral',
}

export const counterSlice = createSlice({
  name: 'app',
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

export const { neutral, sad } = counterSlice.actions;
export default counterSlice.reducer;