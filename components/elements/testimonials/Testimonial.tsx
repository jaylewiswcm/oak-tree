import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    index: string,
    name: string,
    location: string,
    date: string
}

 const Testimonial = ({index, name, location, date}: ComponentProps) => {
    return (
        <div className='testimonial-item'>
            <div className='image-wrapper'>
                <Image src={`/images/testimonials/testimonial-${index}.png`} alt={name}
                    layout="fill"  
                    objectFit='cover' 
                    objectPosition='center'
                />
            </div>
            <div className='item-overlay'></div>
            <div className='button-wrapper'>
                <Image src='/images/icons/play-white.svg' alt='play button' width='60' height='60'/>
            </div>
            <div className='testimonial-info'>
                <p className='name'>{name}</p>
                <p className='place'>{location}</p>
                <p className='date'>{date}</p>
            </div>
        </div>
    )
}

export default Testimonial;