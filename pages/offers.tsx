import React from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

const Offers = () => {
    return (
        <>
            <NextSeo  
                title="Offers | Oak Tree Mobility"
                description="Offers. Find out more."
            />
            <div className='bg-red-2 offers-hero-banner'>
                <div className='con-reg'>
                    <h1 className='heading'>Our Offers</h1>
                </div>
            </div>
            <div className='offers-section con-reg'>
                <div className='offer'>
                    <div className='image-wrapper'>
                        <Image
                            src='/offers/chair-offer.png'
                            alt='Half price sale on chairs'
                            layout='responsive'
                            width='595'
                            height='452'
                            quality={100}
                        />
                    </div>
                    <div className='content'>
                        <h2><span className='red-2'>Half Price</span> Sale On Chairs</h2>
                        <p>Here at Oak Tree Mobility, we are all about bringing you an amazing value. Our Half Price Sale offer is so good you’ll hardly believe it: If you buy a chair or settee, we will give you any second item half price!</p>
                        <Link href='/chairs'><a>View Chair Collections</a></Link>
                    </div>
                </div>
                <div className='offer'>
                    <div className='image-wrapper'>
                        <Image
                            src='/offers/bed-offer.png'
                            alt='Half price sale on Beds'
                            layout='responsive'
                            width='595'
                            height='452'
                            quality={100}
                        />
                    </div>
                    <div className='content'>
                        <h2><span className='red-2'>Half Price</span> Sale On Beds</h2>
                        <p>Here at Oak Tree Mobility, we are all about bringing you an amazing value. Our Half Price Sale offer is so good you’ll hardly believe it: If you buy a bed, we will give you any second item half price!</p>
                        <Link href='/chairs'><a>View Bed Collections</a></Link>
                    </div>
                </div>
            </div>
            <div className='con-reg'>
            <div className='request-brochure-banner'>
                <div className='content'>
                    <h3>Want to see all our offers in one place?</h3>
                    <p>Request a free brochure to see new collections, best offers and useful help & advice.</p>
                    <button className='main-cta'>
                        <p>Request a Brochure</p>   
                    </button>
                </div>
                
                <div className='brochure-wrapper'>
                    <div className='image-wrapper'>
                        <Image
                            src='/brochures/brochure-mockup-2.png'
                            alt='Oak Tree Mobility Brochure'
                            layout='responsive'
                            width='235'
                            height='329'
                            quality={100}
                        />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Offers;


