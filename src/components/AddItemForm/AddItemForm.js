import './AddItemForm.css';
import AddSong from '../AddSong/AddSong'
import SongList from '../SongList/SongList';
import SearchBox from '../SearchBox/SearchBox';

function AddItemForm () {
  
   return (
    <div className="additemform">
      <h4>MY MUSIC LIST</h4>
      <SearchBox />
      <AddSong />
      <SongList />
    </div>
   ) 
}

export default AddItemForm;