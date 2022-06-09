import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const OfferBanners = () => {
  return (
    <div className='banners con-reg'>
    <Link href='/offers'>
      <a className='banner-vertical sale-banner'>
        <Image 
          src='/graphics/half-price-sale.svg'
          alt='Half Price Sale'
          width='568'
          height='577'
          layout='responsive'
        />          
      </a>
    </Link>
    <div className='plus'>
      <p>and</p>
    </div>
    <Link href='/trade-in'>
      <a className='banner-vertical trade-in-banner'>
        <Image 
            src='/graphics/trade-in.svg'
            alt='Trade In'
            width='568'
            height='577'
            layout='responsive'
          />   
      </a>
    </Link>
  </div>
  )
}
