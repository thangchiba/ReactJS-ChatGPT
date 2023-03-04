import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  accessToken: "thangchiba",
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
  },
});

export const gptAction = GPTSlice.actions;
export default GPTSlice;
