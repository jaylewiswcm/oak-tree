import React, { useState, useEffect } from 'react'
import Image from 'next/image';
interface ComponentProps {
    item: {
        name : string
        image: string
        icon?: string
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
        <div className='accessory-wrapper open'>
                    <div className="image-wrapper">
                        <Image 
                            src={image}
                            alt={name}
                            layout='responsive'
                            width={349}
                            height={174}
                        />
                    </div>
                    <div className='flex-row'>
                        { icon &&  
                               <div className='icon-wrapper'>
                               <Image 
                                   src={icon}
                                   alt={`${name} icon`}
                                   layout='responsive'
                                   width={35}
                                   height={35}
                               />
                           </div>
                           }
                        <p>{name}</p>
                    </div>
                    <div className='desc'><p>{desc}</p></div>
                </div>
  )
}
