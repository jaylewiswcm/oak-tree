import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper Styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Swiper Modules
import { Navigation, Pagination } from "swiper";
// Images
import quoteMark from '../../../public/vectors/quote-mark-left-dark.svg';

export const QuoteCarousel = () => {
  return (
    <Swiper
        slidesPerView={"auto"}
        spaceBetween={100}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        navigation={{
            prevEl: '.advice-prev',
            nextEl: '.advice-next',
        }} 
        breakpoints={{
            1200: {
                spaceBetween: 250
            },
            1100: {
                spaceBetween: 150
            },
            1000: {
                spaceBetween: 100
            }
        }} 
        speed={400}
        pagination={{ 
            el: '.advice-pagination',
            type: 'bullets',
            clickable: true }}  
        modules={[Navigation, Pagination]}
        className='quotes-carousel'
    >
        <div className='nav-button prev-btn'>
            <button className='advice-prev'>
                <div className='arrow-wrapper'>
                <Image
                    src='/vectors/white-arrow.svg'
                    alt='Previous Arrow'
                    width='16.49' 
                    height='10.01'
                    layout='responsive'
                />
                </div>
            </button>
        </div>
        <div className='nav-button next-btn'>
            <button className='advice-next'>
            <div className='arrow-wrapper'>
            <Image
                    src='/vectors/white-arrow.svg'
                    alt='Previous Arrow'
                    width='16.49'
                    height='10.01'
                    layout='responsive'
                />
                </div>
            </button>
        </div>
        <SwiperSlide className='quote'>
            <div className='product-image'>
                <div className="image">
                <Image
                        src='/images/collections/collection-chairs.png'
                        alt='Rise and Recline Chairs'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='left'
                    />
                </div>
                 <div className='quote-mark'>
                     <div className='mark'>
                        <Image
                        src={quoteMark}
                        alt='quoteMark'
                        layout='responsive'
                        width='50'
                        height='37'
                        />
                    </div>
                    </div>
            </div>
       
        <div className='quote-text'>
        <p className='quote-p'>Too much standing or sitting can lead to poor circulation. A high Leg Lift raises the ankles above the level of your heart which helps the blood back to the heart, meaning your heart is not having to work as hard</p>
        <p className='quote-author'><span className='line'></span>Samantha Shann on our <Link href='/chairs'><a>chairs</a></Link></p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='quote'>
        <div className='product-image'>
            <div className="image">
                <Image
                src='/images/collections/collection-beds.png'
                alt='Adjustable Beds'
                layout='fill'
                objectFit='cover'
                objectPosition='left'
                />
            </div>
            <div className='quote-mark'>
                     <div className='mark'>
                        <Image
                        src={quoteMark}
                        alt='quoteMark'
                        layout='responsive'
                        width='50'
                        height='37'
                        />
                    </div>
            </div>
        </div>
        <div className='quote-text'>
            <p className='quote-p'>If you have breathing problems, chest problems, or even back aches, just raising your upper body to a slight angle can allow you to get a much more comfortable night’s sleep. Being able to raise the top half of the body also enables us to get in and out of bed more easily.</p>
            <p className='quote-author'><span className='line'></span>Samantha Shann on our <Link href='/adjustable-beds'><a>beds</a></Link></p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='quote'>
        <div className='product-image'>
            <div className="image">
                <Image
                    src='/images/collections/collection-bathlifts.png'
                    alt='Bath Lifts'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                /> 
            </div>
            <div className='quote-mark'>
                     <div className='mark'>
                        <Image
                        src={quoteMark}
                        alt='quoteMark'
                        layout='responsive'
                        width='50'
                        height='37'
                        />
                    </div>
            </div>
        </div>
        <div className='quote-text'>
            <p className='quote-p'>Bathing brings a world of benefits, from rest and relaxation to soothing away aches and pains. Yet for so many getting in and out can be a struggle that risks aggravating rather than alleviating pains. Oak Tree’s bath lift makes the whole experience easier on joints and muscles.</p>
            <p className='quote-author'><span className='line'></span>Samantha Shann on our  <Link href='/bath-lifts'><a>bath lifts</a></Link></p>
        </div>
        </SwiperSlide>
    </Swiper>
  )
}
