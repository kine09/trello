import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import projectReducer from "./reducer/project";
import elementReducer from "./reducer/element";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    project: projectReducer,
    element: elementReducer,
  },
});
