import { configureStore } from "@reduxjs/toolkit";
import GPTSlice from "./GPTSlice";
import SpeakSlice from "./SpeakSlice";
const store = configureStore({
  reducer: {
    gpt: GPTSlice.reducer,
    speak: SpeakSlice.reducer,
  },
  serializableCheck: false,
});

export default store;
