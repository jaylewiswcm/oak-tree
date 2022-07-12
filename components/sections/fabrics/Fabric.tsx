import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    fabric : {
        name : string
        src: string
        alt: string
        type: string
        composition:string
        description: string
    }
}

export const Fabric = ({fabric}: ComponentProps) => {
    const {name, src, alt, type, composition, description} = fabric;
  return (
    <div className='fabric'>
        <div className='image-wrapper'>
            <Image 
                src={src}
                alt={alt}
                layout='responsive'
                width={600}
                height={450}
            />
        </div>
        <p className='fabric-name'>{name}</p>
        <p className='composition'>{composition}</p>
        {/* <p className='description'>{description}</p> */}
    </div>
  )
}
