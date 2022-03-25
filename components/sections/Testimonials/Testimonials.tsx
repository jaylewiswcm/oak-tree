import React, {useState, useEffect} from 'react'
// Components
import VideoPopup from './video/VideoPopup';
import CarouselNormal from './carousel/CarouselNormal';
import CarouselLandingPage from './carousel/CarouselLandingPage';


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
        <VideoPopup selectedCx={selectedCx} show={show} setShow={setShow}/>
  </div>
  )
}

export default Testimonials;