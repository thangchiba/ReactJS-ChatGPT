import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const savedTeachList = localStorage.getItem("teachList");
const InitialState = savedTeachList ? JSON.parse(savedTeachList) : [];

const TeachSlice = createSlice({
  name: "teach",
  initialState: InitialState,
  reducers: {
    addTeach(state, action) {
      const id = uuidv4();
      const newTeach = {
        id: id,
        content: "",
      };
      state.push(newTeach);
      updateTeachLocalStorage([...state]);
    },
    updateTeach(state, action) {
      const { id, content } = action.payload;
      const indexToUpdate = state.findIndex((item) => item.id === id);
      if (indexToUpdate !== -1) {
        const newTeach = { id, content };
        state[indexToUpdate] = newTeach;
      }
      updateTeachLocalStorage([...state]);
    },
    removeTeach(state, action) {
      const id = action.payload;
      const indexToRemove = state.findIndex((item) => item.id === id);
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
      updateTeachLocalStorage([...state]);
    },
  },
});

function updateTeachLocalStorage(listTeach) {
  localStorage.setItem("teachList", JSON.stringify(listTeach));
}

export const teachAction = TeachSlice.actions;
export default TeachSlice;
