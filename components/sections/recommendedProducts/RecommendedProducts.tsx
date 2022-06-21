import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
// axios
import axios from 'axios';

interface ComponentProps {
    products: {}
 
}

const RecommendedProducts = (products:ComponentProps) => {
    
  return (
    <div className='other-products con-reg'>
    <h6>You may also like</h6>

    <div className='product-grid'>
    <Link href="/chairs/the-oak">
        <a className='product'>
            <div className='image-wrapper'>
                <Image
                    src='/images/products/chairs/maple/maple-collection.png'
                    alt='The Maple'
                    layout='responsive'
                    width={1000}
                    height={671}
                />
                <div className='hover-bg'>
                    <p>View Chair</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Maple</p>
                <p className='type'>Rise and Recline Chair</p>
            </div>
        </a>
        </Link>
        <Link href="/chairs/the-oak">
        <a  className='product'>
        <div className='image-wrapper'>
            <Image
                src='/images/products/chairs/tulip/tulip-collection.png'
                alt='The Tulip'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Chair</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Tulip</p>
                <p className='type'>Rise and Recline Chair</p>
            </div>
        </a>
        </Link>
        <Link href="/chairs/the-oak">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/chairs/rowan/rowan-collection.png'
                alt='The Rowan'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Chair</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Rowan</p>
                <p className='type'>Rise and Recline Chair</p>
            </div>
        </a>
        </Link>
    </div>
{/* 
    <div className='product-grid'>
    <Link href="/adjustable-beds/the-hazel">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
               src='/images/products/beds/birch/birch-collection.png'
                alt='The Birch'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Bed</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Birch</p>
                <p className='type'>Adjustable Bed</p>
            </div>
        </a>
    </Link>
    <Link href="/adjustable-beds/the-hazel">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/beds/hesper/hesper-collection.png'
                alt='The Hesper'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Bed</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Hesper</p>
                <p className='type'>Adjustable Bed</p>
            </div>
        </a>
    </Link>
    <Link href="/adjustable-beds/the-hazel">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/beds/poplar/poplar-collection.png'
                alt='The Poplar'
                layout='responsive'
                width={1000}
                height={671}
            />
               <div className='hover-bg'>
                    <p>View Bed</p>
                </div>
            </div>
            <div className='product-name-wrapper'>
                <p className='name'>The Poplar</p>
                <p className='type'>Adjustable Bed</p>
            </div>
        </a>
    </Link>

    </div> */}
    
    </div>
  )
}
export default RecommendedProducts;
  
  