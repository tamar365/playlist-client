import "./Board.css";
import AddItemForm from "../AddItemForm/AddItemForm";
import Clip from "../Clip/Clip";

function Board() {
  return (
    <div className="board">
      <AddItemForm />
      <Clip />
    </div>
  );
}

export default Board;
