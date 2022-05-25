import React from 'react'
import Image from 'next/image'

interface ComponentProps {
    fabric: {
        name: string
        src: string
        type: string
    }
}

export const Fabric = ({fabric} : ComponentProps) => {
  return (
    <div className='fabric'>
        <div className='image-wrapper'>
            <Image 
                src={fabric.src}
                alt={Fabric.name}
                layout='responsive'
                width='90'
                height='90'
            />
        </div>
        <p className='fabric-name'>{fabric.name}</p>
    </div>
  )
}
