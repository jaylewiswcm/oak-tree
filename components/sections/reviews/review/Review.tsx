import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    review: {
        name: string
        avatar : string
        review: string
        date : string
        stars : string
        location: string
    }
}

export const Review = ({review}:ComponentProps) => {
  return (
    <div className='review'>
    <div className="review-header">
        <div className='avatar'>{review.avatar}</div>
        <div className='details'>
            <p className='name'>{review.name}</p>
            <p className='location'>{review.location}</p>
        </div>
        <div className='rating'>
            <Image 
                src={`/trustpilot/star-ratings/${review.stars}-star.svg`}
                alt={`Rating: ${review.stars} stars`}
                width='105.2'
                height='19.35'
            />
        </div>
    </div>
    <div className='review-content'><p>{review.review.substring(0, 250)}{review.review.length >= 150 && '...'}</p></div>
    <div className='review-footer'>
        <p className='date'>{review.date}</p> 
        <div className='logo'>
        <Image
            src='/trustpilot/trustpilot-logo.svg'
            alt='Trustpilot'
            width='107.31'
            height='26.35'
        />
        </div>
    </div>
</div> 
  )
}
