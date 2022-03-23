import './Clip.css';
import ReactPlayer from 'react-player';

function Clip ({idVideo}) {
  
  return (
    <div className="clip">
      <ReactPlayer 
      className="thePlayer"
      url={`https://www.youtube.com/watch?v=${idVideo}`}
      playing
      width="100%"
      height="100%"
      controls={false}
      />
    </div>
  )
}

export default Clip;