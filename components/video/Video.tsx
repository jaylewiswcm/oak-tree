import React from 'react'
import YouTube from "react-youtube";

interface ComponentProps {
    videoId: string
    title: string
    placeholder: string
}

export const Video = ({videoId,title,placeholder}: ComponentProps) => {

    const opts: Options = {
            height: '100%',
            width: '100%',
            playerVars: {
                autoplay: 0,
                iv_load_policy: 3,
                listType:'user_uploads',
                modestbranding: 1,
                playsinline:1,
                enablejsapi: 1
            }
    }

    const _onReady = (event:any) => {
        event.target.pauseVideo();
      }

  return (
      <div className='video-wrapper'>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}&autoplay=1&modestbranding=1&mute=1`}
            srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto;background-color: white;}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}.play-btn{display:flex;align-items:center;justify-content:center;width:60px;height:60px;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0;transition:0.2s}a:hover .play-fill{opacity:1;}a:hover{box-shadow: 0 3px 22px rgba(0,0,0,0.18)}.play-outline{position:absolute;top:50%;left:50%;transform:translate(-40%,-55%);width:35%;}.play-fill{position:absolute;top:50%;left:50%;transform:translate(-40%,-55%);width:35%;opacity:0;transition:0.2s}</style><a href=https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&mute=1><img src=${placeholder} alt=${title} style='width:auto;height:100%;'><span class='play-btn'><img class='play-outline' src='/buttons/play-btn-outline.svg' alt='Play button'/><img  class='play-fill' src='/buttons/play-btn-fill.svg' alt='Play button'/></span></a>`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
            loading="lazy" 
          ></iframe>
            {/* <YouTube videoId={videoId} opts={opts} onReady={(event) => _onReady(event)} id={`iframe-id-${videoId}`}/> */}
    </div>
  )
}

 // YouTube Player Types 
 interface PlayerVars {
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
