import { useState } from "react";

const SideBar = ({chapters, currentChapter, selectChapter}) => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="flex flex-col w-1/5 items-start pl-2">
      <p className="font-bold text-xl">Ulysses</p>
        <div className="flex flex-col pt-8 items-start">
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
      <div className="w-full flex flex-col pt-6">
        <button onClick={() => setAboutOpen(!aboutOpen)}>
          <p className="hover:underline">About</p>
        </button>
        {aboutOpen &&
          <div className="text-sm">
          <p>This site is online edition of James Joyce’s Ulysses that comprehensively assists readers of this great modern novel, as they read.</p>
          <p>The content for this site has been pulled from <a href="https://www.joyceproject.com">The Joyce Project</a> and is distributed here in accordance with their fair use <a href="https://www.joyceproject.com/pages/fairuse.htm">policy</a></p>
          <p>The purpose of this site is to improve upon the user experience of the excellent Joyce Project by opening notes in a sidebar and showing users which notes they have opened.</p>
          </div>
        }
      </div>
    </div>
  );
}

export default SideBar;
