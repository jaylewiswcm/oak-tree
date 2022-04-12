import React from 'react'
import Image from 'next/image';
import {Accessories} from '../sections/accessories/Accessories';

interface ComponentProps {
    isOpen: string
    openAccordian: any
    type: string
}

const AccessoriesChair = ({isOpen, openAccordian, type }:ComponentProps) => {
  return (
    <div className={isOpen === 'accessories' ? "toc open con-reg" : "toc con-reg"}>
    <button className='toc-btn' onClick={() => openAccordian('accessories')}>
          <p>Accessories</p> 
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
                <p className='subheading oaktree-green'>Step Four</p>
                <h5 className='heading'>Choose Your Acessories</h5>
                <Accessories type={type} />
            </div>
        </div>
</div>
  )
}

export default AccessoriesChair;