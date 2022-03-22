import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import swiper modules
import { FreeMode, Pagination } from "swiper";
const OtFamily = () => {
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
            <SwiperSlide>
             <div className='cx-item'>
                        <div className="image-wrapper">
                            <Image 
                                src='/images/landing-pages/customers-chair/grace-baker.png'
                                alt='Grace Baker'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </div>
                        <p>Grace Baker loved her home demo of our rise and recline chair!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cx-item'>
                        <div className="image-wrapper">
                            <Image 
                                src='/images/landing-pages/customers-chair/mrs-hughes.png'
                                alt='Mrs Hughes'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </div>
                        <p>A very happy Mrs Hughes, who is seen here putting her feet up</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cx-item'>
                        <div className="image-wrapper">
                            <Image 
                                src='/images/landing-pages/customers-chair/mrs-swift.png'
                                alt='Mrs Swift'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </div>
                        <p>Mrs Swift found our demo chair a bit too comfortable!</p>
                    </div>
                </SwiperSlide>

        </Swiper>
  )
}

export  default OtFamily;