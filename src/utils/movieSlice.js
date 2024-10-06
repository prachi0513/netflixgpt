import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addAllPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addAllPlayingMovies } = movieSlice.actions;

export default movieSlice.reducer;
