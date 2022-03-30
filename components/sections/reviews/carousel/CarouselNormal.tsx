import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Review } from '../review/Review';
// Data
import reviews from "../../../../data/reviews/reviews.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import swiper modules
import { Navigation, Pagination, Autoplay } from "swiper";

 const CarouselNormal = () => {
  return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        navigation={{
            nextEl: '.slide-next',
            prevEl: '.slide-prev',
        }}
        allowTouchMove={true}
        pagination={{
        clickable: true,
        el: '.slider-pagination-dots',
        type: 'bullets',
        }}
        breakpoints={{
            1000: {
                slidesPerView: 2,
                spaceBetween:15
            },
            800: {
                slidesPerView:1
            }
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
    > 
    {reviews.map((review, index) => 
            <SwiperSlide key={index}>
                <Review review={review}/>
            </SwiperSlide>
        )}
    </Swiper>
  )
}
export default CarouselNormal;