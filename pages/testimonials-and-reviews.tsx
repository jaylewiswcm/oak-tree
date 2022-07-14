import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image'
import Script from 'next/script';

// Components
import Reviews from '../components/sections/reviews/Reviews';
import TandRTestimonials from '../components/sections/Testimonials/TandRTestimonials';
import FooterCollections from '../components/sections/collections/FooterCollections';
import Modal from '../components/modal/Modal';
import VideoCarousel from '../components/modal/video/VideoCarousel';
import CarouselTandR from '../components/sections/Testimonials/carousel/CarouselTandR';
import { TrustpilotScore } from '../components/assets/TrustpilotScore';


const TestimonialsAndReviews = () => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState('');

    return (
        <>
           <Script src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async />
            <NextSeo  
                title="Testimonials and reviews| Oak Tree Mobility"
                description="Take a look at the 2,000+ independent online reviews for Oak Tree Mobility. We have a customer satisfaction rate of more than 98%. Find out why"
            />
            <Modal classNames='' visible={show} setShow={setShow}><VideoCarousel videoId={videoId} show={show} setShow={setShow}></VideoCarousel></Modal>
            <div className='con-reg t-and-r-hero'>
                <div className='hero-content'>
                    <p className='subheading'>Rated Excellent on Trustpilot</p>
                    <h1 className='heading'>Trusted by thousands of customers across the country</h1>
                    <Link href='#t-and-r-customer-stories'><a className='main-cta'>View our customer stories</a></Link>
                    <TrustpilotScore />
                </div>
                <div className='testimonial-holder'>
                    <CarouselTandR setShow={setShow} setVideoId={setVideoId}/>
                    <div className='carousel-pagination ' id='hero-pagination'></div>
                </div>
            </div>
            <div className='tp-reviews'>
                <Reviews orphan={false} />
            </div>
            <TandRTestimonials />
            <FooterCollections />
        </>
    )
}
export default TestimonialsAndReviews


