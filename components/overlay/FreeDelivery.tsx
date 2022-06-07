import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const FreeDelivery = () => {
  return (

                <div className='icon-wrapper'>
                    <Image
                        src='/graphics/free-delivery-badge.svg'
                        alt='Free Delivery'
                        layout='responsive'
                        width='150'
                        height='150'
                    />
                </div>
  )
}
