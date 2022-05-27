import React from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import FooterCollections from '../components/sections/collections/FooterCollections';

const ThankYouForYourBrochureRequest = () => {
  return (
    <>
        <NextSeo  
                title="Thank you for your brochure Request | Oak Tree Mobility"
                description="Thank you for your brochure Request."
            />
        <div className='thank-you-wrapper '>
          <div className='con-reg'>
          <div className='thank-you-success-tick'>
            <Image
                  src='/graphics/thank-you-success-tick.svg'
                  alt='Success Tick'
                  layout='responsive'
                  width='50'
                  height='50'
                />
          </div>
            <h1>Thank you for your brochure request! Your Free Brochure is on it's way.</h1>
            <div className='graphic'>
              <Image
                src='/graphics/aeroplane.svg'
                alt='Paper plane graphic'
                layout='responsive'
                width='133'
                height='79'
              />
            </div>
            <p>In the meantime why not explore our products...</p>
            </div>
          
          <FooterCollections />
        </div>
      
    </>
  )
}

export default ThankYouForYourBrochureRequest;