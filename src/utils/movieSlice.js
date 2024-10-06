import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    allNowPlayingMovies: null,
    trailer: null,
  },
  reducers: {
    addAllPlayingMovies: (state, action) => {
      state.allNowPlayingMovies = action.payload;
    },
    addTrailerMovies: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addAllPlayingMovies, addTrailerMovies } = movieSlice.actions;

export default movieSlice.reducer;
