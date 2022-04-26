import React, {useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
// images
import chairCollection from '../../../public/images/collections/collection-chairs.png'
import bedCollection from '../../../public/images/collections/collection-beds.png'
import bathLiftCollection from '../../../public/images/collections/collection-bathlifts.png'

const easing =[.6, -.05, .01, .99]

// const fadeInUp = {
//   initial: {
//     y: 60,
//     opacity:0
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: .6,
//       ease: easing
//     }
//   }
// }

const fadeInUp = {
  visible: { y:0, opacity: 1, transition: { duration: .8, ease: easing } },
  hidden: { y: 60, opacity: 0 }
};

const stagger = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const HomeCollections = () => {
  const [ref, inView] = useInView({ rootMargin: "-250px 0px"})
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log('Visibile')
    }
  }, [controls, inView]);

  return (
<motion.div 
  variants={stagger} 
  className='collections'
  ref={ref}  initial="hidden" animate={controls} 
 >
  
<motion.div variants={fadeInUp} className='col-link-wrapper'>
    <Link href='/chairs'>
            <a className='collection-item'> 
              <div className='image-wrapper'>
                <Image 
                  src={chairCollection}
                  alt='Rise and Recline Chairs'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <h3 className='collection-title'>Rise and Recline Chairs</h3>
              <p className='desc'>Luxurious and well made allowing comfort at the touch of a button.</p>
              <div className='acting-btn'>
                <p>View Chairs</p>
             </div>
            </a>
          </Link>
          </motion.div>
          <motion.div  variants={fadeInUp} className='col-link-wrapper'>  
        <Link href='/adjustable-beds'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src={bedCollection}
                  alt='Adjustable Beds'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <h3 className='collection-title'>Adjustable Beds</h3>
              <p className='desc'>The ultimate in sophistication and comfort, offering a wide collection.</p>
              <div className='acting-btn'>
                <p>View Beds</p>
             </div>
            </a>
          </Link>
          </motion.div>
          <motion.div  variants={fadeInUp} className='col-link-wrapper'>  
          <Link href='/bath-lifts'>
            <a className='collection-item'>
              <div className='image-wrapper'>
                <Image 
                  src={bathLiftCollection}
                  alt='Bath Lifts'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  quality='100'
                />
              </div>
              <h3 className='collection-title'>Bath Lifts</h3>
              <p className='desc'>Rediscover the joys and health benefits of a nice warm bath with our bath lift.</p>
              <div className='acting-btn'>
                <p>View Bath Lifts</p>
             </div>
            </a>
          </Link>
          </motion.div>
        </motion.div>
  )
}

export default HomeCollections;