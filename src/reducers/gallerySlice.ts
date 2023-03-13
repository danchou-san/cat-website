import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  randomImageUrl: string;
}

const initialState: AppState = {
  randomImageUrl: '',
}

export const counterSlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    imageUrl: (state, action) => {
      state.randomImageUrl = action.payload;
    }
  },
});

export const { imageUrl } = counterSlice.actions;
export default counterSlice.reducer;