import React, {useRef} from 'react'
import YouTube from "react-youtube";
import ReactPlayer from 'react-player';
import Image from 'next/image';

interface ComponentProps {
    videoId: string
    placeholder: string
}

export const Video = ({videoId, placeholder}: ComponentProps) => {

    const opts: Options = {
            height: '300',
            width: '640',
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
          {/* <Image 
            src={placeholder}
            alt='UK Therapy Services'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          /> */}
          {/* <button  className='yt-play-btn'  onClick={playVideo}>play</button> */}
            <YouTube videoId={videoId} opts={opts} onReady={(event) => _onReady(event)} id={`iframe-id-${videoId}`}/>
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
