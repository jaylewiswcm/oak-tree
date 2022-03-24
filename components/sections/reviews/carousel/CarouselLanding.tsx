import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import swiper modules
import { Navigation, Pagination, Autoplay } from "swiper";

 const CarouselLanding = () => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    centeredSlides={true}
    navigation={{
        nextEl: '.slide-next',
        prevEl: '.slide-prev',
    }}
    allowTouchMove={true}
    pagination={{
    clickable: true,
    el: '.slider-pagination-dots',
    type: 'bullets',
    }}
    autoplay={{delay: 4000}}
    modules={[Navigation, Pagination, Autoplay]}

    className="mySwiper"
> 
<SwiperSlide>
<div className='review'>
        <div className="review-header">
            <div className='avatar'></div>
            <div className='details'>
                <p className='name'>Doris Holland</p>
                <p className='location'>London</p>
            </div>
            <div className='rating'>
                <Image 
                    src='/trustpilot/stars-4_5.svg'
                    alt='Rating: 4.5 stars'
                    width='105.2'
                    height='19.35'
                />
            </div>
        </div>
        <div className='review-content'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
        <div className='review-footer'>
            <p className='date'>2 days ago</p> 
            <div className='logo'>
            <Image
                src='/trustpilot/trustpilot-logo.svg'
                alt='Trustpilot'
                width='107.31'
                height='26.35'
            />
            </div>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
<div className='review'>
        <div className="review-header">
            <div className='avatar'></div>
            <div className='details'>
                <p className='name'>Doris Holland</p>
                <p className='location'>London</p>
            </div>
            <div className='rating'>
                <Image 
                    src='/trustpilot/stars-4_5.svg'
                    alt='Rating: 4.5 stars'
                    width='105.2'
                    height='19.35'
                />
            </div>
        </div>
        <div className='review-content'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
        <div className='review-footer'>
            <p className='date'>2 days ago</p> 
            <div className='logo'>
            <Image
                src='/trustpilot/trustpilot-logo.svg'
                alt='Trustpilot'
                width='107.31'
                height='26.35'
            />
            </div>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
<div className='review'>
        <div className="review-header">
            <div className='avatar'></div>
            <div className='details'>
                <p className='name'>Doris Holland</p>
                <p className='location'>London</p>
            </div>
            <div className='rating'>
                <Image 
                    src='/trustpilot/stars-4_5.svg'
                    alt='Rating: 4.5 stars'
                    width='105.2'
                    height='19.35'
                />
            </div>
        </div>
        <div className='review-content'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
        <div className='review-footer'>
            <p className='date'>2 days ago</p> 
            <div className='logo'>
            <Image
                src='/trustpilot/trustpilot-logo.svg'
                alt='Trustpilot'
                width='107.31'
                height='26.35'
            />
            </div>
        </div>
    </div>
</SwiperSlide>
<SwiperSlide>
<div className='review'>
        <div className="review-header">
            <div className='avatar'></div>
            <div className='details'>
                <p className='name'>Doris Holland</p>
                <p className='location'>London</p>
            </div>
            <div className='rating'>
                <Image 
                    src='/trustpilot/stars-4_5.svg'
                    alt='Rating: 4.5 stars'
                    width='105.2'
                    height='19.35'
                />
            </div>
        </div>
        <div className='review-content'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
        <div className='review-footer'>
            <p className='date'>2 days ago</p> 
            <div className='logo'>
            <Image
                src='/trustpilot/trustpilot-logo.svg'
                alt='Trustpilot'
                width='107.31'
                height='26.35'
            />
            </div>
        </div>
    </div>
</SwiperSlide>
</Swiper> 
  )
}
export default CarouselLanding;