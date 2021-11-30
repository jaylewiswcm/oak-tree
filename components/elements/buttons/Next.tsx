import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    id: string,
    img: string,
    classname: string
}

const Next = ({ id, img, classname }: ComponentProps) => {
    return (
      <button id={id} className={`control-btn ${classname}`}>
        <Image 
            src={`/buttons/next-${img}.svg`}
            alt='Next Button'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
        />
      </button>
    )
}

export default Next;