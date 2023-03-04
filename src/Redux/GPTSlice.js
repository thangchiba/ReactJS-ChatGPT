import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  accessToken: "",
  isSpeak: true,
  voice: "",
  rate: 1,
};

const GPTSlice = createSlice({
  name: "gpt",
  initialState: InitialState,
  reducers: {
    setAuth(state, action) {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
    clearAuth(state, action) {
      state = InitialState;
    },
    setSpeak(state, action) {
      state.isSpeak = action.payload.isSpeak;
    },
    setVoice(state, action) {
      state.voice = action.payload.voice;
    },
    setRate(state, action) {
      state.rate = action.payload.rate;
    },
  },
});

export const gptAction = GPTSlice.actions;
export default GPTSlice;
