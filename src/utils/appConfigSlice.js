import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    langSelected: "en",
  },
  reducers: {
    addChangelanguage: (state, action) => {
      state.langSelected = action.payload;
    },
  },
});

export const { addChangelanguage } = appConfigSlice.actions;
export default appConfigSlice.reducer;
