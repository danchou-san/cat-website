import { createSlice } from "@reduxjs/toolkit";

interface GalleryState {
  breed: string,
  category: string,
  type: string,
  page: string,
  catUrls: string
}

const initialState: GalleryState = {
  breed: '',
  category: '',
  type: '',
  page: '',
  catUrls: '',
}

export const searchCatSlice = createSlice({
  name: 'searchCat',
  initialState,
  reducers: {
    breed: (state, action) => {
      state.breed = action.payload;
    },
    category: (state, action) => {
      state.category = action.payload;
    },
    type: (state, action) => {
      state.type = action.payload;
    },
    page: (state, action) => {
      state.page = action.payload;
    },
    catUrls: (state, action) => {
      state.catUrls = action.payload;
    }
  },
});

export const { breed, category, type, page, catUrls } = searchCatSlice.actions;
export default searchCatSlice.reducer;