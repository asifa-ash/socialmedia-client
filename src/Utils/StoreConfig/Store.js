import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

export const Store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});
