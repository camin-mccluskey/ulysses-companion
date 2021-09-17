import React, { useState } from 'react';
import data from '../data';


const ContentWindow = ({chapter, openNote, currentNoteId}) => {
  const [visitedNotes, setVisited] = useState(new Set());

  const addToVisited = (noteId) => {
    const updatedNotes = visitedNotes.add(noteId);
    setVisited(updatedNotes);
  }

  return (
    <div className="flex flex-col w-2/4 flex-grow overflow-y-auto">
      {loadChapter(chapter, {openNote, currentNoteId, visitedNotes, addToVisited})}
    </div>
  );
}

const loadChapter = (chapter, props) => {
  return data.chapters.find(c => c.idx === chapter.idx).component(props);
}

export default ContentWindow;
