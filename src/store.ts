import { configureStore } from "@reduxjs/toolkit";
import appReducer from './reducers/appSlice';
import galleryReducer from './reducers/gallerySlice';
import favoritesReducer from "./reducers/favoritesSlice";
import searchCatReducer from "./reducers/searchCatSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    gallery: galleryReducer,
    favorites: favoritesReducer,
    searchCat: searchCatReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;