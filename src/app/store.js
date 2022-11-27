import { configureStore } from '@reduxjs/toolkit';
import searchPlaceReducer from '../pages/searchPlace/searchPlaceSlice';

export const store = configureStore({
  reducer: {
    places: searchPlaceReducer,
  },
});
