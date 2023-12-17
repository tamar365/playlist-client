import "./Song.css";
import { useContext } from "react";
import removeSongFuncContext from "../../contexts/removeSongFuncContext";
import addToPlaylistFuncContext from "../../contexts/addToPlaylistFuncContext";

const Song = ({ songName, id }) => {
  const getContext = useContext(removeSongFuncContext);
  const removeSongFunc = getContext.removeSongFunc;
  const getContext2 = useContext(addToPlaylistFuncContext);
  const addToPlayListFunc = getContext2.addToPlayListFunc;
  
  return (
    <div className="song">
      <div>
        <h4 className="songName">{songName}</h4>
      </div>
      <div className="handleSong">
        <button className="removeSongBtn" onClick={() => removeSongFunc(id)}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="addSongBtn" onClick={() => addToPlayListFunc(id)}>
          <i className="fas fa-play"></i>
        </button>
      </div>
    </div>
  );
};

export default Song;
