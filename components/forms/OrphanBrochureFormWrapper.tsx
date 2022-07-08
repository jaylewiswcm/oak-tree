import React, { useState } from 'react'
import Image from 'next/image'
import OrphanBrochureForm from './brochure/OrphanBrochureForm';

interface ComponentProps {
  productType : string
  product: string
}

const OrphanBrochureFormWrapper = ({productType, product}: ComponentProps) => {
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
      <div className='brochure-section'>
      <div className='brochure-image'>
        <Image 
          src={`/brochures/${productType}-brochure.png`}
          alt='Brochure'
          layout='responsive'
          width={1000}
          height={1412}
        />

        </div>
        <div className='brochure-open'>
        <Image 
          src={`/brochures/${productType}-brochure-open.png`}
          alt='Brochure'
          layout='responsive'
          width={1000}
          height={708}
        />
        </div>
      </div>
    </div>
    <OrphanBrochureForm productType={product}/>
  
    </div>
</div>
  )
}

export default OrphanBrochureFormWrapper;
