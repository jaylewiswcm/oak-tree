import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import Link from 'next/link';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import swiper modules
import { FreeMode, Pagination } from "swiper";
import Modal from '../../modal/Modal';
import VideoCarousel from '../../modal/video/VideoCarousel';
// data 
import testimonials from '../../../data/testimonials/testimonials.json';

const TandRTestimonials = () => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState('');
  return (
    <div className='t-and-r-customer-stories con-reg'>
      {show && <Modal classNames='' setShow={setShow}><VideoCarousel setShow={setShow} show={show} videoId={videoId}></VideoCarousel></Modal>}
    <p className='subheading'>Hear It From Them</p> 
    <h3 className='heading'>Our Customer Stories</h3>
    <div className='stories'>
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    breakpoints={{
        1235: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30   
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 15    
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15   
        }
    }}
    pagination={{
      clickable: true,
      el:'#t-and-r-pagination'
    }}
    modules={[Pagination]}
    className="mySwiper">
        {testimonials.map(cx => 
            <SwiperSlide>
                <div className='cx'>
                    <div className='image-wrapper'>
                        <Image 
                            src={cx.thumbnail}
                            alt={cx.name}
                            layout='responsive'
                            width='1000'
                            height='736'
                        />
                    </div>
                    <p className='name'>{ cx.name }</p>
                    <Link href={cx.product.url}><a className='product'>{ cx.product.name }</a></Link>
                    <p className='content-p'>{cx.desc}</p>
                    <button onClick={() => {setVideoId(cx.videoId); setShow(true);}}>Watch Video</button>
                </div>
            </SwiperSlide>
            )}

    </Swiper>
    </div>
    <div className='carousel-pagination' id='t-and-r-pagination'></div>
</div>
  )
}

export default TandRTestimonials