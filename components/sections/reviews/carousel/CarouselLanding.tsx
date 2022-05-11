import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
import axios from 'axios'
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import swiper modules
import { Navigation, Pagination, Autoplay } from "swiper";
// Data
import reviews from '../../../../data/reviews/reviews.json';
// Components
import { Review } from '../review/Review';

const fetcher = (url:string) =>  axios.get(url).then(res => res.data)

 const CarouselLanding = () => {
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
    loop={true}
    allowTouchMove={true}
    pagination={{
    clickable: true,
    el: '.slider-pagination-dots',
    type: 'bullets',
    }}
    autoplay={{delay: 4000}}
    modules={[Navigation, Pagination, Autoplay]}

    className="landing-carousel"
>   
    {data.map((review:any,index:number) => 
        <SwiperSlide key={index}  className="review">
            <Review review={review}/>
        </SwiperSlide>
    )}
</Swiper> 
  )
}
export default CarouselLanding;