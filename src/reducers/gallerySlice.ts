import { createSlice } from "@reduxjs/toolkit";

interface GalleryState {
  randomImageUrl: string;
}

const initialState: GalleryState = {
  randomImageUrl: '',
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    imageUrl: (state, action) => {
      state.randomImageUrl = action.payload;
    }
  },
});

export const { imageUrl } = gallerySlice.actions;
export default gallerySlice.reducer;