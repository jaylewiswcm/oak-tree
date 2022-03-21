import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import swiper modules
import { FreeMode, Pagination } from "swiper";
// Data
import testimonials from '../../../data/testimonials/testimonials.json';
// Components
import { TestimonialTile } from './TestimonialTile';


const Testimonials = () => {
  return (
    <div className='testimonials con-reg'>
   
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
            // when window width is >= 320px
            1235: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 30   
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 15    
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 15   
            }
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((cx) => 
            <SwiperSlide>
                <TestimonialTile 
                    name={cx.name}
                    location={cx.location}
                    product={cx.product}
                    thumbnail={cx.thumbnail} 
                    key={cx.name}
                />
            </SwiperSlide>
            )}
      </Swiper>
  </div>
  )
}

export default Testimonials;