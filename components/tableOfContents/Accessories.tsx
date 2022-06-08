import React, { useRef } from 'react'
import Image from 'next/image';
import {Accessories} from '../sections/accessories/Accessories';

interface ComponentProps {
    isOpen: string
    openAccordian: any
    type: string
    reference: React.RefObject<HTMLDivElement> | null
}

const AccessoriesChair = ({isOpen, openAccordian, type, reference}:ComponentProps) => {
  
  const openAndJumpToAccordian = (type:string) => {
      openAccordian(type);
      setTimeout(() => {reference!.current!.scrollIntoView()}, 400); 
  }
  return (
    <div className={isOpen === 'accessories' ? "toc open con-reg" : "toc  con-reg"} ref={reference}>
    <button className='toc-btn' onClick={() => openAndJumpToAccordian('accessories')}>
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
        <div className='anchor-target' id='accessories-section'></div>
        <div className='product-content'>
            <div className='content'>
                <h5 className='heading'>Make your chair your own</h5>
                <Accessories type={type} />
            </div>
        </div>
</div>
  )
}

export default AccessoriesChair;