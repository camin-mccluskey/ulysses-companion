import React, { useState, useEffect } from 'react';
import notes from '../content/notes/notes.json';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentNoteId } from '../app/notesSlice';


const DetailBar = () => {
  const [expandedNote, setExpandedNote] = useState(null);
  const noteId = useSelector(state => state.notes.current_note_id);
  const isOpen = !!noteId;
  const dispatch = useDispatch();

  // when noteId changes, reset expanded note
  useEffect(() => {
    setExpandedNote(null);
  }, [noteId])

  const fetchNote = (noteId) => {
    return notes[noteId].note;
  }

  const fetchMore = (noteId) => {
    if (expandedNote) {
      setExpandedNote(null);
    } else {
      setExpandedNote(notes[noteId].expandedNote);
    }
  }

  const closeNote = () => {
    dispatch(setCurrentNoteId(null));
  }

  return (
    <div className={`flex flex-col ${isOpen ? "w-1/4" : "w-0 invisible"} transition-width duration-300 easy pt-4 pr-4 overflow-y-auto`}>
      <div>
        <div className="flex justify-end">
          <button onClick={() => closeNote()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="pt-2">
          {isOpen && fetchNote(noteId)}
        </p>
        <br/>
        <div className={`${expandedNote ? "h-full" : "h-0"} transition-height duration-300 delay-200 max-h-auto overflow-hidden`}>
          <p>{expandedNote}</p>
        </div>
        <div className="flex justify-center">
          <button onClick={() => fetchMore(noteId)}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 stroke-current hover:text-green-500 transition-transform duration-200 transform ${expandedNote && "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailBar;

