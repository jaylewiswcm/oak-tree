import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { NextSeo } from 'next-seo';
// Components
import SideForm from '../../components/forms/SideForm';
import ReviewCapsule from '../../components/elements/reviews/ReviewCapsule';

const index = () => {
    return (
        <>
            <NextSeo  
                title="Rise and Recline Chairs | Oak Tree Mobility"
                description="Here at Oak Tree Mobility we offer a two-man white-glove delivery and installation service included in the price of all our chairs and beds. Find out more."
            />
            <div className='hero collection-hero'>
                <div className='hero-image'>
                    <Image 
                        src='/images/home/hero.png'
                        alt='Home Hero Living Room'
                        layout="fill" 
                        objectFit='cover' 
                        objectPosition='center'
                    />
                </div>
                    <div className='hero-inner container-regular'>
                        <div className='title-wrapper'>
                            <p className='subheading'>Oak Tree</p>
                            <h1 className='heading'>Rise & Recline Chairs</h1>
                            <p className='intro-p green-3'>Transform your life wih an Oak Tree Mobility Chair</p>
                        </div>
                        <SideForm classname='collection-form' />
                </div>
            </div>
            <div className='container-regular'>
                <div className='collection-products'>
                    <p className='subheading green-2'>Oak Tree</p>
                    <h2 className='heading'>Rise & Recline Chairs</h2>
                    <div className="collection-grid">
                        <Link href='/rise-and-recline-chairs'>
                            <a className="col-product">
                                <div className="image-wrapper"></div>
                                <div className='col-product-info'>
                                    <p className='product-name'>The Tulip</p>
                                    <p className='product-type'>Rise & Recline Chair</p>
                                    <p className='product-desc'>A sleek, streamlined styling, these chairs are the very definition of modern sophistication and elegance.</p>
                                    <button className='acting-btn'>
                                        <span className='btn-bg'></span>
                                        <span className='btn-text'>View Product</span>
                                    </button>
                                </div>
                            </a>
                        </Link>
                        <Link href='/rise-and-recline-chairs'>
                            <a className="col-product">
                                <div className="image-wrapper"></div>
                                <div className='col-product-info'>
                                    <p className='product-name'>The Rowan</p>
                                    <p className='product-type'>Rise & Recline Chair</p>
                                    <p className='product-desc'>A sleek, streamlined styling, these chairs are the very definition of modern sophistication and elegance.</p>
                                    <button className='acting-btn'>
                                        <span className='btn-bg'></span>
                                        <span className='btn-text'>View Product</span>
                                    </button>
                                </div>
                            </a>
                        </Link>
                        <Link href='/rise-and-recline-chairs'>
                            <a className="col-product">
                                <div className="image-wrapper"></div>
                                <div className='col-product-info'>
                                    <p className='product-name'>The Cedar</p>
                                    <p className='product-type'>Rise & Recline Chair</p>
                                    <p className='product-desc'>A sleek, streamlined styling, these chairs are the very definition of modern sophistication and elegance.</p>
                                    <button className='acting-btn'>
                                        <span className='btn-bg'></span>
                                        <span className='btn-text'>View Product</span>
                                    </button>
                                </div>
                            </a>
                        </Link>
                        <Link href='/rise-and-recline-chairs/the-oak'>
                            <a className="col-product">
                                <div className="image-wrapper"></div>
                                <div className='col-product-info'>
                                    <p className='product-name'>The Oak</p>
                                    <p className='product-type'>Rise & Recline Chair</p>
                                    <p className='product-desc'>A sleek, streamlined styling, these chairs are the very definition of modern sophistication and elegance.</p>
                                    <button className='acting-btn'>
                                        <span className='btn-bg'></span>
                                        <span className='btn-text'>View Product</span>
                                    </button>
                                </div>
                            </a>
                        </Link>
                        <Link href='/rise-and-recline-chairs/'>
                            <a className="col-product">
                                <div className="image-wrapper"></div>
                                <div className='col-product-info'>
                                    <p className='product-name'>The Rowan</p>
                                    <p className='product-type'>Rise & Recline Chair</p>
                                    <p className='product-desc'>A sleek, streamlined styling, these chairs are the very definition of modern sophistication and elegance.</p>
                                    <button className='acting-btn'>
                                        <span className='btn-bg'></span>
                                        <span className='btn-text'>View Product</span>
                                    </button>
                                </div>
                            </a>
                        </Link>
           
                    </div>
                </div>
                <div className='collection-reviews'>
                    <p className='subheading green-2'>What our customers think</p>
                    <h2 className='heading'>Rated Excellent</h2> 
                    <ReviewCapsule />
                    <Link href="/">
                        <a className='read-more-reviews'>Read More of Our Reviews</a>
                    </Link>
                </div>
                <div className='collection-banner bg-green-5'>
                    <h2 className="heading green-1">A chair that is truly yours</h2>
                    <p className='green-2'>All Oak Tree Mobility rise and recline chairs are custom built and made to fit you. That means we’ll take your measurements to ensure comfort like you’ve never felt before. And with our range of luxurious materials and incredible accessories, the chair you choose will be something completely personal that you can enjoy for many years to come.</p>
                    <button className='bg-green-1'>
                        <span className="btn-bg white"></span>
                        <span className="btn-text">Understand The Pricing</span>
                    </button>
                </div>
                <div className='collection-difference'>
                    <p className="subheading">Discover</p>
                    <h2 className='heading'>The Oak Tree Difference</h2>
                    <p className='intro-p green-3'>We ask our customers what they think of Oak Tree Mobility</p>
                    <div className='difference-main'>
                        <div className='video-wrapper'></div>
                        <div className='dif-main-content'>
                            <p className='name'>Mr Groger</p>
                            <p className='product'>The Oak Rise & Recline Chair</p>
                            <p className='review'>Here at Oak Tree Mobility, we believe that everyone should be free to live a rich and fulfilling life. This belief affects everything that we do and is reflected in our range of handmade rise and recline chairs, adjustable beds, and stairlifts, which have already empowered thousands nationwide to enjoy the independence they deserve.</p>
                            <p className='cta'>Watch the video to find out more.</p>
                        </div> 
                    </div>
                    <div className="difference-carousel">
                        <div className='dif-item'>
                            <div className='item-content'>
                                <p className='name'>Mrs Jarvis</p>
                                <p className='headline'>10 out of 10 for everybody who we have been in contact with.</p>
                                <p className="content">Here at Oak Tree Mobility, we believe that everyone should be free to live a rich and fulfilling life. This belief affects everything that we do and is reflected in our range of handmade rise and recline chairs, adjustable beds, and stairlifts, which have already empowered thousands nationwide to enjoy the independence they deserve.</p>
                            </div>
                            <div className="item-image"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index;
