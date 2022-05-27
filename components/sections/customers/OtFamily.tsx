import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import swiper modules
import { FreeMode, Pagination } from "swiper";
// Components 
import {Card} from './Card';
// data 
import data from '../../../data/testimonials/OTFamily.json';

interface ComponentProps {
    productType: string;
}

const OtFamily = ({productType}: ComponentProps) => {
  return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
                1250: {
                    slidesPerView: 3,
                    spaceBetween: 15   
                },
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 15   
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
                el: '#ot-family-pagination',
                type: 'bullets',
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {data.map((product, index) => 
                <div key={index}>
                    {product.product === productType && product.testimonials.map((cx, index) =>  <SwiperSlide key={index}><Card cx={cx} /></SwiperSlide>)}
                </div>
                )}
        </Swiper>
  )
}

export  default OtFamily;