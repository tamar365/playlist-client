import "./Home.css";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Board from "../../components/Board/Board";
import idVideoContext from "../../contexts/idVideoContext";
import addSongFuncContext from "../../contexts/addSongFuncContext";
import songsContext from "../../contexts/songsContext";
import addToPlaylistFuncContext from "../../contexts/addToPlaylistFuncContext"
import chosenSongsContext from "../../contexts/chosenSongsContext";
import getSongsContext from "../../contexts/getSongsContext";
import newSongFuncContext from "../../contexts/newSongFuncContext";
import removeSongFuncContext from "../../contexts/removeSongFuncContext";

function App() {
  const [chosenSongs, setChosenSongs] = useState([]);
  const [idVideo, setIdVideo] = useState("");
  const [songs, setSongs] = useState([]);

  try {
    useEffect(() => {
      fetch("https://myhitsplaylist.herokuapp.com/api/playlists", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) =>
          setChosenSongs(
            data.map((song) => ({ id: song.id, songName: song.songName }))
          )
        );
    }, []);
  } catch (e) {
    console.log(e);
  }

  const getSongs = (userInput) => {
    fetch(`https://myhitsplaylist.herokuapp.com/api/search/${userInput}`)
      .then((response) => response.json())
      .then((data) =>
        setSongs(
          data.videos.map((song) => ({
            songName: song.title,
            id: song.video_id,
          }))
        )
      )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const addSongFunc = (poem) => {
    const poem1 = poem.split("%")[0];

    setChosenSongs([
      ...chosenSongs,
      ...songs.filter((song) => song.songName === poem1),
    ]);
  };

  const newSongFunc = (poem) => {
    const songName = poem.split("%")[0];
    const id = poem.split("%")[1];
    fetch("https://myhitsplaylist.herokuapp.com/api/songs/newsong", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ songName, id }),
    })
      .then((response) => response.json())
      .then((data) =>
        fetch(
          "https://myhitsplaylist.herokuapp.com/api/playlists/addToPlaylist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ data }),
          }
        )
          .then((response) => response.json())
          .then((data) => console.log(data))
      );
  };

  const removeSongFunc = (id) => {
    fetch(`https://myhitsplaylist.herokuapp.com/api/playlists/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setChosenSongs([...chosenSongs.filter((song) => song.id !== id)]);
      });
  };

  const addToPlayListFunc = (id) => {
    setIdVideo(id);
  };

  return (
    <div className="app">
      <Header />
      <idVideoContext.Provider value={{idVideo:idVideo}}>
      <addSongFuncContext.Provider value={{addSongFunc:addSongFunc}}> 
      <songsContext.Provider value={{songs:songs}}>
      <addToPlaylistFuncContext.Provider value={{addToPlayListFunc:addToPlayListFunc}}>
      <chosenSongsContext.Provider value={{ chosenSongs:chosenSongs}}>
      <removeSongFuncContext.Provider value={{removeSongFunc:removeSongFunc}}>
      <getSongsContext.Provider value={{getSongs:getSongs}}>
      <newSongFuncContext.Provider value={{newSongFunc:newSongFunc}}>  
      <Board/>
      </newSongFuncContext.Provider>
      </getSongsContext.Provider>
      </removeSongFuncContext.Provider> 
      </chosenSongsContext.Provider>   
      </addToPlaylistFuncContext.Provider> 
      </songsContext.Provider>
      </addSongFuncContext.Provider> 
      </idVideoContext.Provider>
    </div>
  );
}

export default App;
