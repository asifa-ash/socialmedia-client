import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/AuthRequest";

//creating a function for async function which take time
export const logIn = createAsyncThunk(
  "userAction/logIn",
  async (Data) => {
    try {
       let response = await AuthApi.logIn(Data);
       return response;
    } catch(err) {
      console.log(err);
    }
  }
   
);

export const reducers = createSlice({
  name: "userAction", //naming for reducer
  initialState: {
    userData: '',
  },
  reducers: {
    signUp(state, action) {
      AuthApi.signUp(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
       
    })
  },
});




export const { signUp } = reducers.actions;
