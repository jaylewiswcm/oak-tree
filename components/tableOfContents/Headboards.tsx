import React, { useRef } from 'react'
import Image from 'next/image';
// data
import headboards from '../../data/headboards/headboards.json'

interface ComponentProps {
    isOpen: string
    openAccordian: any
    reference: React.RefObject<HTMLDivElement> | null
}

const Headboards = ({isOpen, openAccordian, reference }:ComponentProps) => {
  const openAndJumpToAccordian = (type:string) => {
      openAccordian(type);
      setTimeout(() => {reference!.current!.scrollIntoView()}, 400); 
  }
  return (
    <div className={isOpen === 'headboards' ? "toc open  con-reg" : "toc  con-reg"} ref={reference}>
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
                <h5 className='heading'>Choose Your Headboard</h5>
                {/* <Accessories type='headboards' /> */}
                <div className='headboard-grid'>
                  {headboards.map((item, index) => 
                    <div className='item' key={index}>
                      <div className='image-wrapper'>
                        <Image src={item.image} alt={item.name} layout='responsive' width='295' height='222'/>
                      </div>
                      <p className='name'>{item.name}</p>
                    </div>
                    )}
                </div>
            </div>
        </div>
</div>
  )
}

export default Headboards;