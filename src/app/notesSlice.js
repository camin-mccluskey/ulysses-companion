import { createSlice } from "@reduxjs/toolkit";


const notesSlice = createSlice({
  name: "notes",
  initialState: {
    current_note_id: null,
    visited_notes: new Set(),
  },
  reducers: {
    setCurrentNoteId(state, action) {
      state.current_note_id = action.payload;
    },
    addNoteToVisited(state, action) {
      state.visited_notes.add(action.payload);
    },
  },
});

export const { setCurrentNoteId, addNoteToVisited } = notesSlice.actions;

export default notesSlice.reducer;

