import React from 'react'
import Image from 'next/image';
import ProductReviews from '../sections/reviews/ProductReviews';

interface ComponentProps {
    isOpen: string
    openAccordian: any
}

const Reviews = ({isOpen, openAccordian}:ComponentProps) => {
  return (
    <div className={isOpen === 'reviews' ? "toc open" : "toc"}>
    <button className='toc-btn' onClick={() => openAccordian('reviews')}>
          <p>Reviews</p> 
            <span className='icon-wrapper'>
              <Image 
                src={`/buttons/${isOpen === 'reviews' ? 'minus' :'plus'}-black.svg`}
                alt='Plus'
                layout='responsive'
                width={15}
                height={15} />
            </span>
        </button>
        <div className='product-content'>
            <div className='content'>
                <ProductReviews />
            </div>
        </div>
</div>
  )
}

export default Reviews;