import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const Warranty = () => {
  return (
                <div className='icon-wrapper'>
                    <Image
                        src='/graphics/warranty-badge.svg'
                        alt='10 years warranty'
                        layout='responsive'
                        width='150'
                        height='150'
                    />
                </div>
  )
}
