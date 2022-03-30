import React, {useState, useEffect} from 'react'
// Components
import CarouselNormal from './carousel/CarouselNormal';
import CarouselLandingPage from './carousel/CarouselLandingPage';
import Modal from '../../modal/Modal'
import VideoCarousel from './video/VideoCarousel';

interface ComponentProps {
  pageType: string
}

const Testimonials = ({pageType} : ComponentProps) => {
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
 
  return (
    <div className='testimonials con-reg'>
        { pageType && pageType === 'normal' && <CarouselNormal setSelectedCx={setSelectedCx}  setShow={setShow} /> } 
        { pageType === 'orphan' &&  <CarouselLandingPage setSelectedCx={setSelectedCx}  setShow={setShow}/> } 
        <div className='carousel-pagination' id='testimonial-pagination'></div>
        {show &&  <Modal classNames='' setShow={setShow}><VideoCarousel  videoId={selectedCx.videoId} setShow={setShow} show={show}/></Modal>}
  </div>
  )
}

export default Testimonials;