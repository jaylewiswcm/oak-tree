import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    name: string,
    location: string,
    product: string,
    img: {
        src: string,
        alt: string
    },
    onClick: React.MouseEventHandler<HTMLDivElement>,
    selectedClass: string
}

 const Testimonial = ({name, location, product, img, onClick, selectedClass}: ComponentProps) => {
     const {src, alt} = img
    return (
        <div className={`cx-item ${selectedClass}`} onClick={onClick}>
        <div className='overlay'></div>
        <Image 
            src={src} 
            alt={alt}
            layout="fill"  
            objectFit='cover' 
            objectPosition='center'
          />
        <div className='item-bottom'>
          <div className='cx-info'>
            <p className='cx-name'>{name}</p>
            <p  className='product'>{product}</p>
            <div className='location'>
                <Image 
                    src="/images/icons/location-pin.svg"
                    layout="intrinsic"
                    width="15"
                    height="15"
                />
                <p>{location}</p>
            </div>
          </div>
          <div className='play-btn'>
          <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'/>
          </div>
        </div>
      </div>
    )
}

export default Testimonial;