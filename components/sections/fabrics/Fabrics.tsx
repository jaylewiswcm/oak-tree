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
import { CarouselArrow } from '../../buttons/CarouselArrow';

interface ComponentProps {
    product: string
}

export const Fabrics = ({ product } : ComponentProps) => {
  return (
    <>
                
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                // centeredSlides={true}
                                // initialSlide={1}
                                speed={200}
                                navigation={{
                                    prevEl: '#fabric-prev',
                                    nextEl: '#fabric-next',
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
                                className="carousel fabric-carousel con-reg"
                                loop={true}
                                >
                                    <CarouselArrow type='prev' btnId='fabric-prev'/>
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
                               <CarouselArrow type='next' btnId='fabric-next'/>
                                </Swiper>
                               
                            </>
  )
}
