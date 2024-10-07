import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    allNowPlayingMovies: null,
    allPopularMovies: null,
    allTopRatedMovies: null,
    allUpcomingMovies: null,
    trailer: null,
  },
  reducers: {
    addAllPlayingMovies: (state, action) => {
      state.allNowPlayingMovies = action.payload;
    },
    addTrailerMovies: (state, action) => {
      state.trailer = action.payload;
    },
    addAllPopularMovies: (state, action) => {
      state.allPopularMovies = action.payload;
    },
    addAllTopRatedMovies: (state, action) => {
      state.allTopRatedMovies = action.payload;
    },
    addAllUpcomingMovies: (state, action) => {
      state.allUpcomingMovies = action.payload;
    },
  },
});

export const {
  addAllPlayingMovies,
  addTrailerMovies,
  addAllPopularMovies,
  addAllTopRatedMovies,
  addAllUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
