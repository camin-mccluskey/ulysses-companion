import { createSlice } from "@reduxjs/toolkit";
import data from '../data';


const chaptersSlice = createSlice({
  name: "chapters",
  initialState: {
    current_chapter: data.chapters[0]
  },
  reducers: {
    setCurrentChapter(state, action) {
      state.current_chapter = action.payload;
    }
  },
});

export const { setCurrentChapter } = chaptersSlice.actions;

export default chaptersSlice.reducer;

