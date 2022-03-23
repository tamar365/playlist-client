import "./AddSong.css";

function AddSong({ songs, addSongFunc, chosenSongs, addToPlayListFunc, newSongFunc }) {
  
  return (
    <div className="addSongInput">
      <label>Choose a song:</label>
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
