import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/ProjectReducers";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
