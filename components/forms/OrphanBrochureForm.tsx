import React, { useState } from 'react'
import BrochureRequestForm from './types/BrochureRequestForm';

interface ComponentProps {
  productType : string
}

const OrphanBrochureForm = ({productType}: ComponentProps) => {
  return (
    <div className='form'>
    <div className='form-title'>
        <h1>Request Your <span className='oaktree-green'>FREE</span> Brochure</h1>
        <p>Get our new brochure delivered to your door!</p>
    </div>
    <BrochureRequestForm productType={productType} />
</div>
  )
}

export default OrphanBrochureForm;
