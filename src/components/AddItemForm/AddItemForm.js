import './AddItemForm.css';
import AddSong from '../AddSong/AddSong'
import SongList from '../SongList/SongList';
import SearchBox from '../SearchBox/SearchBox';

function AddItemForm ({songs, addSongFunc, chosenSongs, addToPlayListFunc, removeSongFunc, getSongs, newSongFunc }) {
  
   return (
    <div className="additemform">
      <h4>MY MUSIC LIST</h4>
      <SearchBox getSongs={getSongs}/>
      <AddSong chosenSongs={chosenSongs} addSongFunc={addSongFunc} songs={songs} newSongFunc={newSongFunc} />
      <SongList chosenSongs={chosenSongs} removeSongFunc={removeSongFunc} addToPlayListFunc={addToPlayListFunc}/>
    </div>
   ) 
}

export default AddItemForm;