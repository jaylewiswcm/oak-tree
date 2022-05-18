import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// Components
import DropDown from './dropdown/DropDown';
interface ComponentProps {
    setMenuType: any
    menuType: string
    item: {
        menuName:string
        expand: boolean
        url: string
        id: number
        menuType: string
    }
    setHover: any
    isHover: number
    setVisible: any
}

export const MenuItem = ({setMenuType, item, isHover, setHover,setVisible}: ComponentProps) => {
    const {menuName, expand, url, id } = item;

    const onHover = () => {
        setMenuType(item.menuType); 
        setHover(id); 
        setVisible(true);
    }

    const onLeave = () => {
        setHover(0);
        setVisible(false);
    }
  return (
    <>
      <li onMouseOver={() => { expand === true ? onHover(): null}} onMouseLeave={() => onLeave()} className={`${isHover === 0 ? '' : isHover === id ? 'is-hovered' : 'not-hovered'}`}>
            <Link href={url}>
                <a>
                    {menuName}
                    {/* { expand &&  <span className='arrow'><Image src='/vectors/nav-arrow-down.svg' alt='arrow down' layout='responsive' width='8' height='4'/></span> } */}
                </a>
            </Link> 
        </li>
    </>
  )
}
