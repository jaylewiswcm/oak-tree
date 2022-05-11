import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Review } from '../review/Review';
import useSWR from 'swr'
import axios from 'axios'
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

const fetcher = (url:string) =>  axios.get(url).then(res => res.data)

 const CarouselNormal = () => {
    const { data, error } = useSWR('/api/reviews', fetcher)
    
    if(error) {
        return <div>Error</div>
    }

    if(!data) {
        return <div>Loading ...</div>
    }
  return (
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        navigation={{
            nextEl: '.slide-next',
            prevEl: '.slide-prev',
        }}
        speed={600}
        loop={true}
        allowTouchMove={true}
        pagination={{
        clickable: true,
        el: '.slider-pagination-dots',
        type: 'bullets',
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
    > 
    {data.map((review:any, index:number) => 
            <SwiperSlide key={index} className='review'>
                <Review review={review}/>
            </SwiperSlide>
        )}
    </Swiper>
  )
}
export default CarouselNormal;