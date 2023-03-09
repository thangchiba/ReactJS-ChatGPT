import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  isSpeaking: false,
  isSpeak: false, //Speakable setting
  voice: "",
  rate: 1,
};

const SpeakSlice = createSlice({
  name: "speak",
  initialState: InitialState,
  reducers: {
    config(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const speakAction = SpeakSlice.actions;
export default SpeakSlice;
