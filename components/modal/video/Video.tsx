import React, { useEffect } from 'react'
import YouTube from 'react-youtube';

interface ComponentProps {
    // using `interface` is also ok
    videoId: string
    show:boolean
  };



const Video = ({videoId, show}: ComponentProps) => { 
  const opts:Options = {
      height: '485',
      width: '860',
      playerVars: {
        autoplay: 1,
        iv_load_policy: 3,
        modestbranding: 1
      },
  };
 const _onReady = (event:any) =>{
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target);
  }
      return (
        <YouTube videoId={videoId} opts={opts} onReady={_onReady}/>
      ) 
  

  }

  export default Video;


  export interface PlayerVars {
    autoplay?: 0 | 1;
    cc_load_policy?: 1;
    color?: 'red' | 'white';
    controls?: 0 | 1 | 2;
    disablekb?: 0 | 1;
    enablejsapi?: 0 | 1;
    end?: number;
    fs?: 0 | 1;
    hl?: string;
    iv_load_policy?: 1 | 3;
    list?: string;
    listType?: 'playlist' | 'search' | 'user_uploads';
    loop?: 0 | 1;
    modestbranding?: 1;
    origin?: string;
    playlist?: string;
    playsinline?: 0 | 1;
    rel?: 0 | 1;
    showinfo?: 0 | 1;
    start?: number;
    mute?: 0 | 1;
  }

  interface Options {
    height?: string;
    width?: string;
    host?: string;
    playerVars?: PlayerVars;
  }