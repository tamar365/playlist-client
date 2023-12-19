import "./AddSong.css";
import { useContext } from "react";
import songsContext from "../../contexts/songsContext";
import addSongFuncContext from "../../contexts/addSongFuncContext";
import newSongFuncContext from "../../contexts/newSongFuncContext";

function AddSong() {
  const getContext = useContext(songsContext);
  const songs = getContext.songs;
  const getContext2 = useContext(addSongFuncContext);
  const addSongFunc = getContext2.addSongFunc;
  const getContext3 = useContext(newSongFuncContext);
  const newSongFunc = getContext3.newSongFunc; 
  
  return (
    <div className="addSongInput">
      <label className="chooseSongLabel">Choose a song:</label>
      <select
        className="selectBox"
        onChange={(e) => {addSongFunc(e.target.value); newSongFunc(e.target.value);}}
      >
        {songs.map((poem) => (
          <option key={poem} id={poem.id} >
            {`${poem.songName}%${poem.id}`}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AddSong;
