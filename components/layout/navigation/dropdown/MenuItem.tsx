import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface ComponentProps {
  closeMenu: any
  // link: {
  //   url: string
  //   icon:string
  //   title: string
  // }
  item: {
      title: string
      desc: string
      url: string
      icon:string
  }
}

export const MenuItem = ({closeMenu, item}: ComponentProps) => {
  const {title , desc, icon, url} = item;
  return (
    <li>
      <Link href={url} >
        <a onClick={() => closeMenu(false)}>
          { icon &&  <span className='icon'><Image src={icon} alt={`${title} Leaf`} layout='responsive' width={50} height={50}/></span>}
          <div className='link-content'>
            <p className='link-title'>{title}</p>
            <p className='link-desc'>{desc}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}
