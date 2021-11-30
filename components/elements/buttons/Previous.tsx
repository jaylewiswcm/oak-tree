import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    id: string,
    img: string,
    classname: string
}

const Previous = ({ id, img, classname }: ComponentProps) => {
    return (
      <button id={id} className={`control-btn ${classname}`}>
        <Image 
            src={`/buttons/prev-${img}.svg`}
            alt='Prev Button'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
        />
      </button>
    )
}

export default Previous;