import React, {useRef} from 'react'
import Image from 'next/image';
import Link from 'next/link';
// Components
import ProductReviews from '../sections/reviews/ProductReviews';
import { Video } from '../../components/video/Video';
import ReviewsAll from '../sections/reviews/Reviews';
interface ComponentProps {
    isOpen: string
    openAccordian: any
    product: string
}

const Reviews = ({isOpen, openAccordian, product}:ComponentProps) => {
  const tocElement = useRef<HTMLDivElement>(null)
  const openAndJumpToAccordian = (type:string) => {
      openAccordian(type);
      setTimeout(() => {tocElement.current!.scrollIntoView()}, 400); 
  }
  return (
    <div className={isOpen === 'reviews' ? "toc open con-reg" : "toc  con-reg"} ref={tocElement}>
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
                <ReviewsAll orphan={false} />
                {/* <ProductReviews /> */}
            </div>
            {product === 'chair' && 
                        <div className='product-testimonial con-reg'>
                        <h6>Our Customers View</h6>
                        <div className='inner-wrapper'>
                            <Video videoId='DYHM9trlcBo' title='Mr Andrews The Oak Testimonial' placeholder='/images/testimonials/mr-andrews-placeholder.png'/>
                            <div className='customer-details'>
                                <p className='name'>Mr Andrews</p>
                                <p className='location oaktree-green'>Solihul</p>
                                <p className='statement'>Thirteen years ago, Mr Andrews had a successful hip replacement. However, with increasing age, he started experiencing problems with his knees and began to find it more and more difficult to get up from his chair.</p>
                                <Link href='/testimonials-and-reviews'><a className='oaktree-green'>View more testimonials</a></Link>
                            </div>
                        </div>
                    </div>
            }
            { product === 'bed' &&
                      <div className='product-testimonial con-reg'>
                        <h6>Our Customers View</h6>
                        <div className='inner-wrapper'>
                            <Video videoId='i0HgOhqUnlI' title='Mrs Kirk The Hazel Testimonial' placeholder='/images/testimonials/mrs-kirk-placeholder.png'/>
                            <div className='customer-details'>
                                <p className='name'>Mrs Kirk</p>
                                <p className='location oaktree-green'>London</p>
                                <p className='statement'>Mrs Kirk was diagnosed with heart failure over 3 years ago, the main symptoms she struggles with are swollen ankles and breathlessness. After only a few hours getting out of bed in the morning her ankles would swell up, now with her Oak Tree Adjustable bed this no longer happens and she can enjoy her day again.</p>
                                <Link href='/testimonials-and-reviews'><a className='oaktree-green'>View more testimonials</a></Link>
                            </div>
                        </div>
                    </div>
            
            }

        </div>
        
</div>
  )
}

export default Reviews;