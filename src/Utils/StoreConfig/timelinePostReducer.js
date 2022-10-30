import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as timelineAPI from '../../api/TimelinePost'

export const getTimelinePosts = createAsyncThunk(
  "timeline/getTimelinePosts",
  async (Data) => {
    try {
      let response = await timelineAPI.getTimelinePosts(Data);

      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);


const TimelinePostReducers = createSlice({
  name: "timeline", //naming for reducer
  initialState: {}
  ,
  extraReducers: {
    
    [getTimelinePosts.fulfilled]: (state, action) => {
      console.log(action, "hello id");
    },
  },
});
export default TimelinePostReducers.reducer;
