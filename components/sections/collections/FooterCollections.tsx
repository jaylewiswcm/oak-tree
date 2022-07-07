import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// images
import chairCollection from '../../../public/images/collections/collection-chairs.png'
import bedCollection from '../../../public/images/collections/collection-beds.png'
import bathLiftCollection from '../../../public/images/collections/collection-bathlifts.png'

const FooterCollections = () => {
  return (
    <div className='footer-collections con-reg'>
    <h6>Our Collections</h6>
    <div className='collections-grid'>
      <Link href='/rise-and-recline-chairs'><a className='collection-item'>
        <Image 
          src={chairCollection}
          alt='Rise and Recline Chairs'
          layout='fill'
          objectFit='cover'
          objectPosition='left'
          placeholder='blur'
          quality={100}
        />
        <div className='overlay'>
          <p>Rise and Recline Chairs</p>
        </div>
        </a></Link>
      <Link href='/adjustable-beds'><a className='collection-item'>
        <Image 
          src={bedCollection}
          alt='Adjustable Beds'
          layout='fill'
          objectFit='cover'
          objectPosition='left'
          placeholder='blur'
          quality={100}
        />
        <div className='overlay'>
          <p>Adjustable Beds</p>
        </div>
        </a></Link>
      <Link href='/bath-lifts'><a className='collection-item'>
        <Image 
          src={bathLiftCollection}
          alt='Bath Lifts'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          placeholder='blur'
          quality={100}
        />
        <div className='overlay'>
          <p>Bath Lifts</p>
        </div>
        </a></Link>
    </div>
  </div>
  )
}
export default FooterCollections;