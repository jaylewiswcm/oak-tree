import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image'
import Script from 'next/script';
// Hooks 
import { useIsSmall } from '../utils/hooks';
// Components
import Reviews from '../components/sections/reviews/Reviews';
import TandRTestimonials from '../components/sections/Testimonials/TandRTestimonials';
import FooterCollections from '../components/sections/collections/FooterCollections';
import Modal from '../components/modal/Modal';
import VideoCarousel from '../components/modal/video/VideoCarousel';
import CarouselTandR from '../components/sections/Testimonials/carousel/CarouselTandR';
// Images
import leftLogo from '../public/trustpilot/trustpilot-logo-black-w-stars.svg'
import centerLogo from '../public/trustpilot/trustpilot-logo-black-w-stars-centered.svg'



const TestimonialsAndReviews = () => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState('');
    
    const isSmall = useIsSmall();

    return (
        <>
           <Script src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async />
            <NextSeo  
                title="Testimonials and reviews| Oak Tree Mobility"
                description="Take a look at the 2,000+ independent online reviews for Oak Tree Mobility. We have a customer satisfaction rate of more than 98%. Find out why"
            />
            {show && <Modal classNames='' setShow={setShow}><VideoCarousel videoId={videoId} show={show} setShow={setShow}></VideoCarousel></Modal>}
            <div className='con-reg t-and-r-hero'>
                <div className='hero-content'>
                    <p className='subheading'>Rated Excellent on Trustpilot</p>
                    <h1 className='heading'>Trusted by thousands of customers across the country</h1>
                    <Link href='#t-and-r-customer-stories'><a className='main-cta'>View our customer stories</a></Link>
                    <div className='tp-logo'>
                        {/* <Image 
                            src={isSmall ? leftLogo : centerLogo}
                            alt='Trustpilot logo'
                            layout='responsive'
                            width='218'
                            height='88'
                        /> */}
                        
                        <div className="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="56607bac0000ff00058643ac" data-style-height="100%" data-style-width="200px" data-theme="light" data-text-color="#212923">
                        <a href="https://uk.trustpilot.com/review/www.oaktreemobility.co.uk" target="_blank" rel="noreferrer">Trustpilot</a>
                        </div>
                    </div>
                </div>
                <div className='testimonial-holder'>
                    <CarouselTandR setShow={setShow} setVideoId={setVideoId}/>
                    <div className='carousel-pagination ' id='hero-pagination'></div>
                    {/* <div className='testimonial'>
                        <div className='image-wrapper'>
                            <Image
                                src='/images/testimonials/mrs-atkins-tile.png'
                                alt='Mrs Atkins'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        <div className='cx-name'>
                            <p className='name'>Mrs Atkins</p>
                            <p className='loc'>Herefordshire</p>
                            <button onClick={()=> {setShow(true); setVideoId('-gVfWLxoJNM')}} className='watch-button'>Watch Story</button>
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
                            <p className='quote'>When my chair came, it was absolutely wonderful to sit in. For the first time for ages, I felt really comfortable.</p>
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
                                        src='/images/products/chairs/oak/oak-collection.png'
                                        alt='The oak chair'
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='center'
                                        quality={100}
                                    />
                                </div> 
                                <div className='product-name'>
                                    <p>The Oak</p>
                                    <Link href='/'><a>View Chair</a></Link>
                                </div>
                            </div> 
                            <Link href='/'><a className='story-link'>Read Story</a></Link>   
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className='bg-dark-green-1 tp-strip'>
                <div className='con-reg'>
                    <div className='tp-logo'>
                        <Image 
                            src='/trustpilot/trustpilot-logo-white-w-stars.svg'
                            alt='Trustpilot logo'
                            layout='responsive'
                            width='218'
                            height='88'
                        />
                    </div>
                </div>
            </div> */}
            <div className='tp-reviews'>
                <Reviews orphan={false} />
            </div>
            <TandRTestimonials />
            <FooterCollections />
        </>
    )
}
export default TestimonialsAndReviews


