import { createSlice } from "@reduxjs/toolkit";

export const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    type: "default",
  },
  reducers: {
    setCursorDefault: (state) => {
      state.type = "default";
    },
    setCursorZoomed: (state) => {
      state.type = "zoomed";
    },
    setCursorArrow: (state) => {
      state.type = "arrow";
    },
    hideCursor: (state) => {
      state.type = "hidden";
    },
  },
});

export const { setCursorDefault, hideCursor, setCursorZoomed, setCursorArrow } =
  cursorSlice.actions;

export default cursorSlice.reducer;
