import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { postMarkdown } from "./markdownAPI";
import { MarkdownDTO } from "./markdownDTO";

export interface MarkdownState {
  data: MarkdownDTO | null;
  status: "idle" | "loading" | "failed";
}

const initialState: MarkdownState = {
  data: null,
  status: "idle",
};

export const sendData = createAsyncThunk(
  "markdown/sendContent",
  async (data: FormData) => {
    const response = await postMarkdown(data);
    return response.data;
  }
);

export const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendData.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export const selectMarkdown = (state: RootState) => state.markdown.data;

export default markdownSlice.reducer;
