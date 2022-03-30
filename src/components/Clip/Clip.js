import './Clip.css';
import ReactPlayer from 'react-player';
import idVideoContext from '../../contexts/idVideoContext';
import { useContext } from 'react';

function Clip () {
  const getContext = useContext(idVideoContext)
  const idOfVideo = getContext.idVideo
  return (
    <div className="clip">
      <ReactPlayer 
      className="thePlayer"
      url={`https://www.youtube.com/watch?v=${idOfVideo}`}
      playing
      width="100%"
      height="100%"
      controls={false}
      />
    </div>
  )
}

export default Clip;