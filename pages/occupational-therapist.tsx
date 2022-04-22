import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
// components
import Modal from '../components/modal/Modal';
import VideoCarousel from '../components/modal/video/VideoCarousel';

const occupationalTherapist = () => {
    const [modal, setVideoModal] = useState(false)
    return (
        <>
            <NextSeo  
                title="Meet Our Occupational Therapist | Oak Tree Mobility"
                description="All Oak Tree Mobility products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services. Find out more today."
            />
              {modal && <Modal  classNames='' setShow={setVideoModal}><VideoCarousel videoId='Ot1KJHw1uto' show={modal} setShow={setVideoModal}></VideoCarousel></Modal>}
                <div className='occ-hero con-reg'>
                    <div className='image-wrapper'>
                        <Image 
                            src='/occupational-therapist/sam-shann-hero.png'
                            alt='Sam Shann our Occupational Therapist'
                            layout='responsive'
                            width='1186'
                            height='570'
                            quality='100'
                        />
                    </div>
                    <div className='hero-intro'>
                        <p className='subheading'>Meet Samantha Shann</p>
                        <h1 className='heading'>Our Occupational Therapist</h1>
                        <p className='intro-p'>Bringing her wide-ranging knowledge and years of experience to Oak Tree, where she provides support and training that enables us to help our customers get the most out of their products.</p>
                        <Link href='/'><a className='main-cta'>Find out more</a></Link>
                    </div>
                </div>
                <div className='occ-sections con-reg'>
                    <div className="section">
                        <div className='image-wrapper'>
                            <Image 
                                src='/occupational-therapist/sam-shann-3.png'
                                alt='Sam Shann with our chair'
                                layout='responsive'
                                width='568'
                                height='442'
                                quality='100'   
                            />
                        </div>
                        <div className='section-content'>
                            <h2>An independent opinion <br/>you can trust</h2>
                            <p>All Oak Tree Mobility products are approved by Samantha Shann, occupational therapist and co-founder of UK Therapy Services. Samantha’s work with us means you can rest assured that your Oak Tree products satisfy the high standards of an independent health professional. Indeed, by working closely with Samantha and UK Therapy Services, we ensure that every product we build provides the comfort and support you need.</p>
                        </div>
                    </div>
                    <div className="section">
                        <div className='image-wrapper'>
                            <Image 
                                src='/occupational-therapist/sam-shann-4.png'
                                alt='Sam Shann with customer'
                                layout='responsive'
                                width='568'
                                height='442'
                                quality='100'   
                            />
                        </div>
                        <div className='section-content'>
                        <h2>How Samantha helps us</h2>
                        <p>Samantha also supports and guides our consultants, making sure they are fully trained to understand good posture, correct seating position, and supportive transfer in and out of chairs, beds, and bath lifts. This means they are in the best possible position to help you choose a product that will keep you comfortable for years to come.</p>
                    </div>
                    </div>
                </div>
                <div className='occ-quote-banner bg-dark-green-1'>
                    <div className='inner-wrapper con-reg'>
                        <div className='image-wrapper'>
                            <Image
                                src='/occupational-therapist/sam-shann-circle-2.png'
                                alt='Sam Shann face shot'
                                layout='responsive'
                                width='250'
                                height='250'
                                quality='100' 
                            />
                        </div>
                        <div className='quote'>
                            <p className='main-quote'>Oak Tree’s products can help people make day-to-day life easier. They can help people to sit more comfortably and lie more comfortably to get a better night’s sleep because they are better supported.</p>
                            <p className='author'>Samantha Shann, 2016</p>
                        </div>
                    </div>
                </div>
                <div className='occ-partner'>
                    <p>In Partnership with</p>
                    <div className='logo-wrapper'>
                            <Image
                                src='/occupational-therapist/ukts-logo.png'
                                alt='UK Therapy Services logo'
                                layout='responsive'
                                width='278'
                                height='44'
                                quality='100' 
                            />
                    </div> 
                </div>
                <div className='occ-video con-reg'>
                    <div className='image-wrapper'>
                            <Image
                                src='/occupational-therapist/sam-shann-video.png'
                                alt='Samantha Shann Demonstrating the recline chair'
                                layout='responsive'
                                width='1200'
                                height='590'
                                quality='100' 
                            />
                    </div>
                    <div className='video-overlay-content'>
                    <h1>Watch what Samantha does</h1>
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
        </>
    )
}
export default occupationalTherapist


