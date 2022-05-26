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
                                <div className='button-wrapper'>
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
                                </div>
                            <Swiper
                                slidesPerView={"auto"}
                                spaceBetween={20}
                                centeredSlides={true}
                                initialSlide={1}
                                speed={500}
                                navigation={{
                                    prevEl: '.fabric-prev',
                                    nextEl: '.fabric-next',
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
                                <div className='button-wrapper'>
                                    <button className='fabric-next carousel-button next-btn'>
                                        <span className='arrow-wrapper'>
                                            <Image
                                                src='/buttons/arrow-next-white.svg'
                                                alt='Next Fabric'
                                                layout='responsive'
                                                width={16}
                                                height={21}
                                            />
                                        </span>
                                    </button>                  
                                </div>
                           
                           
                                {/* <div className="button-wrapper">
                                    <div className='border border-left'>
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
                                    </div>
                                    <div className='border border-right'>
                                    <button className='fabric-next carousel-button next-btn'>
                                        <span className='arrow-wrapper'>
                                            <Image
                                                src='/buttons/arrow-next-white.svg'
                                                alt='Next Fabric'
                                                layout='responsive'
                                                width={16}
                                                height={21}
                                            />
                                        </span>
                                    </button>
                                    </div>
                                </div> */}
                            </div>
  )
}
