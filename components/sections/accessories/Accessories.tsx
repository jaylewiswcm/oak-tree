import React, { useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import swiper modules
import { Navigation } from "swiper";
// Data
import chair_accessories from '../../../data/products/chair_accessories.json';
// Components 
import {Accessory} from './Accessory';

export const Accessories = () => {
    const [slideChange, setSlideChange] = useState(false)
  return (
    <div className='accessories-carousel'>
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        onSlideChange={() => setSlideChange(true)}
        onSlideChangeTransitionEnd={() => setSlideChange(false)}
        navigation={{
            prevEl: '.acc-prev',
            nextEl: '.acc-next',
        }}    
        modules={[Navigation]}
        className="mySwiper"
        >
            {chair_accessories.map((item, index) => 
                <SwiperSlide key={index}>
                     <Accessory item={item} slideChange={slideChange} />
                </SwiperSlide>
              )}
        </Swiper>
       <div className="button-wrapper">
                                    <button className='acc-prev carousel-button'>
                                        <span className='arrow-wrapper'>
                                            <Image
                                                src='/buttons/arrow-prev-white.svg'
                                                alt='Previous Accessory'
                                                layout='responsive'
                                                width={16}
                                                height={21}
                                            />
                                        </span>
                                    </button>
                                    <button className='acc-next carousel-button next-btn'>
                                        <span className='arrow-wrapper'>
                                            <Image
                                                src='/buttons/arrow-next-white.svg'
                                                alt='Next Accessory'
                                                layout='responsive'
                                                width={16}
                                                height={21}
                                            />
                                        </span>
                                    </button>
                                </div>
    </div>
  )
}
