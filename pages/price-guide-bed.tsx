import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
// Components 
import { QuestionAccordian } from '../components/accordian/QuestionAccordian';

const PriceGuideBed = () => {
  return (
    <>
    <NextSeo  
        title="Chair Prices Explained | Oak Tree Mobility"
        description="Take a look at the Oak Tree Mobility price guide and find out more about the range of mobility products available to suit your budget"
    />
        <div className='bg-dark-green-1 wave-banner'>
            <div className='con-reg'>
                <h1 className='heading'>Price Guide for Beds</h1>    
            </div>    
        </div>      
         <div className='page-intro con-reg'>
             <h2>Our Beds Are Made For You.</h2>
             <p>People often ask us why there aren’t any prices on our website or why we can’t provide immediate quotes online or over the phone. The answer is simple: <span className='oaktree-green'>our beds are made for you</span></p>
         </div>
         <div className='price-guide-section con-reg'>
             <div className='image-wrapper'>
                 <Image 
                    src='/images/lifestyle/rep-and-chair-2.png'
                    alt='Rep measuring customers dimensions for made-to-fit chair'
                    layout='responsive'
                    width='540'
                    height='421'
                    quality={100}
                 />
             </div>
             <div className='section-content'>
                    <h3>Made to Fit</h3>
                    <p>The reason our beds are so comfortable and good for your posture and health is because they are precisely made to fit. We have already made thousands of beds, but we don’t think any of them would be right for you as each bed we build is based on the customer’s size and is available with many different options.</p>
             </div>
         </div>
         <div className='bg-light-green-2'>
         <div className='price-guide-section row-reverse con-reg'>
             <div className='image-wrapper'>
                 <Image 
                    src='/images/lifestyle/fabrics.png'
                    alt='Rep measuring customers dimensions for made-to-fit chair'
                    layout='responsive'
                    width='540'
                    height='421'
                    quality={100}
                 />
             </div>
             <div className='section-content'>
                    <h3>1000’s Combinations</h3>
                    <p>You can choose from several warranty options and optimise your sleeping experience even further with our accessories. Our Beds can be customised with a choice of:</p>
                <ul>
                    <li>
                        <span className='tick-wrapper'>
                            <Image
                                src='/icons/green-tick.svg'
                                alt='tick'
                                layout='responsive'
                                width='15'
                                height='15'
                            />
                        </span>
                        <p>6 different fabrics and finishes</p>
                    </li>
                    <li>
                        <span className='tick-wrapper'>
                            <Image
                                src='/icons/green-tick.svg'
                                alt='tick'
                                layout='responsive'
                                width='15'
                                height='15'
                            />
                        </span>
                        <p>6 different bed styles</p>
                    </li>
                    <li>
                        <span className='tick-wrapper'>
                            <Image
                                 src='/icons/green-tick.svg'
                                alt='tick'
                                layout='responsive'
                                width='15'
                                height='15'
                            />
                        </span>
                        <p>4 mattresses</p>
                    </li>
                    <li>
                        <span className='tick-wrapper'>
                            <Image
                                 src='/icons/green-tick.svg'
                                alt='tick'
                                layout='responsive'
                                width='15'
                                height='15'
                            />
                        </span>
                        <p>6 headboard styles</p>
                    </li>
                </ul>
             </div>
         </div>
         </div>

         <div className='price-guide-section-center con-reg'>
             <h4>A bed to suit your home, your<br/>personality, and your needs.</h4>
            <p>Our beds are made to suit your home, your personality, and your needs. Individual measurements are taken for each customer to ensure your adjustable bed fits just where you need it to in your home. This means that the price of one bed might be very different to the price of a bed made to suit someone else – and we want to make sure that the price that we give you is for the bed that you want and need.</p>
         </div>
         <div className='price-guide-banner bg-light-green-2'>
             <div className='con-reg'>
             <h5>We don’t think it would be fair on you if we guessed a price before we had taken measurements and fully assessed your requirements.</h5>
             </div>
         </div>
        <div className='price-guide-questions con-reg'>
            <h6>Have questions?</h6>
            <div className='questions-table'>
                <QuestionAccordian question='So why can other mobility companies show prices on their websites?'>
                    <p>Companies that advertise with prices are able to do so because they offer stock beds in standard sizes with limited or basic accessories.</p>
                    <p>They aren’t interested in finding you a bed that is perfect – for them, close enough is good enough. You won’t be able to choose your accessories and you’ll have very limited options in terms of size.</p>
                </QuestionAccordian>
                <QuestionAccordian question='Why do you offer discounts? Shouldn’t you just offer a flat price all year round?'>
                        <p>Good question. Yes, we do offer discounts, as we can work to help reduce costs in certain circumstances.</p>
                        <p>When we give the price for one bed, it includes white-glove delivery and installation by a two-person team. If you order more than one bed – or a bed and a chair – delivering and installing gets cheaper and we can pass those savings onto you.</p>
                        <p>When we explain this, we’ve never met a customer who doesn’t approve!</p>
                </QuestionAccordian>
            </div>
        </div>
        <div className='recommended-products con-reg'>
    <h6>Recommeded Beds</h6>
    <div className='product-grid'>
    <Link href="/adjustable-beds">
        <a className='product'>
            <div className='hover-bg'>
                <p className='view'>View All</p>
                <p className='name'>Adjustable Beds</p> 
                <div className='acting-btn'>
                    <Image 
                        src='/buttons/arrow-yellow.svg'
                        alt='Arrow'
                        // layout='responsive'
                        width={24}
                        height={20}
                    />
                </div>
            </div>
        </a>
        </Link>
        <Link href="/adjustable-beds/the-hesper">
        <a  className='product'>
        <div className='image-wrapper'>
            <Image
                src='/images/products/beds/hesper/hesper-product.jpeg'
                alt='The Hesper'
                layout='responsive'
                width={303}
                height={330}
            />
            </div>
            <div className='hover-bg'>
                <p className='name'>The Hesper</p>
                <p className='view'>View Bed</p>
                <div className='acting-btn'>
                    <Image 
                        src='/buttons/arrow-yellow.svg'
                        alt='Arrow'
                        // layout='responsive'
                        width={24}
                        height={20}
                    />
                </div>
            </div>
        </a>
        </Link>
        <Link href="/adjustable-beds/the-poplar">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/beds/poplar/poplar-product.jpeg'
                alt='The Poplar'
                layout='responsive'
                width={303}
                height={330}
            />
            </div>
            <div className='hover-bg'>
                <p className='name'>The Poplar</p>
                <p className='view'>View Bed</p>
                <div className='acting-btn'>
                    <Image 
                        src='/buttons/arrow-yellow.svg'
                        alt='Arrow'
                        // layout='responsive'
                        width={24}
                        height={20}
                    />
                </div>
            </div>
        </a>
        </Link>
    </div>
    </div>
</>
  )
}

export default PriceGuideBed;