import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as uploadAPI from "../../api/uploadRequast";

export const uploadImage = createAsyncThunk(
  "imageUpload/uploadImage",
  async (Data) => {
    try {
      let response = await uploadAPI.uploadImage(Data);

      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const uploadPost = createAsyncThunk(
  "imageUpload/uploadPost",
  async (Data) => {
    try {
      let response = await uploadAPI.uploadPost(Data);
      console.log("first", response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const postReducers = createSlice({
  name: "imageUpload", //naming for reducer
  initialState: {
    posts: [],
    loading:false,
    error:false,
    uploading:false
  },
  extraReducers: {
    [uploadPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload.data);
    },
    
    [uploadImage.fulfilled]: (state, action) => {
      console.log(action, "hello");
    },
  },
});
export default postReducers.reducer;
