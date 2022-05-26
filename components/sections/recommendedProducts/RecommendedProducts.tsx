import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface ComponentProps {
    product: string
}

const RecommendedProducts = ({product}: ComponentProps) => {
  return (
    <div className='other-products con-reg'>
    <h6>You may also like</h6>
    {product === 'chairs' && 
    <div className='product-grid'>
    <Link href="/chairs/the-maple">
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
        <Link href="/chairs/the-tulip">
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
        <Link href="/chairs/the-rowan">
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
    }
    {product === 'beds' && 
    <div className='product-grid'>
    <Link href="/adjustable-beds/the-birch">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/beds/birch/birch-product.jpeg'
                alt='The Birch'
                layout='responsive'
                width={303}
                height={330}
            />
            </div>
            <div className='hover-bg'>
                <p className='name'>The Birch</p>
                <p className='view'>View Bed</p>
                <div className='acting-btn'>
                    <Image 
                        src='/buttons/arrow-yellow.svg'
                        alt='Arrow'
                        // layout='responsive'
                        width={24}
                        height={20}
                    />
                </div>
            </div>
        </a>
        </Link>
        <Link href="/adjustable-beds/the-hesper">
        <a  className='product'>
        <div className='image-wrapper'>
            <Image
                src='/images/products/beds/hesper/hesper-product.jpeg'
                alt='The Hesper'
                layout='responsive'
                width={303}
                height={330}
            />
            </div>
            <div className='hover-bg'>
                <p className='name'>The Hesper</p>
                <p className='view'>View Bed</p>
                <div className='acting-btn'>
                    <Image 
                        src='/buttons/arrow-yellow.svg'
                        alt='Arrow'
                        // layout='responsive'
                        width={24}
                        height={20}
                    />
                </div>
            </div>
        </a>
        </Link>
        <Link href="/adjustable-beds/the-poplar">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/beds/poplar/poplar-product.jpeg'
                alt='The Poplar'
                layout='responsive'
                width={303}
                height={330}
            />
            </div>
            <div className='hover-bg'>
                <p className='name'>The Poplar</p>
                <p className='view'>View Bed</p>
                <div className='acting-btn'>
                    <Image 
                        src='/buttons/arrow-yellow.svg'
                        alt='Arrow'
                        // layout='responsive'
                        width={24}
                        height={20}
                    />
                </div>
            </div>
        </a>
        </Link>
    </div>
    }
    </div>
  )
}
export default RecommendedProducts