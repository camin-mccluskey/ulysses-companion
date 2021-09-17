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
    <div className="flex flex-col w-1/4 overflow-y-auto">
      {noteId &&
      <>
      <button
        className="w-full rounded-md bg-red-400"
        onClick={() => closeNote()}
      >
        Close
      </button>
      <p>
        {fetchNote(noteId)}
      </p>
      <br/>
      {expandedNote ?
      <p>{expandedNote}</p>
      :
      <button onClick={() => fetchMore(noteId)}>Expand</button>
      }
      </>
      }
    </div>
  );
}

export default DetailBar;
