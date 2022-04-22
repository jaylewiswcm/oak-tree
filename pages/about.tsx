import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image'
import Link from 'next/link';
import Resources from '../components/sections/resources/Resources';
import Modal from '../components/modal/Modal';

import VideoCarousel from '../components/modal/video/VideoCarousel';
const About = () => {
    const [modal, setVideoModal] = useState(false)
    return (
        <>
            <NextSeo  
                title="About Us | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we specialise in a range of handmade mobility furniture and equipment to help improve your independence. Find out more today"
            />
            {modal && <Modal  classNames='' setShow={setVideoModal}><VideoCarousel videoId='Ot1KJHw1uto' show={modal} setShow={setVideoModal}></VideoCarousel></Modal>}
            <div className='con-reg about-hero'>
                <div className='image-wrapper desktop-image'>
                    <Image 
                        src='/images/heros/about-hero.png'
                        alt='About Oak Tree - watch the story'
                        layout='responsive'
                        width={1200}
                        height={597}
                        quality='100'
                    />
                </div>
                <div className='mobile-image-wrapper'>
                <Image 
                        src='/images/heros/about-hero-mobile.png'
                        alt='About Oak Tree - watch the story'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'   
                        quality='100'                     
                    />
                </div>
                <div className='video-overlay-content'>
                    <h1>Watch the Oak Tree story</h1>
                    <button onClick={() => setVideoModal(true)}>
                        <span className='icon-wrapper'>
                            <Image
                                src='/buttons/play-btn-outline.svg'
                                alt='Play button'
                                width={22}
                                height={19}
                            />
                            <span className='hover-play'>
                            <Image
                                src='/buttons/play-btn-fill.svg'
                                alt='Play button'
                                width={22}
                                height={19}
                            />
                            </span>
                        </span>
                        <p>Watch The Video</p>
                    </button>
                </div>
            </div>
            <div className='about-sections con-reg'>
                <div className='section'>
                    <div className="image-wrapper">
                        <Image 
                            src='/images/about-us/company-photo-1.png' 
                            alt='Oak Tree company'
                            layout='responsive'
                            width={581}
                            height={417}
                        />
                    </div>
                    <div className='section-content'>
                        <p className="subheading">Oak Tree Mobility</p>
                        <h2 className='heading'>Our Mission</h2>
                        <p className='content-p'>Here at Oak Tree Mobility, we believe that everyone should be free to live a rich and fulfilling life. This belief affects everything that we do and is reflected in our range of handmade rise and recline chairs, adjustable beds and bath lifts.</p>
                        <Link href="/" ><a >Our Products</a></Link>
                    </div>
                </div>
                <div className='section'>
                    <div className="image-wrapper">
                        <Image 
                            src='/images/about-us/how-we-started.png' 
                            alt='Rick and Tom - Where we started'
                            layout='responsive'
                            width={581}
                            height={417}
                        />
                    </div>
                    <div className='section-content'>
                        <p className="subheading">About Us</p>
                        <h2 className='heading'>How We Started</h2>
                        <p className='content-p'>Oak Tree Mobility was founded back in 2008 when directors Ricky Towler and Tom Powell set out to create a mobility business that did things differently. Frustrated by their experiences in the mobility sector, Ricky and Tom established Oak Tree as a reaction against the poor customer service and tired-looking products that seemed to come as standard.</p>
                        <Link href="/" ><a >Our Careers</a></Link>
                    </div>
                </div>
                <div className='section'>
                    <div className="image-wrapper">
                        <Image 
                            src='/images/about-us/customer.png' 
                            alt='Our focus, the customer'
                            layout='responsive'
                            width={581}
                            height={417}
                        />
                    </div>
                    <div className='section-content'>
                        <p className="subheading">You The Customer</p>
                        <h2 className='heading'>Our Mission</h2>
                        <p className='content-p'>From day one, we have been all about you, the customer. At Oak Tree, we know that our products change people’s lives, and it is this that drives us forward. We are on a mission to help as many people as we can, and never losing sight of this allows us to focus on doing what we do best: bring you top quality craftsmanship and excellent service, all at an affordable price.</p>
                        <Link href="/testimonials-and-reviews"><a>Testimonials and Reviews</a></Link>
                    </div>
                </div>
            </div>

            <div className='tagline-banner'>
                <div className='con-reg inner-wrapper'>
                    <p className='subheading'>At Oak Tree</p>
                    <h3 className='heading'>Your <span className='yellow-3'>Comfort</span> Is Our <span className='yellow-3'>Strength</span></h3>
                </div>
            </div>

            <Resources pageType='about' />
        </>
    )
}
export default About