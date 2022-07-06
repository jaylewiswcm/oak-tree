import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';

interface ComponentProps {
    videoId: string
  };



const Video = ({videoId}: ComponentProps) => { 
  const opts:Options = {
      height: '485',
      width: '860',
      playerVars: {
        autoplay: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
  };
 const _onReady = (event:any) =>{
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
      return (
        <>
        { videoId === 'h8awxkhxyh' || videoId === '3z6umq1myj' ?   <WisitiaVideo videoId={videoId}/>  : <YouTube videoId={videoId} opts={opts} onReady={_onReady}/>}
        </>
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

  export const WisitiaVideo = ({ videoId }: ComponentProps) => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const script1 = document.createElement("script");
      const script2 = document.createElement("script");
          
      script1.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
      script1.async = true;
    
      script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
      script2.async = true;
    
      document.body.appendChild(script1);
      document.body.appendChild(script2);

      if(script1) {
        setLoaded(true)
      }

    }, [videoId])

    // const script1 = document.createElement("script");
    // const script2 = document.createElement("script");
        
    // script1.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
    // script1.async = true;
  
    // script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    // script2.async = true;
  
    // document.body.appendChild(script1);
    // document.body.appendChild(script2);


    if(loaded === false) {
      return <>...Loading</>
    }

  return (
      <div>
          {/* <div className="wistia_embed wistia_async_videolink videoFoam=true"/> */}
          <div className="wistia_responsive_padding">
            <div className="wistia_responsive_wrapper" >
              <div className={`wistia_embed wistia_async_${videoId} videoFoam=true`}></div></div></div>
      </div>
      );
}