import React, {useState, useEffect} from 'react'
import {motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
// Components
import CarouselNormal from './carousel/CarouselNormal';
import CarouselLandingPage from './carousel/CarouselLandingPage';
import {TestimonialTile} from './TestimonialTile';
import Modal from '../../modal/Modal'
import VideoCarousel from '../../modal/video/VideoCarousel';
// Data
import testimonials from '../../../data/testimonials/testimonials.json';

interface ComponentProps {
  pageType: string
}

const Testimonials = ({pageType} : ComponentProps) => {
  const [ref, inView] = useInView({ rootMargin: "-280px 0px"})
  const controls = useAnimation();

  const [selectedCx, setSelectedCx] = useState({ 
      name: "",
      location: "",
      product: {
          name: "",
          url: "",
      },
      thumbnail: "",
      videoId: ""
  
  });
  const [show, setShow] = useState(false);
 
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
    }
  }, [controls, inView]);

const easing =[.6, -.05, .01, .99]

const stagger = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0
    } 
  }
}


  return (
    <div ref={ref}  className='testimonials con-reg'>
        { pageType && pageType === 'normal' && <CarouselNormal setSelectedCx={setSelectedCx}  setShow={setShow} /> } 
        { pageType === 'orphan' &&  <CarouselLandingPage setSelectedCx={setSelectedCx}  setShow={setShow}/> } 
        {pageType === 'bath-lift' && testimonials.map(cx => 
            <>
              {cx.product.name === 'The Riviera Plus' && <TestimonialTile cx={cx} setSelectedCx={setSelectedCx} setShow={setShow}/>} 
            </>
          )}
        <div className='carousel-pagination' id='testimonial-pagination'></div>
        {show &&  <Modal classNames='' setShow={setShow}><VideoCarousel  videoId={selectedCx.videoId} setShow={setShow} show={show}/></Modal>}
  </div>
  )
}

export default Testimonials;