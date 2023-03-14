import { createSlice } from "@reduxjs/toolkit";

interface FavoritesState {
  favorites: string[];
}

const initialState: FavoritesState = {
  favorites: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favorites: (state, action) => {
      state.favorites = action.payload;
    }
  },
});

export const { favorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;