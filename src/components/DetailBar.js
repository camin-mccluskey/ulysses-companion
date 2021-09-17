import React, { useState, useEffect } from 'react';
import notes from '../content/notes/notes.json';

const DetailBar = ({noteId, closeNote}) => {
  const [expandedNote, setExpandedNote] = useState(null);

  // when noteId changes, reset expanded note
  useEffect(() => {
    setExpandedNote(null);
  }, [noteId])

  const fetchNote = (noteId) => {
    return notes[noteId].note;
  }

  const fetchMore = (noteId) => {
    setExpandedNote(notes[noteId].expandedNote);
  }

  return (
    <div className="flex flex-col w-1/4 pt-4 pr-4 overflow-y-auto">
      {noteId &&
      <div>
      <div className="flex justify-end">
        <button onClick={() => closeNote()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p className="pt-2">
        {fetchNote(noteId)}
      </p>
      <br/>
      {expandedNote ?
      <p>{expandedNote}</p>
      :
      <div className="flex justify-center">
      <button onClick={() => fetchMore(noteId)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      </div>
      }
      </div>
      }
    </div>
  );
}

export default DetailBar;
