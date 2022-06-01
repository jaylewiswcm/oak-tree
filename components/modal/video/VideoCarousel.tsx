import React, { useEffect, useState } from 'react'
import Image from 'next/image';
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
             <div className='background-close' onClick={() => setShow(false)}></div>
            <button className='close-modal' onClick={() => setShow(false)}>
                <span className='icon-wrapper'>
                <Image 
                    src='/buttons/modal-close.svg'
                    alt='Close modal'
                    layout='responsive'
                    width='15'
                    height='15'
                />
                </span>
            </button>
            {/* <div className='carousel-navigation nav-prev'>
                <button className='prev' onClick={() => changeVideoId('prev')}></button>
            </div> */}
            <div className='video-container'><Video videoId={currentVideoId}/></div>
            {/* <div className='carousel-navigation nav-next'>
                <button className='next'  onClick={() => changeVideoId('next')}></button>
            </div> */}
    </div>
  )
}

export default VideoCarousel;
