import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
// Components 
import { QuestionAccordian } from '../components/accordian/QuestionAccordian';

const PriceGuideChair = () => {
  return (
    <>
    <NextSeo  
        title="Chair Prices Explained | Oak Tree Mobility"
        description="Take a look at the Oak Tree Mobility price guide and find out more about the range of mobility products available to suit your budget"
    />
        <div className='bg-dark-green-1 wave-banner'>
            <div className='con-reg'>
                <h1 className='heading'>Price Guide for Chairs</h1>    
            </div>    
        </div>      
         <div className='page-intro con-reg'>
             <h2>Our Chairs Are Made For You.</h2>
             <p>People often ask us why there aren’t any prices on our website or why we can’t provide immediate quotes online or over the phone. The answer is simple: <span className='oaktree-green'>our chairs are made for you</span></p>
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
                 <p>The reason our chairs are so comfortable and good for your posture and health is because they are precisely made to fit. We have already made thousands of chairs, but we don’t think any of them would be right for you as each chair we build is based on the customer’s size and are available with endless options.</p>
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
                 <h3>700,000 Combinations</h3>
                <p>When you multiply all options together – along with different warranty choices – there are more than 700,000 combinations. Our chairs can be customised with a choice of:</p>
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
                        <p>Over 40 different fabrics and leather</p>
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
                        <p>5 different chair styles</p>
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
                        <p>3 motors</p>
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
                        <p>3 different backs</p>
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
                        <p>6 accessories</p>
                    </li>
                </ul>
             </div>
         </div>
         </div>

         <div className='price-guide-section-center con-reg'>
             <h4>Chairs that precisely<br/>matches your needs</h4>
             <p>As you can see, we aim to give you a chair that precisely matches your needs, made to fit with all the options that suit you and your home. We don’t think it would be fair on you if we guessed a price before we had taken measurements, shown you samples and fully assessed your requirements. If we guessed too low, you’d be annoyed if the final quote is higher. And if we guessed too high, you might be put off, especially when a few tweaks to the design could bring the chair back within your budget.</p>
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
                    <p>Companies that advertise with prices are able to do so because they offer stock chairs in standard sizes with limited or basic accessories.</p>
                    <p>They aren’t interested in finding you a chair that is perfect – for them, close enough is good enough. You won’t be able to choose your accessories and you’ll have very limited options in terms of size.</p>
                </QuestionAccordian>
                <QuestionAccordian question='Why do you offer discounts? Shouldn’t you just offer a flat price all year round?'>
                        <p>Good question. Yes, we do offer discounts, as we can work to help reduce costs in certain circumstances.</p>
                        <p>When we give the price for one chair, it includes white-glove delivery and installation by a two-person team. If you order more than one chair – or a chair and a settee – delivering and installing gets cheaper and we can pass those savings onto you.</p>
                        <p>When we explain this, we’ve never met a customer who doesn’t approve!</p>
                </QuestionAccordian>
            </div>
        </div>
</>
  )
}

export default PriceGuideChair;