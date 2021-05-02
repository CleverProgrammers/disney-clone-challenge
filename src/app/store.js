import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
});
