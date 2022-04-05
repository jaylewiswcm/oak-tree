import React, { useEffect } from 'react'
import YouTube from 'react-youtube';

interface ComponentProps {
    // using `interface` is also ok
    videoId: string
    show:boolean
  };


const Video = ({videoId, show}: ComponentProps) => { 
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
 const _onReady = (event:any) =>{
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target);
  }
      return (
        <YouTube videoId={videoId} onReady={_onReady}/>
      ) 
  

  }

  export default Video;