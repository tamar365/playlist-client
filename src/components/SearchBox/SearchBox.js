import "./SearchBox.css";
import {useRef, useContext} from 'react';
import getSongsContext from "../../contexts/getSongsContext";

function SearchBox() {
 const getContext = useContext(getSongsContext)
 const getSongs = getContext.getSongs
 const searchInputRef = useRef();   
   
 return (
        <div className="searchBox">
            <label>Search a song:</label>
            <div className="allTheSearchBox">
               <input className="inputBox" type="text" ref={searchInputRef}/>
               <button type="submit" className="searchBtn" onClick={() => getSongs(searchInputRef.current.value)}><i className="fa fa-search"></i>
               </button>
            </div>
        </div>
    )
}

export default SearchBox;