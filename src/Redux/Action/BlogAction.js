import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BlogAction = createAsyncThunk(
  "post",
  async (Blogdata, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/blog", Blogdata);
      console.log(data);
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);
export const getBlogAction = createAsyncThunk(
  "get",
  async (arg, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/blog");
      console.log(data);
      return data
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);
