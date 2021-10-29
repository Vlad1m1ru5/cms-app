import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getMarkdown, postMarkdown } from "./markdownAPI";
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
  "markdown/postMarkdown",
  async (data: FormData) => {
    const response = await postMarkdown(data);
    return response.data;
  }
);

export const sendId = createAsyncThunk(
  "markdown/getMarkdown",
  async (id: string) => {
    const response = await getMarkdown(id);
    return response.data;
  }
);

export const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    clear: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendData.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(sendId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendId.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export const { clear } = markdownSlice.actions;

export const selectMarkdown = (state: RootState) => state.markdown.data;
export const selectStatus = (state: RootState) => state.markdown.status;

export default markdownSlice.reducer;
