import React from 'react'
import Image from 'next/image';
import {motion } from 'framer-motion';

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
  const easing =[.6, -.05, .01, .99]

  const fadeInFromAbove = {
    visible: { x:0, opacity: 1, transition: { duration: 1.2, ease: easing } },
    hidden: {  x:-800, opacity: 0 }
  }

  return (
    <motion.div variants={fadeInFromAbove} className='testimonial-tile' onClick={() => {setSelectedCx(cx); setShow(true);}}>
          <Image 
            src={cx.thumbnail}
            alt={cx.name}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            quality='100'
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
        </motion.div>
  )
}