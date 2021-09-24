import React from 'react';
import data from './data';

import SideBar from './components/SideBar';
import ContentWindow from './components/ContentWindow';
import DetailBar from './components/DetailBar';


function App() {

  return (
    <div className="flex w-screen h-screen p-2 gap-x-4">
      <SideBar chapters={data.chapters} />
      <ContentWindow />
      <DetailBar />
    </div>
  );
}

export default App;
