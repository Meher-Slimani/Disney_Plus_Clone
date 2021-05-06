import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieslice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieslice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieslice.reducer;
