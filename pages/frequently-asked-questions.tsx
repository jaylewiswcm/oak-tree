import React from 'react'
import { NextSeo } from 'next-seo'
// Components
import {FAQs} from '../components/faq/FAQs';

const FrequentlyAskedQuestions = () => {
  return (
    <>
          <NextSeo 
            title="Frequently Asked Questions | Oak Tree Mobility"
            description="Take a look at our Frequently Asked Questions and find out more about the range of mobility products available from Oak Tree Mobility."
        />

        <div className='help-centre-hero'>
            <div className='con-reg inner-hero'>
                <h1>Frequently Asked Questions</h1>
                <h2>Help Centre</h2>
                <p>Everything you need to know about Oak Tree Mobility</p>
            </div>
        </div>

        <div className='faq-content con-reg'>
            <div className='side-panel'>
                <h3>Support</h3>
                <h4>FAQs</h4>
                <p>At Oak Tree Mobility our passion is to provide a service as high quality as our products, so your experience with us is second to none. We have a dedicated experienced team available to answer all of your questions and queries at any time.</p>
            </div>
            <div className='faqs'>
                <FAQs />
            </div>
        </div>

    </>
  )
}

export default  FrequentlyAskedQuestions