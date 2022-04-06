import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    fabric : {
        name : string
        src: string
        type: string
    }
}

export const Fabric = ({fabric}: ComponentProps) => {
    const {name, src, type} = fabric;
  return (
    <div className='fabric'>
        <div className='image-wrapper'>
            <Image 
                src={src}
                alt={name}
                layout='responsive'
                width={100}
                height={100}
            />
        </div>
        <p className='fabric-name'>{name}</p>
        <p className='type'>{type}</p>
    </div>
  )
}
