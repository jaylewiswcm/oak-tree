import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
// Components 
import {BritishMade} from './BritishMade';
import {TradeIn} from './TradeIn';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFlip, Autoplay } from "swiper";

interface ComponentProps {
    hideOverlay: any
    className:string
}

export const UspOverlay = ({hideOverlay, className}:ComponentProps) => {
  return (
    <div className={className}>
           <Swiper
                effect={"flip"}
                grabCursor={true}
                modules={[EffectFlip, Autoplay]}
                autoplay={{ delay: 5000}}
                className="usp-overlay-swiper"
            >
                <SwiperSlide>
                    <BritishMade />
                </SwiperSlide>
                <SwiperSlide>
                    <TradeIn />
                </SwiperSlide>
            </Swiper>
            <div className='close-button' onClick={() => hideOverlay(false)}>
            <div className='cross'>
            <Image
                src='/buttons/red-exit-cross.svg'
                alt='British Made'
                layout='responsive'
                width='176'
                height='140'
            />
            </div>
        </div>
    </div>
  )
}