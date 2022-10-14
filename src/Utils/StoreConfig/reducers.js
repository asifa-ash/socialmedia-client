import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as AuthApi from "../../api/AuthRequest";
import { useDispatch } from "react-redux";

export const reducers = createSlice({
  name: "userAction",
  initialState: {
    userData: {},
  },
  reducers: {
    loginIn: (state, action) => {
      // axios.get(http://localhost:4000/auth/login,action.payload)
      AuthApi.logIn(action.payload).then((data) => {
     
        localStorage.setItem("token", JSON.stringify(data.data.token));
        console.log(data.data.user)
        state.userData = { ...data.data.user};

      });
    },
    signUp: (state, action) => {
      AuthApi.signUp(action.payload).then((data) => {
        localStorage.setItem("profile", JSON.stringify(data));
        console.log(data);
        state.userData = data;
      });
    },
  },
});

export const { loginIn, signUp, userData } = reducers.actions;
