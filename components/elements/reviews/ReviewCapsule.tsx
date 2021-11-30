import React from 'react'
// Components
import Previous from '../buttons/Previous';
import Next from '../buttons/Next';
import Review from './Review';

const ReviewCapsule = () => {
    return (
        <div className='review-capsule'>
        <div className='button-wrapper'>
            <Previous id='review-prev' img='no-bg-dark' classname='' />
        </div>
        <div className='review-carousel'>
            <Review />
        </div>
        <div className='button-wrapper'>
            <Next id='review-next' img='no-bg-dark' classname='' />
        </div>
        <div className='button-wrapper mobile-btn-wrapper'>
            <Previous id='review-next' img='no-bg-dark' classname='' />
            <Next id='review-next' img='no-bg-dark' classname='' />
        </div>
      </div>
    )
}


export default ReviewCapsule;