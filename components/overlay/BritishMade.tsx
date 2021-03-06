import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const BritishMade = () => {
  return (
        <Link href='/british-made'>
            <a>
                <div className='icon-wrapper'>
                    <Image
                        src='/graphics/british-made-badge.svg'
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
