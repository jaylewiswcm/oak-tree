import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
// images
import heroImage from '../public/images/heros/british-made-hero.png';
import Resources from '../components/sections/resources/Resources';
// Components 
import Modal from '../components/modal/Modal';
import VideoCarousel from '../components/modal/video/VideoCarousel';

const BritishMade = () => {
    const [modal, setVideoModal] = useState(false)
    return (
        <>
            <NextSeo  
                title="British Made | Oak Tree Mobility"
                description="Here at Oak Tree Mobility all our products are designed and manufacture here in Great Britain. Find out more."
            />
            {modal && <Modal  classNames='' setShow={setVideoModal}><VideoCarousel videoId='u9-WpUGw0NM' show={modal} setShow={setVideoModal}></VideoCarousel></Modal>}
            <div className='con-reg about-hero'>
                <div className='image-wrapper desktop-image'>
                    <Image 
                        src={heroImage}
                        alt='About Oak Tree - watch the story'
                        layout='responsive'
                        width={1200}
                        height={597}
                        quality='100'
                        placeholder='blur'
                        priority
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
                    <h1>Handmade in Great Britain</h1>
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
                <div className='british-made-badge'>
                    <Image
                        src='/graphics/british-made-badge.svg'
                        alt='British Made Badge'
                        layout='responsive'
                        width='150'
                        height='150'
                    />
                </div>
            </div>
            <div className='british-made-intro con-reg'>
                <h2>Proudly British Made</h2>
                <p>At Oak Tree Mobility, we celebrate British manufacturing. All our rise and recline chairs and settees are made in Britain, and we are immensely proud of that fact. As far as we are concerned, the ‘British Made’ stamp stands for quality, reliability, and trust – all qualities that are hugely important to us.</p>
            </div>
            <div className='british-made-sections con-reg'>
                <div className='section'>
                    <div className="image-wrapper">
                        <Image
                            src='/images/lifestyle/british-made.png'
                            alt='british manufacturing'
                            layout='responsive'
                            width='560'
                            height='353'
                            quality="100"
                        />
                    </div>
                    <div className='section-content'>
                            <h3>British Craftsmen</h3>
                            <p>By keeping our manufacturing in Britain and relying on British craftsmen, we are able to maintain control and manufacture products that live up to our exacting standards. Our highly skilled craftsmen draw on years of experience to make beautiful products, and we wouldn’t have it any other way.</p>
                        </div>
                </div>
            </div>
            <div className='bg-light-green-2 british-made-question-banner'>
                <div className='con-reg'>
                    <h4>Do you love British Manufacturing?</h4>
                    <p>If you are like us and think British products and manufacturing are worth celebrating, we would love to show you our incredible chairs and settees.</p>
                    <Link href='/chairs'><a>View our chair collections</a></Link>
                </div>
            </div>
            <Resources pageType='british-made'/>
        </>
    )
}
export default BritishMade;


