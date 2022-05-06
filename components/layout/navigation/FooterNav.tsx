import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

type Menu = {
    link: string
    text: string
}

interface ComponentProps {
    menuConfig: {
        menuHeader: string
        menu : Array<Menu>
    }
}

export const FooterNav = ({menuConfig}: ComponentProps) => {
const [isOpen, setIsOpen] = useState(false)
const { menuHeader, menu } = menuConfig;

const toggleOpen = () => {
    if(isOpen) {
        setIsOpen(false)
    } else {
        setIsOpen(true)
    }
}

  return (
    <div className={`ul-wrapper ${isOpen ? 'is-open' : ''}`}>
        <div className='list-header' onClick={() => toggleOpen()}>{menuHeader}<span className='arrow-wrapper'><Image src='/vectors/down-arrow-black.svg' alt='open-arrow' width={18} height={11}/></span></div>
        <ul>
            {menu.map((link,index) =>  <li className='list-link' key={index}><Link href={link.link}><a>{link.text}</a></Link></li>)}            
        </ul>
    </div>
  )
}
