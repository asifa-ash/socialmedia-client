import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/AuthRequest";

//creating a function for async function which take time
export const logIn = createAsyncThunk("userAction/logIn", async (Data) => {
  try {
    let response = await AuthApi.logIn(Data);
    return response;
  } catch (err) {
    return err;
  }
});

export const signUp = createAsyncThunk("userAction/signUp", async (Data) => {
  try {
    let response = await AuthApi.signUp(Data);
    return response;
  } catch (err) {
    return err;
  }
});

export const reducers = createSlice({
  name: "userAction", //naming for reducer
  initialState: {
    Auth: {},
    status: "",
  },
  reducers: {
    logOut: (state, action) => {
      state.Auth = {};
      state.status = 300;
    },
  },
  extraReducers: {
    [logIn.fulfilled]: (state, action) => {
      console.log(action);
      //checking status
      const status = action.payload?.response?.status
        ? action.payload.response.status
        : action.payload.status;
      switch (status) {
        case 200:
          state.Auth = action.payload.data.user;
          state.status = status;
          alert("successfully sign in");
          break;
        case 400:
          state.status = status;
          alert(action.payload.response.data);
          break;
      }
    },
    [signUp.fulfilled]: (state, action) => {
      console.log(action);
    },
  },
});



export const {logOut} = reducers.actions
