import React, { useEffect, useState } from 'react'
import Image from 'next/image';

interface ComponentProps {
    error: string
    onChange: any
    productChecked: any
}

export const ProductInterest = ({ error, onChange, productChecked}:ComponentProps) => { 
  return (
        <div className={`input-wrapper ${error !== '' ? 'errors' : null}`}>
                    <p className='error-p'>Please choose what product you are interested in</p>
                    <div className={productChecked === 'bath_lifts' ? 'radio-wrapper checked' : 'radio-wrapper'}>
                        <input type="radio" value='bath_lifts' id='bath_lifts' name='product_interest' onChange={onChange}/>
                        <label htmlFor='bath_lifts'>Bath Lifts</label>
                        <span className='image-wrapper' >
                            <Image 
                                src='/images/collections/collection-bathlifts.png'
                                alt='Bath Lifts'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </span>
                        <p>Bath Lifts</p>
                    </div>
                    <div className={productChecked === 'beds' ? 'radio-wrapper checked' : 'radio-wrapper'}>
                        <input type="radio" value='beds' id='beds' name='product_interest' onChange={onChange}/>
                        <label htmlFor='beds'>Adjustable Beds</label>
                        <span className='image-wrapper'>
                            <Image 
                                src='/images/collections/collection-beds.png'
                                alt='Beds'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </span>
                        <p>Adjustable Beds</p>
                    </div>
                    <div className={productChecked === 'chairs' ? 'radio-wrapper checked' : 'radio-wrapper'}>
                        <input type="radio" value='chairs' id='chairs' name='product_interest' onChange={onChange}/>
                        <label htmlFor='chairs'>Rise and Recline Chairs</label>
                        <span  className='image-wrapper'>
                            <Image 
                                src='/images/collections/collection-chairs.png'
                                alt='Chairs'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </span>
                        <p>Rise and Recline Chairs</p>
                    </div>
                    <p className='label'>What product are you interested in?</p>
    </div>
  )
}
