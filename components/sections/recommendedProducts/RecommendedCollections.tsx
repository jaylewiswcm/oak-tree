import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
// images
import chairCollection from '../../../public/images/collections/collection-chairs.png'
import bedCollection from '../../../public/images/collections/collection-beds.png'
import bathLiftCollection from '../../../public/images/collections/collection-bathlifts.png'

interface ComponentProps {
    collection: string
}

export const RecommendedCollections = ({collection}: ComponentProps) => {
  return (
    <div className='collection-other-products con-reg'>
    <h3>Explore Our Other Products</h3>

    <div className='collections-grid'>
        {collection && collection === 'chairs' && 
        <>
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
        
              <p className='col-name'>Adjustable Beds</p>
              <p>Take a look at our adjustable beds</p>
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
              <p className='col-name'>Bath Lifts</p>
              <p>Take a look at our bath lifts</p>
            </div>
            </a></Link>
            </>
        }
        {collection && collection === 'beds' && 
        <>
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
        
              <p className='col-name'>Rise and Recline Chairs</p>
              <p>Take a look at our rise and recline chairs</p>
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
              <p className='col-name'>Bath Lifts</p>
              <p>Take a look at our bath lifts</p>
            </div>
            </a></Link>
            </>
        }
  
    </div>
  </div>
  )
}
