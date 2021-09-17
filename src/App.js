import React, { useState } from 'react';
import data from './data';

import SideBar from './components/SideBar';
import ContentWindow from './components/ContentWindow';
import DetailBar from './components/DetailBar';


function App() {
  // look into presistng state between reloads - https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f
  const [currentChapter, setChapter] = useState(data.chapters[0]);
  const [noteId, setNoteId] = useState(null);

  return (
    <div className="flex w-screen h-screen  gap-x-4">
      <SideBar chapters={data.chapters} selectChapter={(e) => setChapter(e)} currentChapter={currentChapter}/>
      <ContentWindow chapter={currentChapter} openNote={setNoteId} currentNoteId={noteId}/>
      {noteId
      ? <DetailBar noteId={noteId} closeNote={() => setNoteId(null)}/> : null 
      }
    </div>
  );
}

export default App;
