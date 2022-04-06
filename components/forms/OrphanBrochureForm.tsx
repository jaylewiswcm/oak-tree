import React, { useState } from 'react'
import Image from 'next/image'
import BrochureRequestForm from './brochure/OrphanBrochureRequestForm';

interface ComponentProps {
  productType : string
}

const OrphanBrochureForm = ({productType}: ComponentProps) => {
  return (
    <div className='form'>
    <div className='form-title'>
        <h1>Request Your <span className='yellow-3'>FREE</span> Brochure</h1>
        <p>Get our new brochure delivered to your door!</p>
    </div>
    <div className='orphan-form-and-usps-wrapper'>
    <div className='brochure-form-usps'>
      <ul>
        <li>
          <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
          <p>See our full collections</p>
        </li>
        <li>
          <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
          <p>Brand new products</p>
        </li>
        <li>
          <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
          <p>Useful help & advice</p>
        </li>
        <li>
          <span className='tick'><Image src='/vectors/green-tick.svg' alt='green tick' width={20} height={20}/></span>
          <p>Completely FREE!</p>
        </li>
      </ul>
      <div className='brochure-image'>
        <Image 
          src='/images/landing-pages/brochure.jpeg'
          alt='Brochure'
          layout='responsive'
          width={218}
          height={130}
        />
      </div>
    </div>
    <BrochureRequestForm productType={productType} />
    </div>
</div>
  )
}

export default OrphanBrochureForm;
