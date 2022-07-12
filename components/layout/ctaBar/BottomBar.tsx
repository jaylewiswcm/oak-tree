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
  
    const { setFormModal } = useAppContext()

  return (
    <div className={`bottom-bar ${className}`}>
        
        <div className='inner-bar'>
        <div className='con-reg'>
            <LandbotChat />
            <div className='phone-number'>
                <p>Questions? Call us free today:</p>
                <p className='number'>0800 094 999</p>
            </div>
            <div className='button-wrapper'>
            <button className='main-cta' onClick={() => setFormModal(true)}>
        <div className='hover-bg'></div>
        <span className='brochure-icon'>
            <Image 
                src='/icons/brochure/brochure-icon-white.svg'
                alt='Brochure Icon'
                layout='responsive'
                width='73'
                height='59.82'
            />
        </span>
        <p>Request Your <br/><em><strong>Free</strong></em> Brochure</p>
    </button>
            </div>
        </div> 
    </div>
    </div>
  )
}
