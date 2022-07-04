import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface ComponentProps {
  orphan: boolean
}

export const OfferBanners = ({orphan} : ComponentProps) => {

  return (
    <div className={`banners ${orphan ? 'orphan-con-reg' : 'con-reg'}`}>
      <h3 className='heading'>Discover Our Latest Offers</h3>
      <div className='banners-flex'> 
    <Link href='/offers'>
      <a className='banner-vertical sale-banner'>
        <Image 
          src='/graphics/half-price-sale-smaller.svg'
          alt='Half Price Sale'
          width='566.32'
          height='432'
          layout='responsive'
        />          
      </a>
    </Link>
    <div className='plus'>
      <p>plus</p>
    </div>
    <Link href='/trade-in'>
      <a className='banner-vertical trade-in-banner'>
        <Image 
            src='/graphics/trade-in-smaller.svg'
            alt='Trade In'
            width='566.32'
            height='432'
            layout='responsive'
          />   
      </a>
    </Link>
    </div>
  </div>
  )
}
