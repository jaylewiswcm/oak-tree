import React from 'react'
import Image from 'next/image';

interface ComponentProps {
    cx: {
      name: string
      location: string
      product: {
          name: string
          url: string
      }
      thumbnail: string
    }
}

interface ComponentProps {
  setSelectedCx: any
  setShow: any
}

export const TestimonialTile = ({cx, setSelectedCx, setShow}: ComponentProps) => {
  return (
    <div className='testimonial-tile' onClick={() => {setSelectedCx(cx); setShow(true);}}>
          <Image 
            src={cx.thumbnail}
            alt={cx.name}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
          <div className='tile-overlay'>
            <div className='flex-row'>
                <div className='flex-col'>
                    <p className='name'>{cx.name}</p>
                    <p className='location'>{cx.location}</p>
                    <a href={cx.product.url} className='product'>{cx.product.name}</a>
                </div>
                <div className='play-btn'>
                <Image 
                    src='/buttons/play-white-border.svg'
                    alt='Play video'
                    width='50'
                    height='50'
                />
            </div>
            </div> 
          </div>
        </div>
  )
}