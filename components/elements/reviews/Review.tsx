import React from 'react'
import Image from 'next/image';
const Review = () => {
    return (
        <div className='review embla__slide'>
            <div className='review-head'>
                <div className='avatar'></div>
                <div className='review-info'>
                    <p className='name'>Doris Holland</p>
                    <p className='date'>2 days ago</p>
                </div>
                <div className='rating'>
                    <Image src='/trustpilot/stars-5-green.svg' alt='5 Star' width='120' height='20'/>
                </div>
            </div>
            <div className='review-content'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.
            </div>
            <div className='review-bottom'>
                <Image 
                    src='/trustpilot/trustpilot-logo.svg'
                    width='105'
                    height='34'
                />
            </div>
        </div>
    )
}

export default Review;
