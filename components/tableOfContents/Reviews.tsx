import React, {useRef} from 'react'
import Image from 'next/image';
import ProductReviews from '../sections/reviews/ProductReviews';

interface ComponentProps {
    isOpen: string
    openAccordian: any
}

const Reviews = ({isOpen, openAccordian}:ComponentProps) => {
  const tocElement = useRef<HTMLDivElement>(null)
  const openAndJumpToAccordian = (type:string) => {
      openAccordian(type);
      setTimeout(() => {tocElement.current!.scrollIntoView()}, 400); 
  }
  return (
    <div className={isOpen === 'reviews' ? "toc open" : "toc"} ref={tocElement}>
    <button className='toc-btn' onClick={() => openAndJumpToAccordian('reviews')}>
          <p>Reviews</p> 
            <span className='icon-wrapper'>
              <Image 
             src='/buttons/plus-black.svg'
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