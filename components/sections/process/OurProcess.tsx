import React from 'react'
import Image from 'next/image';
const OurProcess = () => {
  return (
    <div className='our-process con-reg'>
    <h4 className='heading'>Our Process</h4>
    <div className='process-grid con-reg'>
        <div className="item">
            <div className='icon-wrapper'>
              <Image 
                  src='/icons/collection-process/brochure-new.svg'
                  alt='Request a Brochure'
                  layout='responsive'
                  width={130}
                  height={81}
              />
            </div>
            <h5>Request a Brochure</h5>
            <p>Read through our brochure and arrange a free no-obligation consultation.</p>
        </div>
        <div className="item">
            <div className='icon-wrapper'>
              <Image 
                  src='/icons/collection-process/consultation-new.svg'
                  alt='Consulation'
                  layout='responsive'
                  width={130}
                  height={81}
              />
            </div>
            <h5>Consultation</h5>
            <p>Meet one of our friendly advisors and try a chair in the comfort of your own home.</p>
        </div>
        <div className="item">
            <div className='icon-wrapper'>
              <Image 
                  src='/icons/collection-process/customisation-new.svg'
                  alt='Customation'
                  layout='responsive'
                  width={130}
                  height={81}
              />
            </div>
            <h5>Customation</h5>
            <p>Our designers and engineers create a chair that matches you and your specifications.</p>
        </div>
        <div className="item">
            <div className='icon-wrapper'>
              <Image 
                  src='/icons/collection-process/delivery-new.svg'
                  alt='Delivery and Installation'
                  layout='responsive'
                  width={130}
                  height={81}
              />
            </div>
            <h5>Delivery and Installation</h5>
            <p>We will deliver your new chair and set it up before taking away your old furniture.</p>
        </div>
    </div>
</div>
  )
}

export default OurProcess;