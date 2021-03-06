import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface ComponentProps {
  closeMenu: any
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
    <li className={icon === 'all' ? 'all-products' : '' }>
      <Link href={url} >
        <a onClick={() => closeMenu(false)}>
          { icon && icon !== 'all' && <span className='product-image'><Image src={icon} alt={title} layout='fill' objectFit='contain' objectPosition='center'></Image></span> }
          {/* { icon &&  <span className='icon'><Image src={icon} alt={`${title} Leaf`} layout='responsive' width={50} height={50}/></span>} */}
          <div className='link-content'>
            <p className='link-title'>{title}</p>
            <p className='link-desc'>{desc}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}
