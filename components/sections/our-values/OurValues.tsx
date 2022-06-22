import React from 'react'
import Image from 'next/image';

const OurValues = () => {
  return (
    <div className='our-values con-reg'>
        <h6>Our Values</h6>
        <div className='value-grid'>
            <div className='value-item'>
                <div className='number'>
                    <p>1</p>
                    <div className='line'></div>
                </div>
                <div className='value'>
                    <div className='icon'>
                        <Image 
                            src='/icons/our-values/icon-trust.svg'
                            alt='Hand shake'
                            layout='responsive'
                            width='70'
                            height='65'
                        />
                    </div>
                    <p className='value-heading'>Trust</p>
                    <p>We’re founder led. That means we keep things simple and do the things we believe in for the right reasons.</p>
                </div>
            </div>
            <div className='value-item'>
                <div className='number'>
                    <p>2</p>
                    <div className='line'></div>
                </div>
                <div className='value'>
                <div className='icon'>
                        <Image 
                            src='/icons/our-values/icon-expertise.svg'
                            alt='Documents and pencil'
                            layout='responsive'
                            width='70'
                            height='65'
                        />
                </div>
                <p className='value-heading'>Expertise</p>
                <p>Nobody knows the industry better. Since 2008 we have been working hard on taking mobility products to the next level.</p>
                </div>
            </div>
            <div className='value-item'>
                <div className='number'>
                    <p>3</p>
                    <div className='line'></div>
                </div>
                <div className='value'>
                <div className='icon'>
                        <Image 
                            src='/icons/our-values/icon-britain.svg'
                            alt='Union jack in a heart'
                            layout='responsive'
                            width='70'
                            height='65'
                        />
                </div>
                <p className='value-heading'>Made in Britain</p>
               <p>Hand made by British craftsmen, using the best British materials.</p>
                </div>
            </div>
            <div className='value-item'>
                <div className='number'>
                    <p>4</p>
                    <div className='line'></div>
                </div>
                <div className='value'>
                    <div className='icon'>
                        <Image 
                            src='/icons/our-values/icon-quality.svg'
                            alt='Medal with a tick'
                            layout='responsive'
                            width='70'
                            height='65'
                        />
                    </div>
                    <p className='value-heading'>Quality</p>
                    <p>We make things right. Both our product, and our customer’s ability to do something.</p>
                </div>
            </div>
            <div className='value-item'>
                <div className='number'>
                    <p>5</p>
                    <div className='line'></div>
                </div>
                <div className='value'>
                    <div className='icon'>
                        <Image 
                            src='/icons/our-values/icon-service.svg'
                            alt='Woman with a headset'
                            layout='responsive'
                            width='70'
                            height='65'
                        />
                    </div>
                    <p className='value-heading'>Service</p>
                    <p>No Selling. Helping. No Delays without communication. The best quality checks in the business. Made to fit.</p>
                </div>
            </div>
            <div className='value-item ready-to-talk'>
                <p className='value-heading'>Ready To Talk?</p>
                <p>Call us on 0800 094 999</p>
            </div>
        </div>
    </div>
  )
}


export default OurValues;