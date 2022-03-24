import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const HomeCollections = () => {
  return (
<div className='collections'>
    <Link href='/'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src='/images/collections/collection-chairs.png'
                  alt='Rise and Recline Chairs'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
              <h3 className='collection-title'>Rise and Recline Chairs</h3>
              <p className='desc'>Luxurious and well made allowing comfort at the touch of a button.</p>
              <div className='acting-btn'>
                <div className='hover-bg'></div>
                <p>View Chairs</p>
             </div>
            </a>
          </Link>
        <Link href='/'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src='/images/collections/collection-beds.png'
                  alt='Adjustable Beds'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
              <h3 className='collection-title'>Adjustable Beds</h3>
              <p className='desc'>The ultimate in sophistication and comfort, offering a wide collection.</p>
              <div className='acting-btn'>
                <div className='hover-bg'></div>
                <p>View Beds</p>
             </div>
            </a>
          </Link>
          <Link href='/'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src='/images/collections/collection-bathlifts.png'
                  alt='Bath Lifts'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
              <h3 className='collection-title'>Bath Lifts</h3>
              <p className='desc'>Rediscover the joys and health benefits of a nice warm bath with our bath lift.</p>
              <div className='acting-btn'>
                <div className='hover-bg'></div>
                <p>View Bath Lifts</p>
             </div>
            </a>
          </Link>
        </div>
  )
}

export default HomeCollections;