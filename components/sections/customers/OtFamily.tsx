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
                                src='/images/landing-pages/customers-chair/cx-1-mrs-c.png'
                                alt='Mrs C'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </div>
                        <p>Perfect chair for me. The comfort and health benefits are too good to not have</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cx-item'>
                        <div className="image-wrapper">
                            <Image 
                                src='/images/landing-pages/customers-chair/cx-2-mr-e.png'
                                alt='Mr E'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </div>
                        <p>Just what I need as I suffer with Odema, So comfy and easy to get in and out of</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cx-item'>
                        <div className="image-wrapper">
                            <Image 
                                src='/images/landing-pages/customers-chair/cx-3-mrs-g.png'
                                alt='Barabara G'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='top'
                            />
                        </div>
                        <p>The dream chair, makes me so comfy in my living room</p>
                    </div>
                </SwiperSlide>

        </Swiper>
  )
}

export  default OtFamily;