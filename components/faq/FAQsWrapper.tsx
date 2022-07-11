import React from 'react'
// Components
import { FAQs } from './FAQs'

interface ComponentProps {
    title: string
    copy: string
    type: string 
}

export const FAQsWrapper = ({title, copy, type}: ComponentProps) => {
  return (
    <div className='faq-content con-reg'>
        <div className='side-panel'>
            <h3>{title}</h3>
            <h4>FAQs</h4>
            <p>{copy}</p>
        </div>
        <div className='faqs'>
            <FAQs type={type}/>
        </div>
    </div>
  )
}
