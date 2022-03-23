import "./Song.css";

const Song = ({ songName, id, removeSongFunc, addToPlayListFunc }) => {
  
  return (
    <div className="song">
      <div>
        <h4 className="songName">{songName}</h4>
      </div>
      <div className="handleSong">
        <button onClick={() => removeSongFunc(id)}>
          <i className="fas fa-trash"></i>
        </button>
        <button onClick={() => addToPlayListFunc(id)}>
          <i className="fas fa-play"></i>
        </button>
      </div>
    </div>
  );
};

export default Song;
