import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    hover: boolean,
    focused: boolean,
    itemId: string
    subHead: string,
    head: string,
    imgSrc: string,
    imgAlt: string,
    imgWidth: string,
    imgHeight: string
}

const ExpItem = ({focused, hover, itemId, subHead, head, imgSrc, imgAlt, imgWidth, imgHeight}:ComponentProps) => {
    return (
        <div className={`exp-item  ${itemId}-item ${hover === true ? 'item-hover' : focused === true ? 'item-focused' : ''}`}>
        <div className='icon-wrapper'>
          <Image 
            src={imgSrc}
            alt={imgAlt}
            layout='intrinsic'
            width={imgWidth}
            height={imgHeight}
          />
        </div>
        <p className='exp-sub'>{subHead}</p>
        <p className='exp-head'>{head}</p>
        {/* <button className='acting-btn' onClick={() => setChosenItem('gb')} onMouseOver={() => setItemToFocus('gb')} onMouseOut={() => setItemToFocus('')}>Learn More</button> */}
      </div>
    )
}

export default ExpItem;