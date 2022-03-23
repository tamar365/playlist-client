import "./SearchBox.css";
import {useRef} from 'react';

function SearchBox({getSongs}) {

 const searchInputRef = useRef();   
    return (
        <div className="searchBox">
            <label>Search a song:</label>
            <div className="allTheSearchBox">
               <input className="inputBox" type="text" ref={searchInputRef}/>
               <button type="submit" onClick={() => getSongs(searchInputRef.current.value)}><i className="fa fa-search"></i>
               </button>
            </div>
        </div>
    )
}

export default SearchBox;