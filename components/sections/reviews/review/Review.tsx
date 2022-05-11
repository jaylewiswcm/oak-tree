import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    review: any
}

export const Review = ({review}:ComponentProps) => {
  return (
    <>
    <div className="review-header">
        <div  className='avatar'>TP</div>
        <div className='details'>
            <p className='name'>{review.consumer.displayName}</p>
            <p className='location'>{review.consumer.displayLocation}</p>
        </div>
        <div className='rating'>
            <img 
                src={`/trustpilot/star-ratings/${review.stars}-star.svg`}
                alt={`Rating: ${review.stars} stars`}
                width='105.2'
                height='19.35' />
        </div>
    </div>
    <div className='review-content'><p>{review.text.substring(0, 250)}{review.text.length >= 150 && '...'}</p></div>
    <div className='review-footer'>
        <p className='date'>{ (review.createdAt instanceof Date) ? review.createdAt.toLocaleDateString() : new Date(review.createdAt).toLocaleDateString() }</p> 
        <div className='logo'>
            <img
                src='/trustpilot/trustpilot-logo.svg'
                alt='Trustpilot'
                width='107.31'
                height='26.35'
            />
        </div>
    </div>
</> 
  )
}
