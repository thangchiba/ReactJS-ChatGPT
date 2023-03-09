import { configureStore } from "@reduxjs/toolkit";
import GPTSlice from "./GPTSlice";
import TeachSlice from "./TeachSlice";
import SpeakSlice from "./SpeakSlice";
const store = configureStore({
  reducer: {
    gpt: GPTSlice.reducer,
    speak: SpeakSlice.reducer,
    teach: TeachSlice.reducer,
  },
});

export default store;
