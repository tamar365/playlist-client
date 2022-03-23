import "./Board.css";
import AddItemForm from "../AddItemForm/AddItemForm";
import Clip from "../Clip/Clip";

function Board({
  songs,
  idVideo,
  addSongFunc,
  chosenSongs,
  removeSongFunc,
  getSongs,
  addToPlayListFunc,
  newSongFunc
}) {
  return (
    <div className="board">
      <AddItemForm
        songs={songs}
        addSongFunc={addSongFunc}
        addToPlayListFunc={addToPlayListFunc}
        chosenSongs={chosenSongs}
        removeSongFunc={removeSongFunc}
        getSongs={getSongs}
        newSongFunc={newSongFunc}
      />
      <Clip idVideo={idVideo} />
    </div>
  );
}

export default Board;
