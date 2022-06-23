import React from 'react'
// data
import faqs from "../../data/faqs/faqs.json";
import { Accordion } from './Accordion';

export const FAQs = () => {
  return (
    <div className='faq-table'>
        {faqs.map((item:any, index: number) => 
            <Accordion question={item.question} answer={item.answer} key={index}/>
        )}
    </div>
  )
}
