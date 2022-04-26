import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image'
import Reviews from '../components/sections/reviews/Reviews';
import TandRTestimonials from '../components/sections/Testimonials/TandRTestimonials';
import FooterCollections from '../components/sections/collections/FooterCollections';
import Modal from '../components/modal/Modal';
import VideoCarousel from '../components/modal/video/VideoCarousel';

const TestimonialsAndReviews = () => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState('');
    return (
        <>
            <NextSeo  
                title="Testimonials and reviews| Oak Tree Mobility"
                description="Take a look at the 2,000+ independent online reviews for Oak Tree Mobility. We have a customer satisfaction rate of more than 98%. Find out why"
            />
            {show && <Modal classNames='' setShow={setShow}><VideoCarousel videoId={videoId} show={show} setShow={setShow}></VideoCarousel></Modal>}
            <div className='con-reg t-and-r-hero'>
                <div className='hero-content'>
                    <p className='subheading'>Rated Excellent on Trustpilot</p>
                    <h1 className='heading'>Trusted by thousands of customers across the country</h1>
                    <Link href='#'><a className='main-cta'>View our customer stories</a></Link>
                </div>
                <div className='testimonial-holder'>
                    <div className='testimonial'>
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
                                    />
                                </div> 
                                <div className='product-name'>
                                    <p>The Oak</p>
                                    <Link href='/'><a>View Chair</a></Link>
                                </div>
                            </div> 
                            <Link href='/'><a className='story-link'>Read Story</a></Link>   
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark-green-1 tp-strip'>
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


