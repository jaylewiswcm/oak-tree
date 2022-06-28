import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
// Components 
import {BritishMade} from './BritishMade';
import {TradeIn} from './TradeIn';
import {FreeDelivery} from './FreeDelivery';
import {Warranty} from './Warranty';
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
    <div className={`usp-overlay ${className}`}>
           {/* <Swiper
                effect={"flip"}
                flipEffect={{
                    slideShadows:false
                }}
                grabCursor={true}
                modules={[EffectFlip, Autoplay]}
                autoplay={{ delay: 5000,}}
                className="usp-overlay-swiper"
            >
                <SwiperSlide>
                    <BritishMade />
                </SwiperSlide>
                <SwiperSlide>
                    <TradeIn />
                </SwiperSlide>
                <SwiperSlide>
                    <FreeDelivery />
                </SwiperSlide>
                <SwiperSlide>
                    <Warranty />
                </SwiperSlide>
            </Swiper> */}
            <div className='usp'>
                <div className='icon-wrapper'>
                    <Image 
                        src='/icons/usps/icon-british-made-small.svg'
                        alt='Union Jack in Heart'
                        layout='responsive'
                        width='60'
                        height='60'
                    />
                </div>
                <p>Handmade in<br/>Great Britain</p>
            </div>
            <div className='usp'>
                <div className='icon-wrapper'>
                    <Image 
                        src='/icons/usps/icon-trade-in-small.svg'
                        alt='Union Jack in Heart'
                        layout='responsive'
                        width='60'
                        height='60'
                    />
                </div>
                <p>Minimum<br/>£200 Trade In</p>
            </div>
            <div className='usp trustpilot-usp'>
                <div className='icon-wrapper'>
                    <Image 
                        src='/trustpilot/trustpilot-logo-usp.svg'
                        alt='Union Jack in Heart'
                        layout='responsive'
                        width='81.15'
                        height='34.06'
                    />
                </div>
                <p>Five Star<br/>Satisfaction</p>
            </div>
            <div className='close-button' onClick={() => hideOverlay(false)}>
                <div className='inner-button'>
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
    </div>
  )
}
