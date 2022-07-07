import React, { useState } from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
// Components 
import { QuestionAccordion } from '../components/accordion/QuestionAccordion';
// images
import hero from '../public/images/heros/price-guide-hero.jpg';
const PriceGuideChair = () => {
  return (
    <>
    <NextSeo  
        title="Chair Prices Explained | Oak Tree Mobility"
        description="Take a look at the Oak Tree Mobility price guide and find out more about the range of mobility products available to suit your budget"
    />
     <div className='guide-hero con-reg'>
         <Image
            src={hero}
            alt='Rep going through prices with lady'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            quality='100'
            placeholder='blur'
            priority
         />
     </div>
     <div className='guide-section con-reg'>
         <h1>Chair Price Guide</h1>
         <div className='section-question'>
             <div className='question-block'>
                 <h2>Why aren't there any prices on our website?</h2>
                 <div className='graphic'>
                     <Image
                        src='/graphics/price-tag.svg'
                        alt='price tag'
                        layout='responsive'
                        width='183.41'
                        height='161.21'
                     />
                 </div>
             </div>
             <div className='answer-block'>
                 <p className='highlighted'>People often ask us why there aren’t any prices on our website or why we can’t provide immediate quotes online or over the phone. The answer is simple: <em>our chairs are made for you.</em></p>
                 <p>The reason our chairs are so comfortable and good for your posture and health is because they are precisely made to fit. We have already made thousands of chairs, but we don’t think any of them would be right for you as each chair we build is based on the customer’s size and are available with endless options.</p>
             </div>
         </div>
         <div className='banner'>
             <div className='image-wrapper'>
                 <Image
                    src='/images/price-guide/fabrics-1.jpeg'
                    alt='Fabrics'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    quality='100'
                 />
             </div>
             <div className='title-block'>
                 <div className='inner-border'></div>
                 <h3>700,000<br/>Combinations</h3>
             </div>
         </div>
         <div className='choices'>
             <p className='title'>Our chairs can be customised with a choice of:</p>
             <div className='choice-grid'>
                 <div className='item'>
                     <div className="icon-wrapper">
                         <Image
                           src='/icons/numbers/no-40.svg'
                            alt='40'
                            layout='responsive'
                            width='60'
                            height='60'
                         />
                     </div>
                     <p>Over 40 different <br/>fabrics and leather</p>
                 </div>
                 <div className='item'>
                     <div className="icon-wrapper">
                         <Image
                           src='/icons/numbers/no-5.svg'
                            alt='5'
                            layout='responsive'
                            width='60'
                            height='60'
                         />
                     </div>
                     <p>5 different chair styles</p>
                 </div>
                 <div className='item'>
                     <div className="icon-wrapper">
                         <Image
                           src='/icons/numbers/no-3-1.svg'
                            alt='3'
                            layout='responsive'
                            width='60'
                            height='60'
                         />
                     </div>
                     <p>3 unique motors</p>
                 </div>
                 <div className='item'>
                     <div className="icon-wrapper">
                         <Image
                           src='/icons/numbers/no-3-2.svg'
                            alt='3'
                            layout='responsive'
                            width='60'
                            height='60'
                         />
                     </div>
                     <p>3 different blocks</p>
                 </div>
                 <div className='item'>
                     <div className="icon-wrapper">
                         <Image
                           src='/icons/numbers/no-6.svg'
                            alt='6'
                            layout='responsive'
                            width='60'
                            height='60'
                         />
                     </div>
                     <p>6 accessories</p>
                 </div>
             </div>
         </div>
         <div className='flex-sections'>
             <div className="image-wrapper">
                 <Image 
                   src='/images/price-guide/fabrics-2.jpeg'
                    alt='Fabrics 2'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                 />
             </div>
             <div className='content'>
                 <p className='title'>When you multiply all these options together</p>
                 <p>Along with different warranty choices – there are more than 700,000 combinations. And that’s before we’ve even taken any measurements. Of course, we know you’d never need that many different chairs; you only need one. But that one must be perfect for you at a price that is right for you too.</p>
                <p>As you can see, we aim to give you a chair that precisely matches your needs, made to fit with all the options that suit you and your home. We don’t think it would be fair on you if we guessed a price before we had taken measurements, shown you samples and fully assessed your requirements. If we guessed too low, you’d be annoyed if the final quote is higher. And if we guessed too high, you might be put off, especially when a few tweaks to the design could bring the chair back within your budget.</p>
             </div>
         </div>
     </div>
     <div className='guide-full-width-banner bg-dark-green-1'>
         <div className='con-reg'>
             <p>We don’t think it would be fair on you if we guessed a price before we had taken measurements and fully assessed your requirements.</p>
             <div className='logo'>
                 <Image
                    src='/logo/logo-white.svg'
                    alt='Oak Tree Mobility'
                    layout='responsive'
                    width='216.85'
                    height='45.18'
                 />
             </div>
         </div>
     </div>
     <div className='guide-section con-reg'>
         <div className='section-question secondary-question'>
             <div className='question-block'>
                 <h4>So why can other mobility companies show prices on their websites?</h4>
                 <div className='graphic'>
                     <Image
                        src='/graphics/question-mark.svg'
                        alt='Question Mark'
                        layout='responsive'
                        width='93.88'
                        height='87.2'
                     />
                 </div>
             </div>
             <div className='answer-block'>
                 <p className='highlighted'>Companies that advertise with prices are able to do so because they offer stock chairs in standard sizes with limited or basic accessories.</p>
                 <p>They aren’t interested in finding you a chair that is perfect – for them, close enough is good enough. You won’t be able to choose your accessories and you’ll have very limited options in terms of size.</p>
             </div>
         </div>
         <div className='section-question secondary-question'>
             <div className='question-block'>
                 <h4>Why do you offer discounts? Shouldn't you just offer a flat price all year round?</h4>
                 <div className='graphic'>
                     <Image
                        src='/graphics/question-mark.svg'
                        alt='Question Mark'
                        layout='responsive'
                        width='93.88'
                        height='87.2'
                     />
                 </div>
             </div>
             <div className='answer-block'>
                 <p className='highlighted'>Good question. Yes, we do offer discounts, as we can work to help reduce costs in certain circumstances.</p>
                 <p>When we give the price for one chair, it includes white-glove delivery and installation by a two-person team. If you order more than one chair – or a chair and a settee – delivering and installing gets cheaper and we can pass those savings onto you.</p>
                <p>When we explain this, we’ve never met a customer who doesn’t approve!</p>
             </div>
         </div>
         <h5>Now you know why there aren't any <br/>prices on our site, why not...</h5>
            <div className='cta-flex'>
                <button className='cta'>
                    <h6 className='dark-green-1'>Request a Free Brochure</h6>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    <div className='acting-btn'>
                        Request your Brochure
                    </div>
                    <div className='brochure-image'>
                        <Image 
                            src='/brochures/brochure-cover-and-inside.png'
                            alt='Chair Brochure'
                            layout='responsive'
                            width='393'
                            height='313'
                        />
                    </div>
                </button>
                <Link href='/rise-and-recline-chairs'>
                    <a className='cta'>
                        <div className='image-wrapper'>
                            <Image 
                                src='/images/collections/collection-chairs.png'
                                alt='Chair Collection'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='left'
                            />
                        </div>
                        <div className='bg'></div>
                        <h6>View our <br/>Rise and Recline Chairs</h6>
                    </a>
                </Link>
            </div>
        </div>

</>
  )
}

export default PriceGuideChair;