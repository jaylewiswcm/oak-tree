import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import swiper modules
import { Autoplay, Pagination } from "swiper";
// Data
import testimonials from '../../../../data/testimonials/testimonials.json';
// Components
import { TestimonialTile } from '../TestimonialTile';

interface ComponentProps {
  setShow: any
  setVideoId: any
}

const CarouselTandR = ({setShow, setVideoId}: ComponentProps) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={50}
    pagination={{
      clickable: true,
      el:'#hero-pagination'
    }}
    loop
    autoplay
    allowTouchMove={false}
    modules={[Pagination, Autoplay]}
    className="hero-carousel"> 
    {testimonials.map((cx) => 
        <SwiperSlide key={cx.name}>
                     <div className='testimonial'>
                        <div className='image-wrapper'>
                            <Image
                                src={cx.thumbnail}
                                alt={cx.name}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        <div className='cx-name'>
                            <p className='name'>{cx.name}</p>
                            <p className='loc'>{cx.location}</p>
                            <button onClick={()=> {setShow(true); setVideoId(cx.videoId)}} className='watch-button'>Watch Story</button>
                        </div>
                        </div>
                        <div className='review'>
                            <div className='qoute-mark mark-left'>
                                <Image 
                                    src='/vectors/quote-mark-left.svg'
                                    alt='Quote mark'
                                    layout='responsive'
                                    width='22'
                                    height='17'
                                />
                            </div>
                            <p className='quote'>{cx.quote}</p>
                            <div className='qoute-mark mark-right'>
                                <Image 
                                    src='/vectors/quote-mark-right.svg'
                                    alt='Quote mark'
                                    layout='responsive'
                                    width='22'
                                    height='17'
                                />
                            </div>
                            <div className='product'>
                                <div className='product-image'>
                                    <Image 
                                        src={cx.product.imageSrc}
                                        alt={cx.product.name}
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='center'
                                        quality={100}
                                    />
                                </div> 
                                <div className='product-name'>
                                    <p>{cx.product.name}</p>
                                    <Link href={cx.product.url}><a>View product</a></Link>
                                </div>
                            </div> 
                            {/* <Link href='/'><a className='story-link'>Read Story</a></Link>    */}
                        </div>
                    </div>
        </SwiperSlide>
        )}
  </Swiper>
  )
}

export default CarouselTandR;