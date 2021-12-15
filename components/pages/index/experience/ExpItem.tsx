import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    itemId: string
    subHeading: string,
    heading: string,
    img: {
      src: string,
      alt: string,
      width: string,
      height: string
    },
    content: string,
    learnMore: React.MouseEventHandler<HTMLButtonElement>,
    showLess: React.MouseEventHandler<HTMLButtonElement>,
    selected: boolean,
}

const ExpItem = ({itemId, subHeading, heading, img, content , learnMore, showLess, selected}:ComponentProps) => {
  const {src, alt, width, height} = img  
  return (
        <div className={`exp-item  ${itemId}-item ${selected && 'item-selected'}`}>
          <div className='exp-item-inner'>
            <div className={`icon-wrapper ${itemId}-icon`}>
              <Image 
                src={src}
                alt={alt}
                layout='intrinsic'
                width={width}
                height={height}
              />
            </div>
            <p className='exp-sub'>{subHeading}</p>
            <p className='exp-head'>{heading}</p>
            <button className='acting-btn' onClick={learnMore}>Learn More</button>
          </div>
        <div className='exp-info '> 
          <div className='info-top'>
            <div className='info-title'>
              <p className='exp-sub'>{subHeading}</p>
              <p className='exp-head'>{heading}</p>
            </div>
            <div className={`icon-wrapper ${itemId}-icon`}>
              <Image 
                src={src}
                alt={alt}
                layout='intrinsic'
                width={width}
                height={height}
              />
            </div>
          </div>
          <p className='exp-content'>{content}</p>
          <button className='acting-btn' onClick={showLess}>Show Less</button>
        </div>
      </div>
    )
}

export default ExpItem;