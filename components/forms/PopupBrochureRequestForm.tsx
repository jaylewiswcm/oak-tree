import React, { useState } from 'react'
import Image from 'next/image';
// Components
import SwiperBrochureRequestFormWithProductInterest from './brochure/SwiperBrochureRequestFormWithProductInterest';

interface ComponentProps {
    setShow: any
}

const PopupBrochureRequestForm = ({setShow}: ComponentProps) => {
    const [productInterest, setProductInterest] = useState('')
  return (
      <div className='pop-up-form-wrapper'>
            <button className='exit-btn' onClick={() => setShow(false)}>
                <Image 
                    src='/buttons/exit-cross.svg'
                    alt='exit'
                    layout='responsive'
                    width={25}
                    height={25}
                />
            </button>
          <div className='form-top'>
              <p className='oaktree-green subheading'>Completely Free</p>
              <h6>Request your <em className='oaktree-green'>free</em> brochure</h6>
              <p className='supporting-text'>See our full collections, brand new products and gain useful help & advice all from the comfort of your home.</p>
          </div>
        <SwiperBrochureRequestFormWithProductInterest setShow={setShow}/> 
       
</div>
  )
}


export default PopupBrochureRequestForm;