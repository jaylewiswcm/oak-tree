import React, { useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import swiper modules
import { Navigation } from "swiper";
// Data
import chair_accessories from '../../../data/accessories/chair_accessories.json'
import bed_accessories from '../../../data/accessories/bed_accessories.json'
import headboards from '../../../data/headboards/headboards.json'
// Components 
import {Accessory} from './Accessory';

interface ComponentProps {
    type: string
}

export const Accessories = ({type}: ComponentProps ) => {
    const [slideChange, setSlideChange] = useState(false)
  return (
    <div className='accessories-grid'>
        {/* <Swiper
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
        { type === 'chair' ? chair_accessories.map((item, index) => 
                <SwiperSlide key={index}>
                     <Accessory item={item} slideChange={slideChange} />
                </SwiperSlide>
              ) : type === 'bed' ? bed_accessories.map((item, index) => 
              <SwiperSlide key={index}>
                   <Accessory item={item} slideChange={slideChange} />
              </SwiperSlide>
            ) : headboards.map((item, index) => 
            <SwiperSlide key={index}>
                 <Accessory item={item} slideChange={slideChange} />
            </SwiperSlide>
          ) }
        </Swiper> */}
    { type === 'chair' && chair_accessories.map((item, index) => 
        <Accessory item={item} slideChange={slideChange} key={index}/>
        )
    }
    { type === 'bed' && bed_accessories.map((item, index) => 
        <Accessory item={item} slideChange={slideChange} key={index}/>
        )
    }

    </div>
  )
}
