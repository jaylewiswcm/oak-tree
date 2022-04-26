import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface ComponentProps {
    type: string
    keyId: number
    closeMenu: any
}
const Menu = ({ type, keyId , closeMenu}: ComponentProps) => {
    const menuConfig = [
        {
          keyId: 0,
          menuName: 'About Oak Tree',
          options: [
            { title: "About Us", icon : "", url: '/about' },
            { title: "Our Occupational Therapist", icon : "", url: '/occupational-therapist' },
            { title: "Testimonials and Reviews", icon : "", url: '/testimonials-and-reviews' },
            { title: "Delivery and Installation", icon : "", url: '/delivery-and-installation' },
          ],
        },
        {
          keyId: 1,
          menuName: 'Rise and Recline Chairs',
          options: [
            { title: "The Oak", icon : "/icons/products/icon-oak.svg", url: '/chairs/the-oak' },
            { title: "The Maple", icon : "/icons/products/icon-maple.svg", url: '/chairs/the-maple' },
            { title: "The Cedar", icon : "/icons/products/icon-cedar.svg", url: '/chairs/the-cedar' },
            { title: "The Rowan", icon : "/icons/products/icon-rowan.svg", url: '/chairs/the-rowan' },
            { title: "The Tulip", icon : "/icons/products/icon-tulip.svg", url: '/chairs/the-tulip' },
            { title: "All Chairs", icon : "", url: '/chairs' },
          ],
        },
        {
          keyId: 2,
          menuName: 'Adjustable Beds',
          options: [
            { title: "The Poplar", icon : "/icons/products/icon-poplar.svg", url: '/adjustable-beds/the-poplar' },
            { title: "The Lilac", icon : "/icons/products/icon-lilac.svg", url: '/adjustable-beds/the-lilac' },
            { title: "The Hazel", icon : "/icons/products/icon-hazel.svg", url: '/adjustable-beds/the-hazel' },
            { title: "The Hesper", icon : "/icons/products/icon-hesper.svg", url: '/adjustable-beds/the-hesper' },
            { title: "The Oysterwood", icon : "/icons/products/icon-oysterwood.svg", url: '/adjustable-beds/the-oysterwood' },
            { title: "The Birch", icon : "/icons/products/icon-birch.svg", url: '/adjustable-beds/the-birch' },
            { title: "All Beds", icon : "", url: '/adjustable-beds' },
          ],
        },
        {
          keyId: 3,
          menuName: 'Bath Lifts',
          options: [
            { title: "The Riviera Plus", icon : "/icons/products/icon-riviera.svg", url: '/bath-lifts/the-riviera-plus' },
            { title: "Oak Tree Bath Lifts", icon : "", url: '/bath-lifts' },
          ],
        },
      ];

  return (
    <div className={`dd-menu ${type}-dd`}>
        <ul className='dd-ul'> 
          <li className='menu-title'><p>{menuConfig[keyId].menuName}</p></li>
          {menuConfig[keyId].options.map((link, index) => 
                <li key={index}>
                <Link href={link.url} >
                { link.icon !== "" ?
                  <a onClick={closeMenu}>
                    <span className='icon'><Image src={link.icon} alt={`${link.title} Leaf`} layout='responsive' width={50} height={50}/></span>
                    <p>{link.title}</p>
                  </a>
                  :  <a className='no-icon' onClick={closeMenu}><p>{link.title}</p></a>}
                </Link>
              </li>
            )}  
        </ul>
    </div> 
  )
}


export default Menu;