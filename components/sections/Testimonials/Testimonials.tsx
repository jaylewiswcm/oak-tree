import React, {useState, useEffect} from 'react'
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

interface ComponentProps {
  pageType: string
}

const Testimonials = ({pageType} : ComponentProps) => {

  return (
    <div className='testimonials con-reg'>
      { pageType && pageType === 'normal' ? 
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
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
          el:'#testimonial-pagination'
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"> 
        {testimonials.map((cx) => 
            <SwiperSlide key={cx.name}>
                <TestimonialTile 
                    name={cx.name}
                    location={cx.location}
                    product={cx.product}
                    thumbnail={cx.thumbnail} 
                    
                />
            </SwiperSlide>
            )}
      </Swiper>
             : pageType === 'orphan' &&  
             <Swiper
             slidesPerView={1}
             spaceBetween={30}
             breakpoints={{
                 1100: {
                     slidesPerView: 2,
                     spaceBetween: 15   
                 },
                 1000: {
                  slidesPerView: 1,
                  spaceBetween: 30   
                 },
                 700: {
                  slidesPerView: 2,
                  spaceBetween: 15 
                 }
             }}
             pagination={{
               clickable: true,
               el:'#testimonial-pagination'
             }}
             modules={[Pagination]}
             className="mySwiper"> 
             {testimonials.map((cx) => 
                 <SwiperSlide key={cx.name}>
                     <TestimonialTile 
                         name={cx.name}
                         location={cx.location}
                         product={cx.product}
                         thumbnail={cx.thumbnail} 
                         key={cx.name}
                     />
                 </SwiperSlide>
                 )}
           </Swiper>}
           <div className='carousel-pagination' id='testimonial-pagination'></div>
  </div>
  )
}

export default Testimonials;