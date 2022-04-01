import React, { useEffect, useState } from 'react'
// components
import Video from './Video';

import testimonials from '../../../../data/testimonials/testimonials.json';

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

    // const [videoIds, storeVideoIds] = useState([''])
    // useEffect(() => {
    //     let idArray = [""]
    //     testimonials.map(cx => idArray.push(cx.videoId))
    //     storeVideoIds(idArray);
    // },[])

    // const changeVideoId = (type:string) => {   
    //     videoIds.map((id, index) => {
    //         let nextIndex:number;
    //         if(id === currentVideoId) {
    //             if(type === 'prev') {
    //                 if(index === 0) {
    //                     nextIndex = videoIds.length;
    //                 } else {
    //                     nextIndex = index - 1
    //                 }
    //             } else {
    //                 if(index === videoIds.length ) {
    //                     nextIndex = 0;
    //                     console.log('next reset')
    //                 } else {
    //                     nextIndex = index + 1
    //                 }
    //             }
    //             console.log(nextIndex)
    //             setCurrentVideoId(videoIds[nextIndex])
    //         }
    //     })
    // }

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
