import React from 'react'
import Image from 'next/image'

interface ComponentProps {
    hideOverlay: any
    className:string
}

export const BritishMade = ({hideOverlay, className}:ComponentProps) => {
  return (
    <div className={className}>
        <div className='icon-wrapper'>
        <Image
            src='/graphics/british-made-heart.svg'
            alt='British Made'
            layout='responsive'
            width='78'
            height='68'
        />
        </div>
        <p>Handmade in<br/>Great Britain</p>
        <div className='close-button' onClick={() => hideOverlay(false)}>
            <div className='cross'>
            <Image
                src='/buttons/red-exit-cross.svg'
                alt='British Made'
                layout='responsive'
                width='176'
                height='140'
            />
            </div>
        </div>
    </div>
  )
}
