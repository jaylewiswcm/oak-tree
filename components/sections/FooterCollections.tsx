import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FooterCollections = () => {
  return (
    <div className='footer-collections con-reg'>
    <h6>Our Collections</h6>
    <div className='collections-grid'>
      <Link href=''><a className='collection-item'>
        <Image 
          src='/images/collections/collection-chairs.png'
          alt='Rise and Recline Chairs'
          layout='fill'
          objectFit='cover'
          objectPosition='left'
        />
        <div className='overlay'>
          <p>Rise and Recline Chairs</p>
        </div>
        </a></Link>
      <Link href=''><a className='collection-item'>
        <Image 
          src='/images/collections/collection-beds.png'
          alt='Adjustable Beds'
          layout='fill'
          objectFit='cover'
          objectPosition='left'
        />
        <div className='overlay'>
          <p>Adjustable Beds</p>
        </div>
        </a></Link>
      <Link href=''><a className='collection-item'>
        <Image 
          src='/images/collections/collection-bathlifts.png'
          alt='Bath Lifts'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
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