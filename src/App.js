import React, { useState } from 'react';
import data from './data';

import SideBar from './components/SideBar';
import ContentWindow from './components/ContentWindow';
import DetailBar from './components/DetailBar';


function App() {
  // const [currentChapter, setChapter] = useState(data.chapters[0]);
  // const [noteId, setNoteId] = useState(null);

  return (
    <div className="flex w-screen h-screen p-2 gap-x-4">
      <SideBar chapters={data.chapters} />
      <ContentWindow />
      <DetailBar />
    </div>
  );
}

export default App;
