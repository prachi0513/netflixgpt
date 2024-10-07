import { createSlice } from "@reduxjs/toolkit";

const searchGpt = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearch } = searchGpt.actions;
export default searchGpt.reducer;
