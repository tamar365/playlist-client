import "./SongList.css";
import Song from "../Song/Song";

const SongList = ({chosenSongs, removeSongFunc, addToPlayListFunc}) => {
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
