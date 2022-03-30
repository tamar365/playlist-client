import "./SongList.css";
import Song from "../Song/Song";
import { useContext } from "react";
import chosenSongsContext from "../../contexts/chosenSongsContext";
import removeSongFuncContext from "../../contexts/removeSongFuncContext";
import addToPlaylistFuncContext from "../../contexts/addToPlaylistFuncContext";

const SongList = () => {
  const getContext = useContext(chosenSongsContext);
  const chosenSongs = getContext.chosenSongs;
  const getContext2 = useContext(removeSongFuncContext);
  const removeSongFunc = getContext2.removeSongFunc;
  const getContext3 = useContext(addToPlaylistFuncContext);
  const addToPlayListFunc = getContext3.addToPlayListFunc;
  return (
    <div className="List">
      {chosenSongs.map((song) => (
        <Song
          key={song.id}
          id={song.id}
          songName={song.songName}
          removeSongFunc={removeSongFunc}
          addToPlayListFunc={addToPlayListFunc}
        />
      ))}
    </div>
  );
};

export default SongList;
