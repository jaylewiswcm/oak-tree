import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    cx: {
        image: string
        name: string
        text: string
    }
}

export const Card = ({cx}: ComponentProps) => {
    const {image, name, text} = cx;
  return (
    <div className='cx-item'>
    <div className="image-wrapper">
        <Image 
            src={image}
            alt={name}
            layout='fill'
            objectFit='cover'
            objectPosition='top'
        />
    </div>
    <p>{text}</p>
</div>
  )
}
