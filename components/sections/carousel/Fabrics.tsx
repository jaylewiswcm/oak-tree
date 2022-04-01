import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import swiper modules
import { Navigation } from "swiper";

export const Fabrics = () => {
  return (
    <div className='fabric-carousel'>
                            <Swiper
                                slidesPerView={"auto"}
                                spaceBetween={20}
                                centeredSlides={true}
                                initialSlide={1}
                                navigation={{
                                    prevEl: '.fabric-prev',
                                    nextEl: '.fabric-next',
                                }}    
                                modules={[Navigation]}
                                className="mySwiper"
                                loop={true}
                          
                                >
                                    <SwiperSlide>
                                    <div className='fabric'>
                                        <div className='image-wrapper'>
                                            <Image 
                                                src='/images/fabric/chairs/boucle-claret.png'
                                                alt='Boucle Claret'
                                                layout='responsive'
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <p className='fabric-name'>Boucle Claret</p>
                                        <p className='type'>Fabric</p>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='fabric'>
                                        <div className='image-wrapper'>
                                            <Image 
                                                src='/images/fabric/chairs/boucle-bluebell.png'
                                                alt='Boucle Bluebell'
                                                layout='responsive'
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <p className='fabric-name'>Boucle Bluebell</p>
                                        <p className='type'>Fabric</p>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='fabric'>
                                        <div className='image-wrapper'>
                                            <Image 
                                                src='/images/fabric/chairs/mocca-leather.png'
                                                alt='Mocca Leather'
                                                layout='responsive'
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <p className='fabric-name'>Mocca Leather</p>
                                        <p className='type'>Leather</p>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='fabric'>
                                        <div className='image-wrapper'>
                                            <Image 
                                                src='/images/fabric/chairs/floral-green.png'
                                                alt='Floral Green'
                                                layout='responsive'
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <p className='fabric-name'>Floral Green</p>
                                        <p className='type'>Fabric</p>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='fabric'>
                                        <div className='image-wrapper'>
                                            <Image 
                                                src='/images/fabric/chairs/floral-champagne.png'
                                                alt='Floral Champagne'
                                                layout='responsive'
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <p className='fabric-name'>Floral Champagne</p>
                                        <p className='type'>Fabric</p>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='fabric'>
                                        <div className='image-wrapper'>
                                            <Image 
                                                src='/images/fabric/chairs/floral-wheat.png'
                                                alt='Floral Wheat'
                                                layout='responsive'
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <p className='fabric-name'>Floral Wheat</p>
                                        <p className='type'>Fabric</p>
                                    </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="button-wrapper">
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
                                </div>
                            </div>
  )
}
