import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
// Context
import { useAppContext } from '../../../context/state';
// Components
import Modal from '../../modal/Modal';
import PopupBrochureRequestForm from '../../forms/PopupBrochureRequestForm';
import LandbotChat from '../../chatbot/LandbotChat';

interface ComponentProps {
    className: string
} 

export const BottomBar = ({className}: ComponentProps) => {
  
  return (
    <div className={`bottom-bar ${className}`}>
        <div className='inner-bar'>
            <LandbotChat />
            <div className='phone-number'>
                <p>Questions? Call us free today:</p>
                <p className='number'>0800 094 999</p>
            </div>
            <div className='button-wrapper'>
            <button className='main-cta'>
        <div className='hover-bg'></div>
        <span className='brochure-icon'>
            <Image 
                src='/icons/brochure/brochure-icon-white.svg'
                alt='Brochure Icon'
                layout='responsive'
                width='50'
                height='50'
            />
        </span>
        <p>Request a Free Brochure</p>
    </button>
            </div>
        </div> 
        {/* {show &&  <Modal classNames='form-modal' setShow={setFormToShow}><PopupBrochureRequestForm setShow={setFormToShow} /></Modal>}
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
                <p>Questions? Call us free today:</p>
                <Link href='tel:0800094999'><a className='number'>0800 094 999</a></Link>
            </div>
            <div className='brochure-cta'>
                <button className='bottom-cta' onClick={() => setFormToShow(true)}>
    
                       <div className="brochure-section">
                          <div className='brochure-image'>
                            <Image 
                              src='/brochures/chair-brochure.png'
                              alt='Brochure'
                              layout='responsive'
                              width={1000}
                              height={1412}
                            />
                          </div>
                          <div className='brochure-open'>
                          <Image 
                              src='/brochures/chair-brochure-open.png'
                              alt='Brochure'
                              layout='responsive'
                              width={1000}
                              height={708}
                            />
                          </div>
                        </div>
                        <p>Request Your<br/> <span>Free</span> Brochure</p>
                </button>
            </div>
        </div> */}
    </div>
  )
}
