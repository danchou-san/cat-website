import { configureStore } from "@reduxjs/toolkit";
import appReducer from './reducers/appSlice';
import galleryReducer from './reducers/gallerySlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    gallery: galleryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;