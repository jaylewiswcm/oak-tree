import React, { useRef } from 'react'
import Image from 'next/image';
import {Accessories} from '../sections/accessories/Accessories';

interface ComponentProps {
    isOpen: string
    openAccordian: any
}

const Headboards = ({isOpen, openAccordian }:ComponentProps) => {
  const tocElement = useRef<HTMLDivElement>(null)
  const openAndJumpToAccordian = (type:string) => {
      openAccordian(type);
      setTimeout(() => {tocElement.current!.scrollIntoView()}, 400); 
  }
  return (
    <div className={isOpen === 'headboards' ? "toc open  con-reg" : "toc  con-reg"} ref={tocElement}>
    <button className='toc-btn' onClick={() => openAndJumpToAccordian('headboards')}>
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
        <div className='anchor-target' id='headboard-section'></div>
        <div className='product-content'>
            <div className='content'>
                <p className='subheading oaktree-green'>Step Three</p>
                <h5 className='heading'>Choose Your Headboard</h5>
                {/* <Accessories type='headboards' /> */}
                <div></div>
            </div>
        </div>
</div>
  )
}

export default Headboards;