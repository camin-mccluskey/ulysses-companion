const SideBar = ({chapters, currentChapter, selectChapter}) => {
  return (
    <div className="flex flex-col w-1/5 items-start pl-2">
      <p className="font-bold text-xl">Ulysses</p>
      {chapters.map(chapter => {
        return (
          <button 
            onClick={() => selectChapter(chapter)}
          >
            <p className={`text-lg ${chapter === currentChapter ? "text-green-500" : "text-gray-500"}`}>
              {chapter.name}
            </p>
          </button>
        );
      })
      }
    </div>
  );
}

export default SideBar;
