import React from 'react'
import Image from 'next/image';
import {Accessories} from '../sections/accessories/Accessories';

interface ComponentProps {
    isOpen: string
    openAccordian: any
}

const Headboards = ({isOpen, openAccordian }:ComponentProps) => {
  return (
    <div className={isOpen === 'headboards' ? "toc open" : "toc"}>
    <button className='toc-btn' onClick={() => openAccordian('headboards')}>
          <p>Headboards</p> 
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
                <p className='subheading oaktree-green'>Step Three</p>
                <h5 className='heading'>Choose Your Headboard</h5>
                <Accessories type='headboards' />
            </div>
        </div>
</div>
  )
}

export default Headboards;