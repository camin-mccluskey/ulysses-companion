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
      <div className="w-full flex flex-col pt-10">
        <button onClick={() => setAboutOpen(!aboutOpen)}>
          <p className="hover:underline">About</p>
        </button>
        {aboutOpen &&
          <p>This is a site about Jame's Joyces Ulysses</p>
        }
      </div>
    </div>
  );
}

export default SideBar;
