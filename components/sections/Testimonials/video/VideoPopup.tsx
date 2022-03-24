import React, { useEffect } from 'react'
// Components
import Video from './Video';
import VideoCarousel from './VideoCarousel';

interface ComponentProps {
    selectedCx: {
        name: string
        location: string
        product: {
            name: string
            url: string
        }
        thumbnail: string,
        videoId: string
      }
      show: boolean
      setShow: any
}

const VideoPopup = ({selectedCx, show, setShow}:ComponentProps ) => {
    useEffect(() => {
        const dd = document.body;
        if(show) {
            dd.classList.add('show-modal');
        } else {
            dd.classList.remove('show-modal');
        }
    })
  return (
    <div className='modal'>
        <div className='modal-inner'>
            <VideoCarousel  videoId={selectedCx.videoId} setShow={setShow} show={show}/>
        </div>
    </div>
  )
}

export default VideoPopup;
