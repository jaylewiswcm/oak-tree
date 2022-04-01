import React, { useState, useEffect } from 'react'
import Image from 'next/image';
interface ComponentProps {
    item: {
        name : string
        image: string
        icon: string
        desc: string
    }
    slideChange: boolean
}

export const Accessory = ({item, slideChange}:ComponentProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const {name,image,icon,desc} = item;

    useEffect(() => {
        if(slideChange) {
            setIsOpen(false)
        }
    },[slideChange])

  return (
        <div className={isOpen ? 'accessory-wrapper open' : 'accessory-wrapper'}>
                    <div className="image-wrapper">
                        <Image 
                            src={image}
                            alt={name}
                            layout='responsive'
                            width={284}
                            height={198}
                        />
                    </div>
                    <div className='flex-row'>
                        <div className='icon-wrapper'>
                            <Image 
                                src={icon}
                                alt={`${name} icon`}
                                layout='responsive'
                                width={35}
                                height={35}
                            />
                        </div>
                        <p>{name}</p>
                    </div>
                    <div className='desc'><p>{desc}</p></div>
                    <button className='learn-more' onClick={() => isOpen ? setIsOpen(false) :setIsOpen(true)}>
                        <p>{ isOpen ? 'Show Less' : 'Learn More' }</p>
                        <div className="arrow">
                            <Image 
                                src='/vectors/arrow-down-learn-more-green.svg'
                                alt='Down arrow'
                                layout='responsive'
                                width={20}
                                height={20}
                            />
                        </div>
                    </button>
                </div>
  )
}
