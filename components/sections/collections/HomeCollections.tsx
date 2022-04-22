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

// images
import chairCollection from '../../../public/images/collections/collection-chairs.png'
import bedCollection from '../../../public/images/collections/collection-beds.png'
import bathLiftCollection from '../../../public/images/collections/collection-bathlifts.png'

const HomeCollections = () => {
  return (
<div className='collections'>
    <Link href='/chairs'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src={chairCollection}
                  alt='Rise and Recline Chairs'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <h3 className='collection-title'>Rise and Recline Chairs</h3>
              <p className='desc'>Luxurious and well made allowing comfort at the touch of a button.</p>
              <div className='acting-btn'>
                <p>View Chairs</p>
             </div>
            </a>
          </Link>
        <Link href='/adjustable-beds'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src={bedCollection}
                  alt='Adjustable Beds'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <h3 className='collection-title'>Adjustable Beds</h3>
              <p className='desc'>The ultimate in sophistication and comfort, offering a wide collection.</p>
              <div className='acting-btn'>
                <p>View Beds</p>
             </div>
            </a>
          </Link>
          <Link href='/bath-lifts'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src={bathLiftCollection}
                  alt='Bath Lifts'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <h3 className='collection-title'>Bath Lifts</h3>
              <p className='desc'>Rediscover the joys and health benefits of a nice warm bath with our bath lift.</p>
              <div className='acting-btn'>
                <p>View Bath Lifts</p>
             </div>
            </a>
          </Link>
        </div>
  )
}

export default HomeCollections;