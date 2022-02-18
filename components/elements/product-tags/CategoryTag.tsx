import React from 'react'
import Image from 'next/image';
interface ComponentProps {
  tagName: string
  imgSrc: string
  imgAlt: string
  imgWidth: string
  imgHeight: string
}

const CategoryTag = ({tagName, imgSrc, imgAlt, imgWidth, imgHeight }:ComponentProps) => {
  return (
    <div className='cat-tag'>
    <div className='icon-wrap'>
      <Image 
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
      />
    </div>
    <p>{tagName}</p>
  </div>
  )
}

export default CategoryTag;