import { configureStore } from "@reduxjs/toolkit";
import chaptersReducer from "./chaptersSlice";
import notesReducer from "./notesSlice";

const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    notes: notesReducer,	
  },
})

export default store

