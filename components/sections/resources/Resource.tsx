import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// components
import { Video } from '../../video/Video';
import Modal from '../../modal/Modal';
import VideoCarousel from '../../modal/video/VideoCarousel';

interface ComponentProps {
    resource: {
        heading : string
        subheading: string
        contentSrc: string
        video : boolean
        url:string
        placeholder: string
    }
}
export const Resource = ({resource}:ComponentProps) => {
  const [popUpVideo, setPopUpVideo] = useState(false)
    const { heading, subheading, contentSrc, video, url, placeholder } = resource;

    if(video) {
      return (
        <div className='resource'>
          <Video videoId={contentSrc}  title={heading} placeholder={placeholder}/> 
          <p className='subheading'>{subheading}</p>
          <p className='heading'>{heading}</p>
          <p className='link' onClick={() => setPopUpVideo(true)}>Watch Video</p> 
          {popUpVideo &&  <Modal classNames='' setShow={setPopUpVideo}><VideoCarousel  videoId={contentSrc} setShow={setPopUpVideo} show={popUpVideo}/> </Modal>}
       </div>
      )
    } else {
    return (
      <Link href={url}>
        <a className='resource'>
            <span className='img-wrapper'><Image src={placeholder} alt={heading} layout='fill' objectFit='cover' objectPosition='center' quality={100} /></span>
            <p className='subheading'>{subheading}</p>
            <p className='heading'>{heading}</p>
            <p className='link'>Learn More</p>
        </a>
      </Link>
    )
    }
}
