import React from 'react'
// components
import { Video } from '../../video/Video';

interface ComponentProps {
    resource: {
        heading : string
        subheading: string
        videoId: string
        placeholder : string
    }
}
export const Resource = ({resource}:ComponentProps) => {
    const { heading, subheading, videoId, placeholder } = resource;

  return (
    <div className='resource'>
    <Video videoId={videoId} placeholder={placeholder} />
    <p className='subheading'>{subheading}</p>
    <p className='heading'>{heading}</p>
    <p className='link'>Watch Video</p>
</div>
  )
}
