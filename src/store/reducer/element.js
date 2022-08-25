import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elementList: [],
  input: "",
  todo: "",
  inId: "",
};

export const elementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    // todo list cha
    setInputElement: (state, action) => {
      state.input = action.payload;
    },
    addElement: (state) => {
      if (!state.input) return;
      const item = { id: Date.now(), value: state.input, elementData: [] };
      const listE = [...state.elementList];
      listE.unshift(item);
      state.elementList = listE;
      console.log(state.elementList);
      state.input = "";
    },
    deleteElement: (state, action) => {
      const listE = [...state.elementList].filter(
        (item) => item.id !== action.payload
      );
      state.elementList = listE;
    },
    // todo list con
    setInputTodo: (state, action) => {
      state.todo = action.payload.value;
      state.inId = action.payload.inId;
    },
    addTodo: (state) => {
      console.log(state.elementList);
    },
  },
});
export const {
  setInputElement,
  addElement,
  deleteElement,
  setInputTodo,
  addTodo,
} = elementSlice.actions;

export default elementSlice.reducer;
