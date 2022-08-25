import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      localStorage.removeItem();
    },
  },
});
export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
