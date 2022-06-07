import React from 'react'
import Image from 'next/image';
import CarouselNormal from './carousel/CarouselNormal';
import CarouselLanding from './carousel/CarouselLanding';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url:string) =>  axios.get(url).then(res => res.data)

interface ComponentProps {
    orphan: boolean
}

const Reviews = ({ orphan }:ComponentProps) => {  
    const { data, error } = useSWR('/api/trustpilotData', fetcher)

    if(!data) {
        return <>...Loading</>
    }

    const { numberOfReviews, score } = data;
    
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
            <p className='oaktree-green subheading'>We're Rated Excellent on Trustpilot</p>
            <p className='statement'>Don’t’ take our word for it...</p>
            <p className='trustscore'>TrustScore {score.trustScore} | {numberOfReviews.total} reviews</p>
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