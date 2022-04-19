import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// components
import { Video } from '../../video/Video';

interface ComponentProps {
    resource: {
        heading : string
        subheading: string
        contentSrc: string
        video : boolean
        url:string
    }
}
export const Resource = ({resource}:ComponentProps) => {
    const { heading, subheading, contentSrc, video, url } = resource;

    if(video) {
      return (
        <div className='resource'>
          <Video videoId={contentSrc}  title={heading}/> 
          <p className='subheading'>{subheading}</p>
          <p className='heading'>{heading}</p>
          <p className='link'>Watch Video</p>
       </div>
      )
    } else {
    return (
      <Link href={url}>
        <a className='resource'>
          
            <span className='img-wrapper'><Image src={contentSrc} alt={heading} layout='fill' objectFit='cover' objectPosition='center'/></span>
            <p className='subheading'>{subheading}</p>
            <p className='heading'>{heading}</p>
            <p className='link'>Learn More</p>
          
        </a>
      </Link>
    )
    }
}
