import React from 'react'
import Image from 'next/image';

export const Partners = () => {
  return (
    <div className='our-partners con-reg'>
        <div className='logo-grid'>
            <div className='partner-logo'>
                <Image 
                    src='/images/landing-pages/partner-logos/bfm.png'
                    alt='British Furniture Manufacturers'
                    layout='responsive'
                    width={206}
                    height={79}
                />
            </div>
            <div className='partner-logo'>
                <Image 
                    src='/images/landing-pages/partner-logos/rehacare.png'
                    alt='Rehacare Design awards'
                    layout='responsive'
                    width={206}
                    height={79}
                />
            </div>
            <div className='partner-logo'>
                <Image 
                    src='/images/landing-pages/partner-logos/furniture-omb.png'
                    alt='Furniture Ombudsman'
                    layout='responsive'
                    width={206}
                    height={79}
                />
            </div>
            <div className='partner-logo'>
                <Image 
                    src='/images/landing-pages/partner-logos/bhf.png'
                    alt='British Heart Foundation'
                    layout='responsive'
                    width={206}
                    height={79}
                />
            </div>
            <div className='partner-logo'>
                <Image 
                    src='/images/landing-pages/partner-logos/investors-in-people.png'
                    alt='Investors in People'
                    layout='responsive'
                    width={206}
                    height={79}
                />
            </div>
        </div>
    </div>
  )
}
