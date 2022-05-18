import React from 'react'
import Image from 'next/image';
import CarouselNormal from './carousel/CarouselNormal';
import CarouselLanding from './carousel/CarouselLanding';

interface ComponentProps {
    orphan: boolean
}

const Reviews = ({orphan} : ComponentProps) => {    
  return (
    <div className='reviews-container'>
        <div className='reviews'>
        <div className='star-logo'>
            <Image 
                src='/trustpilot/logo-star.svg'
                alt='Trustpilot logo star'
                width='35'
                height='32'
            />
        </div>
            <p className='oaktree-green subheading'>Rated Excellent on Trustpilot</p>
            <p className='statement'>Hear what our customers have to say</p>
            <p className='trustscore'>TrustScore 4.5 | 1000 reviews</p>
            <div className='review-carousel'>
                <div className='left-hider  hider'>
                    <button className='slide-prev'>
                        <Image 
                            src='/vectors/dark-green-arrow-btn-slim.svg'
                            alt='Prev'
                            width='20'
                            height='20'
                        />
                    </button>
                </div>
                <div className='right-hider  hider'>
                    <button className='slide-next'>
                    <Image 
                            src='/vectors/dark-green-arrow-btn-slim.svg'
                            alt='Prev'
                            width='20'
                            height='20'
                        />
                    </button>
                </div>
                { orphan === false ? <CarouselNormal /> : <CarouselLanding />}
     
     <div className='slider-pagination-dots'></div>
            </div>
            {/* <div className='trustpilot-logo'>
                <Image
                    src='/trustpilot/trustpilot-logo.svg'
                    alt='Trustpilot'
                    width='132.97'
                    height='32'
                />
            </div> */}
        </div>
    </div>
  )
}

export default Reviews;