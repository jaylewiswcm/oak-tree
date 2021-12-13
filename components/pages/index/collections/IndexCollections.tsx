import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const IndexCollections = () => {
    return (
        <div className='index-collections' id='index-collections'>
      <div className='collection-grid'>
        <Link href='/rise-and-recline-chairs'> 
          <a  className='collection-item'>
              <Image 
                  src='/images/home/category-chair.png'
                  alt='Chair Collection'
                  layout="fill" 
                  objectFit='cover' 
                  objectPosition='center'
              />
              <div className='item-overlay'></div>
              <div className='collection-info'>
                <p>Rise & Recline</p>
                <h3>Chairs</h3>
                <div className='acting-button'>
                  <span className='bg-overlay'></span>
                  <p>View Collections</p>
                </div>
              </div>
          </a>
        </Link>
        <Link href='/adjustable-beds' > 
          <a className='collection-item'>
              <Image 
                  src='/images/home/category-bed.png'
                  alt='Chair Collection'
                  layout="fill" 
                  objectFit='cover' 
                  objectPosition='center'
              />
              <div className='item-overlay'></div>
              <div className='collection-info'>
                <p>Adjustable</p>
                <h3>Beds</h3>
                <div className='acting-button'>
                  <span className='bg-overlay'></span>
                  <p>View Collections</p>
                </div>
              </div>
          </a>
        </Link>
        <Link href='/bath-lifts' > 
          <a className='collection-item'>
              <Image 
                  src='/images/home/category-bathlift.png'
                  alt='Chair Collection'
                  layout="fill" 
                  objectFit='cover' 
                  objectPosition='center'
              />
              <div className='item-overlay'></div>
              <div className='collection-info'>
                <p>Oak Tree</p>
                <h3>Bath Lifts</h3>
                <div className='acting-button'>
                  <span className='bg-overlay'></span>
                  <p>View Collections</p>
                </div>
              </div>
          </a>
        </Link>
      </div>
    </div> 
    )
}

export default IndexCollections;