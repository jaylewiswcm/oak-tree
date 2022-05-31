import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Modal from '../../modal/Modal';
import PopupBrochureRequestForm from '../../forms/PopupBrochureRequestForm';

interface ComponentProps {
    className: string
}

export const BottomBar = ({className}: ComponentProps) => {
  const [show, setFormToShow] = useState(false)
  return (
    <div className={`bottom-bar ${className}`}> 
        {show &&  <Modal classNames='form-modal' setShow={setFormToShow}><PopupBrochureRequestForm setShow={setFormToShow} /></Modal>}
        <button className='mobile-button' onClick={() => setFormToShow(true)}>
                    <span className='icon-wrapper'>
                        <Image 
                            src='/icons/brochure/brochure-icon.svg'
                            alt='Brochure'
                            layout='responsive'
                            width={84}
                            height={70}
                        />
                    </span>
                    <p>Request a Brochure</p>
                </button>
        <div className='inner-wrapper con-reg'>
            <div className='phone-wrapper'>
                <p>Call us free on:</p>
                <Link href='tel:0800094999'><a className='number'>0800 094 999</a></Link>
            </div>
            <div className='brochure-cta'>
                <button className='bottom-cta' onClick={() => setFormToShow(true)}>
                    <span className='icon-wrapper'>
                        <Image 
                            src='/icons/brochure/brochure-icon.svg'
                            alt='Brochure'
                            layout='responsive'
                            width={84}
                            height={70}
                        />
                    </span>
                    <p>Request Your<br/>FREE Brochure</p>
                </button>
            </div>
        </div>
    </div>
  )
}
