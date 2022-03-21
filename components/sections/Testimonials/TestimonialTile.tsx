import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    name: string
    location: string
    product: {
        name: string
        url: string
    }
    thumbnail: string
}

export const TestimonialTile = ({name, location, product, thumbnail}: ComponentProps) => {
  return (
    <div className='testimonial-tile'>
          <Image 
            src={thumbnail}
            alt={name}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
          <div className='tile-overlay'>
            <div className='flex-row'>
                <div className='flex-col'>
                    <p className='name'>{name}</p>
                    <p className='location'>{location}</p>
                    <a href={product.url} className='product'>{product.name}</a>
                </div>
                <button className='play-btn'>
                <Image 
                    src='/buttons/play-white-border.svg'
                    alt='Play video'
                    width='50'
                    height='50'
                />
            </button>
            </div> 
          </div>
        </div>
  )
}