import "./Song.css";
import { useContext, useState, useEffect } from "react";
import removeSongFuncContext from "../../contexts/removeSongFuncContext";
import addToPlaylistFuncContext from "../../contexts/addToPlaylistFuncContext";

const Song = ({ songName, id }) => {
  const getContext = useContext(removeSongFuncContext);
  const removeSongFunc = getContext.removeSongFunc;
  const getContext2 = useContext(addToPlaylistFuncContext);
  const addToPlayListFunc = getContext2.addToPlayListFunc;

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 380 ||
      window.matchMedia("(orientation: landscape)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= 380 ||
          window.matchMedia("(orientation: landscape)").matches
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSongClick = (e) => {
    if (isMobile) {
      e.stopPropagation();
      addToPlayListFunc(id);
    }
  };

  return (
    <div className="song">
      <h4 className="songName" onClick={(e) => handleSongClick(e)}>
        {songName}
      </h4>
      <div className="handleSong">
        <button className="removeSongBtn" onClick={() => removeSongFunc(id)}>
          <i className="fas fa-trash"></i>
        </button>
        {!isMobile && (
          <button className="addSongBtn" onClick={() => addToPlayListFunc(id)}>
            <i className="fas fa-play"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Song;
