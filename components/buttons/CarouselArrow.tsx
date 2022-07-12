import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    type: string
    btnId: string
}

export const CarouselArrow = ({type, btnId}: ComponentProps) => {
  return (
    <>
        <button className={`carousel-button ${type}-btn`} id={btnId}>
            <div className='arrow'>
                <Image
                    src='/buttons/carousel-arrow.svg'
                    alt='Previous Fabric'
                    layout='responsive'
                    width={15.73}
                    height={9.06}
                />
            </div>
        </button>   
</>   
  )
}
