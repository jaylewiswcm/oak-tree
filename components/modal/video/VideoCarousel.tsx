import React, { useEffect, useState } from 'react'
// components
import Video from './Video';

import testimonials from '../../../data/testimonials/testimonials.json';

interface ComponentProps {
    videoId: string
    setShow: any
    show:boolean
}
 const VideoCarousel = ({videoId, setShow, show}: ComponentProps) => {
    const [currentVideoId, setCurrentVideoId] = useState(videoId)

    useEffect(() => {
        setCurrentVideoId(videoId);
    },[videoId])
    
  return (
    <div className='video-carousel'>
        <button className='close-modal' onClick={() => setShow(false)}>Close</button>
        {/* <div className='carousel-navigation nav-prev'>
            <button className='prev' onClick={() => changeVideoId('prev')}></button>
        </div> */}
           <div className='video-container'><Video videoId={currentVideoId} show={show}/></div>
        {/* <div className='carousel-navigation nav-next'>
            <button className='next'  onClick={() => changeVideoId('next')}></button>
        </div> */}
    </div>
  )
}

export default VideoCarousel;
