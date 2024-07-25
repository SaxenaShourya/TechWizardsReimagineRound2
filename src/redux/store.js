import { configureStore } from "@reduxjs/toolkit";
import cursorSliceReducer from "./cursorSlice";

const store = configureStore({
  reducer: {
    cursor: cursorSliceReducer,
  },
});

export default store;
