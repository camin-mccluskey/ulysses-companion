import data from '../data';


const ContentWindow = ({chapter, openNote}) => {
  return (
    <div className="flex flex-col w-2/4 flex-grow overflow-y-auto">
      {loadChapter(chapter, {openNote})}
    </div>
  );
}

const loadChapter = (chapter, props) => {
  return data.chapters.find(c => c.idx === chapter.idx).component(props);
}

export default ContentWindow;
