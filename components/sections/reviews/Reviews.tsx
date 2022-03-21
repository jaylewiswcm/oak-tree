import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import swiper modules
import { Navigation, Pagination } from "swiper";
const Reviews = () => {
  return (
    <div className='con-reg'>
        <div className='reviews'>
            <p className='oaktree-green subheading'>Rated Excellent on Trustpilot</p>
            <p className='statement'>Hear what our customers have to say</p>
            <p className='trustscore'>TrustScore 4.5 | 1000 reviews </p>
            <div className='review-carousel'>
                <div className='left-hider  hider'>
                    <button className='slide-prev'>
                        <Image 
                            src='/vectors/dark-green-arrow-btn-slim.svg'
                            alt='Prev'
                            width='20'
                            height='20'
                        />
                    </button>
                </div>
                <div className='right-hider  hider'>
                    <button className='slide-next'>
                    <Image 
                            src='/vectors/dark-green-arrow-btn-slim.svg'
                            alt='Prev'
                            width='20'
                            height='20'
                        />
                    </button>
                </div>
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
                breakpoints={{
                    1000: {
                        slidesPerView:2,
                    },
                    800: {
                        slidesPerView:1
                    }
                }}
                modules={[Navigation, Pagination]}
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
     <div className='slider-pagination-dots'></div>
                {/* <div className='review'>
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
                </div> */}
            </div>
            <div className='trustpilot-logo'>
                <Image
                    src='/trustpilot/trustpilot-logo.svg'
                    alt='Trustpilot'
                    width='132.97'
                    height='32'
                />
            </div>
        </div>
    </div>
  )
}

export default Reviews;