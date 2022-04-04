import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const RecommendedProducts = () => {
  return (
    <div className='other-products'>
    <h6>Our other chairs</h6>
    <div className='product-grid'>
    <Link href="/chairs/the-maple">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/chairs/maple/maple-product-1.png'
                alt='The Maple'
                layout='responsive'
                width={303}
                height={330}
            />
            </div>
            <div className='hover-bg'>
                <p className='name'>The Maple</p>
                <p className='view'>View Chair</p>
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
        <Link href="/chairs/the-tulip">
        <a  className='product'>
        <div className='image-wrapper'>
            <Image
                src='/images/products/chairs/tulip/tulip-product-1.png'
                alt='The Tulip'
                layout='responsive'
                width={303}
                height={330}
            />
            </div>
            <div className='hover-bg'>
                <p className='name'>The Tulip</p>
                <p className='view'>View Chair</p>
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
        <Link href="/chairs/the-rowan">
        <a className='product'>
            <div className='image-wrapper'>
            <Image
                src='/images/products/chairs/rowan/rowan-product-1.png'
                alt='The Rowan'
                layout='responsive'
                width={303}
                height={330}
            />
            </div>
            <div className='hover-bg'>
                <p className='name'>The Rowan</p>
                <p className='view'>View Chair</p>
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
</div>
  )
}
export default RecommendedProducts