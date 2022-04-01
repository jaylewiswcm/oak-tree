import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
// import swiper modules
import { Navigation, Pagination, Grid } from "swiper";
// data
import reviews from '../../../data/reviews/reviews.json'
import { Review } from './review/Review';

const ProductReviews = () => {
  return (
    <div className='product-reviews'>
        <div className='reviews-header'>
             <div className='tp-logo'>
                 <Image
                    src='/trustpilot/trustpilot-logo.svg'
                    alt='Trustpilot'
                    layout='responsive'
                    width={91}
                    height={22}
                 />
             </div>
             <h5 className='heading'>Rated 4.5 Stars</h5>
             <div className='star-rating'>
                <Image
                    src='/trustpilot/star-ratings/4_5-star.svg'
                    alt='Trustpilot'
                    layout='responsive'
                    width={92}
                    height={17}
                 />
             </div>
        </div>
        <Swiper
                slidesPerView={"auto"}
                spaceBetween={40}
                centeredSlides={true}
                loop={true}
                navigation={{
                    prevEl: '.review-prev',
                    nextEl: '.review-next',
                }}    
                modules={[Navigation, Pagination]}
                className="review-carousel"
        >
            {reviews.map((review, index) => 
                <SwiperSlide key={index}>
                    <Review review={review}/>
                </SwiperSlide>
                )}
        </Swiper>
        <div className='review-button-wrapper'>
            <button className='review-prev review-btn'>
                <span className='arrow-wrapper'>
                    <Image
                        src='/vectors/arrow-btn-black.svg'
                        alt='Previous Review'
                        layout='responsive'
                        width={12}
                        height={7}
                    />
                </span>
            </button>
            <button className='review-next next-btn review-btn'>
                <span className='arrow-wrapper'>
                    <Image
                        src='/vectors/arrow-btn-black.svg'
                        alt='Next Review'
                        layout='responsive'
                        width={12}
                        height={7}
                    />
                </span>
            </button>
        </div>
    </div>
  )
}

export default ProductReviews