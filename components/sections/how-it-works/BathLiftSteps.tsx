import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import swiper modules
import { Navigation } from "swiper";

const BathLiftSteps = () => {
  return (
    <div className='slider'>
        <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                centeredSlides={true}
                                initialSlide={0}

                                navigation={{
                                    prevEl: '.step-prev',
                                    nextEl: '.step-next',
                                }}    
                                modules={[Navigation]}
                                className="mySwiper"
                                loop={true}
                                >
                                <SwiperSlide>
                                <div className='step'>
                                    <div className='content'>
                                        <p className='step-num'>Step One</p>
                                        <p className='title'>Sit on the Bath Belt</p>
                                        <ul>
                                            <li>When the saddleband is taut across the top of the bath, simply sit on the saddleband on the comfort slider.</li>
                                            <li>No need to worry about tightening the saddleband.</li>
                                            <li>Once the saddleband is at the top of the bath, the unit will take over and automatically tighten for you, making it ready to sit on.</li>
                                        </ul>
                                    </div>
                                    <div className='image-wrapper'> 
                                        <Image 
                                                src='/images/products/bath-lifts/the-riviera/step-1.png'
                                                alt='Sit on the bath belt'
                                                layout='responsive'
                                                width={587}
                                                height={327}
                                        />
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='step'>
                                    <div className='content'>
                                        <p className='step-num'>Step Two</p>
                                        <p className='title'>Lower Yourself Into the Bath</p>
                                        <ul>
                                            <li>When you are sitting comfortably on the saddleband, press the down button on the unit or remote control.</li>
                                            <li>The saddleband will begin gently lowering you into the bath. If you need to, you can stop and settle yourself on the comfort slider to get comfortable at anytime.</li>
                                        </ul>
                                    </div>
                                    <div className='image-wrapper'> 
                                        <Image 
                                                src='/images/products/bath-lifts/the-riviera/step-1.png'
                                                alt='Sit on the bath belt'
                                                layout='responsive'
                                                width={587}
                                                height={327}
                                        />
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='step'>
                                    <div className='content'>
                                        <p className='step-num'>Step Three</p>
                                        <p className='title'>Relax and Enjoy A Proper Soak</p>
                                        <ul>
                                            <li>Once at the bottom of your bath, relax and bathe as normal.</li>
                                            <li>This is what it’s all about – having a nice long bath and enjoying a deep soak with nothing in the way. This is what the Oak Tree Riviera Plus was invented for.</li>
                                        </ul>
                                    </div>
                                    <div className='image-wrapper'> 
                                        <Image 
                                                src='/images/products/bath-lifts/the-riviera/step-1.png'
                                                alt='Sit on the bath belt'
                                                layout='responsive'
                                                width={587}
                                                height={327}
                                        />
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='step'>
                                    <div className='content'>
                                        <p className='step-num'>Step Four</p>
                                        <p className='title'>Raise Yourself Out of the Bath</p>
                                        <ul>
                                            <li>After you’ve finished bathing, simply press the up button and be safely returned to the top of your bath.</li>
                                        </ul>
                                    </div>
                                    <div className='image-wrapper'> 
                                        <Image 
                                                src='/images/products/bath-lifts/the-riviera/step-1.png'
                                                alt='Sit on the bath belt'
                                                layout='responsive'
                                                width={587}
                                                height={327}
                                        />
                                    </div>
                                </div>
                                </SwiperSlide>

                                </Swiper>
                                <div className='bg'></div>
                                <div className='slider-nav actual-nav'>
                                            <button className='step-prev prev'>Previous</button>
                                            <button className='step-next next'>Next</button>
                                </div>
    </div>
  )
}

export default BathLiftSteps;