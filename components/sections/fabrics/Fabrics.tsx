import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import swiper modules
import { Navigation } from "swiper";
// data
import chairFabrics from '../../../data/fabrics/chair_fabrics.json';
import bedFabrics from '../../../data/fabrics/bed_fabrics.json';
// Components
import {Fabric} from './Fabric';

interface ComponentProps {
    product: string
}

export const Fabrics = ({ product } : ComponentProps) => {
  return (
    <div className='fabric-carousel'>
                                {/* <div className='button-wrapper'>
                                    <button className='fabric-prev carousel-button'>
                                        <span className='arrow-wrapper'>
                                            <Image
                                                src='/buttons/arrow-prev-white.svg'
                                                alt='Previous Fabric'
                                                layout='responsive'
                                                width={16}
                                                height={21}
                                            />
                                        </span>
                                    </button>                     
                                </div> */}
                                    <button className='fabric-prev carousel-button prev-btn'>
                                        <div className='arrow'>
                                            <Image
                                                src='/buttons/carousel-arrow.svg'
                                                alt='Previous Fabric'
                                                layout='responsive'
                                                width={15.73}
                                                height={9.06}
                                            />
                                        </div>
                                    </button>      
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                // centeredSlides={true}
                                // initialSlide={1}
                                speed={200}
                                navigation={{
                                    prevEl: '.fabric-prev',
                                    nextEl: '.fabric-next',
                                }}
                                breakpoints={{
                                    900: {
                                        slidesPerView: 4
                                    },
                                    650: {
                                        slidesPerView: 3
                                    },
                                    500: {
                                        slidesPerView: 2
                                    }
                                }}    
                                modules={[Navigation]}
                                className="carousel"
                                loop={true}
                                >
                                    
                                { product === 'chair' ? chairFabrics.map((fabric, index) => 
                                        <SwiperSlide key={index}>
                                            <Fabric fabric={fabric}/> 
                                        </SwiperSlide>
                                        )
                                        : product === 'bed' && bedFabrics.map((fabric, index) => 
                                        <SwiperSlide key={index}>
                                            <Fabric fabric={fabric}/> 
                                        </SwiperSlide>
                                        ) 
                                } 
                              
                                </Swiper>
                                <button className='fabric-next carousel-button next-btn'>
                                        <div className='arrow'>
                                            <Image
                                                src='/buttons/carousel-arrow.svg'
                                                alt='Next Fabric'
                                                layout='responsive'
                                                width={15.73}
                                                height={9.06}
                                            />
                                        </div>
                                    </button>    
                            </div>
  )
}
