import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postReducers from "./postReducer";
import userReducers from "./userReducers";

export const Store = configureStore({
  reducer: { userReducers, postReducers },
  middleware: [thunk],
});
