import "./Clip.css";
import ReactPlayer from "react-player";
import idVideoContext from "../../contexts/idVideoContext";
import isVideoPlayedContext from "../../contexts/isVideoPlayedContext";
import { useContext } from "react";
import youtube from "../../assets/youtube.png";

function Clip() {
  const getContext = useContext(idVideoContext);
  const idOfVideo = getContext.idVideo;
  const getIsPlaying = useContext(isVideoPlayedContext)
  const isPlaying = getIsPlaying.isVideoPlayed

  return (
    <div className="clip">
      {!isPlaying && (
        <div className="placeholder-overlay">
          <img className="youtubeImg" src={youtube} alt="Placeholder" />
        </div>
      )}
      {isPlaying && (<ReactPlayer
        className="thePlayer"
        url={`https://www.youtube.com/watch?v=${idOfVideo}`}
        playing={isPlaying}
        width="100%"
        height="100%"
        controls={false}
      />)}
    </div>
  );
}

export default Clip;
