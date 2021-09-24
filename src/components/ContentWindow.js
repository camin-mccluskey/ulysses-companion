import React from 'react';
import data from '../data';
import { useSelector } from 'react-redux';


const ContentWindow = () => {
  const currentChapter = useSelector(state => state.chapters.current_chapter);

  return (
    <div className="flex flex-col w-2/4 flex-grow overflow-y-auto">
      {loadChapter(currentChapter)}
    </div>
  );
}

const loadChapter = (chapter) => {
  return data.chapters.find(c => c.idx === chapter.idx).component();
}

export default ContentWindow;

