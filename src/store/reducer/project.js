import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});
export const { logout } = projectSlice.actions;

export default projectSlice.reducer;
