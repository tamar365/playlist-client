import "./Home.css";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Board from "../../components/Board/Board";

function App() {
  const [chosenSongs, setChosenSongs] = useState([]);
  const [idVideo, setIdVideo] = useState("");
  const [songs, setSongs] = useState([]);

  try {
    useEffect(() => {
      fetch("https://localhost:3002/api/playlists", {
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
    fetch(`https://localhost:3002/api/search/${userInput}`)
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
    fetch("https://localhost:3002/api/songs/newsong", {
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
          "https://localhost:3002/api/playlists/addToPlaylist",
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
    fetch(`https://localhost:3002/api/playlists/${id}`, {
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
      <Board
        idVideo={idVideo}
        songs={songs}
        addToPlayListFunc={addToPlayListFunc}
        addSongFunc={addSongFunc}
        chosenSongs={chosenSongs}
        removeSongFunc={removeSongFunc}
        getSongs={getSongs}
        newSongFunc={newSongFunc}
      />
    </div>
  );
}

export default App;
