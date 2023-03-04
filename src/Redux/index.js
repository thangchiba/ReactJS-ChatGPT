import { configureStore } from "@reduxjs/toolkit";
import GPTSlice from "./GPTSlice";
const store = configureStore({
  reducer: {
    gpt: GPTSlice.reducer,
  },
});

export default store;
