import { configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';
import chaptersReducer from "./chaptersSlice";
import notesReducer from "./notesSlice";

enableMapSet();


const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    notes: notesReducer,	
  },
})

export default store

