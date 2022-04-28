import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const TradeIn = () => {
  return (
        <Link href='/trade-in'>
            <a>
                <div className='icon-wrapper'>
                    <Image
                        src='/graphics/trade-in-badge.svg'
                        alt='British Made'
                        layout='responsive'
                        width='150'
                        height='150'
                    />
                </div>
            </a>
        </Link>
  )
}
