import React, { useRef } from 'react'
import Image from 'next/image';
import { Fabrics } from '../sections/fabrics/Fabrics';

interface ComponentProps {
    isOpen: string
    openAccordian: any
    reference: React.RefObject<HTMLDivElement> | null
}

const MaterialBed = ({isOpen, openAccordian,reference}:ComponentProps) => {
    const openAndJumpToAccordian = (type:string) => {
        openAccordian(type);
        setTimeout(() => {reference!.current!.scrollIntoView()}, 400); 
    }
  return (
    <div className={isOpen === 'material' ? "toc open  con-reg" : "toc  con-reg"} ref={reference}>
        <button className='toc-btn' onClick={() => openAndJumpToAccordian('material')}>
        <p>Material</p> 
            <span className='icon-wrapper'>
            <Image 
                src='/buttons/plus-black.svg'
                alt='Plus'
                layout='responsive'
                width={15}
                height={15} />
            </span>
        </button>
        <div className='anchor-target' id='material-section'></div>
        <div className='product-content'>
            <div className='content'>
                <p className='subheading oaktree-green'>Step One</p>
                <h5 className='heading'>Choose Your Material</h5>
                <p className='desc'>At Oak Tree, we pride ourselves on our comprehensive range of fabrics and leather. With such a wide selection, there will be something you love whatever your taste.</p>
            </div>
            <Fabrics product="bed"/>
        </div>
    </div>
  )
}

export default MaterialBed;