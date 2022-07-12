import React, { useEffect, useState } from 'react'
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
// Swiper modules
import { Navigation } from "swiper";
// Component 
import { Accessory } from './Accessory';
// Data
import chair_accessories from '../../../data/accessories/chair_accessories.json'
import bed_accessories from '../../../data/accessories/bed_accessories.json'
import { CarouselArrow } from '../../buttons/CarouselArrow';

interface ComponentProps {
    type: string
}

export const AccessoryCarousel = ({type}: ComponentProps) => {
    const [accessories, setAccessories] = useState(chair_accessories);
    const [slideChange, setSlideChange] = useState(false)

    useEffect(() => {

        if(type === 'chair' ) {
            setAccessories(chair_accessories);
        } else if(type === 'bed') {
            setAccessories(bed_accessories);
        }
        
    },[type])
 
  return (
    <>
    <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        onSlideChange={() => setSlideChange(true)}
        onSlideChangeTransitionEnd={() => setSlideChange(false)}
        navigation={{
            prevEl: '#accessory-prev',
            nextEl: '#accessory-next',
        }}    
        modules={[Navigation]}
        className="carousel accessory-carousel con-reg"
        >
        <CarouselArrow type='prev' btnId='accessory-prev'/>
         { accessories && accessories.map((item:any, index:number) => 
                <SwiperSlide key={index}>
                    <Accessory item={item} slideChange={slideChange} />
                </SwiperSlide>
         )} 
       <CarouselArrow type='next' btnId='accessory-next'/>
        </Swiper> 
        </>
  )
}
