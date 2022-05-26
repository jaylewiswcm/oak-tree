import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import swiper modules
import { FreeMode, Pagination } from "swiper";
// Data
import testimonials from '../../../../data/testimonials/testimonials.json';
// Components
import { TestimonialTile } from '../TestimonialTile';

interface ComponentProps {
  setSelectedCx: any
  setShow: any
}

const CarouselNormal = ({setSelectedCx, setShow}: ComponentProps) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
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
    modules={[Pagination]}
    className="mySwiper"> 
    {testimonials.slice(0,4).map((cx) => 
        <SwiperSlide key={cx.name}>
            <TestimonialTile  cx={cx} setSelectedCx={setSelectedCx} setShow={setShow}/>
        </SwiperSlide>
        )}
  </Swiper>
  )
}

export default CarouselNormal;