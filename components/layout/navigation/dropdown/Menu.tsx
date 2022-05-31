import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
// Components 
import { InnerMenus } from './InnerMenus';
interface ComponentProps {
    type: string
    keyId: number
    toggleVisibility: any
    setVisible: any
    setHover: any
}
const Menu = ({ type, keyId , toggleVisibility, setVisible, setHover}: ComponentProps) => {
  const [menuIndex, setMenuIndex] = useState(0);
    
  useEffect(() => {
      if(keyId !== 0) {
        setMenuIndex(keyId)
      }
  }, [keyId])
  

  return (
    <div className={`dd-menu ${type && type + '-dd'}` } onMouseOver={()=> {setVisible(true);setHover(menuIndex);}} onMouseOut={() => {setVisible(false); setHover(0);}}>
      <div className='dd-inner'>
       <div className='header-arrow'></div>
       <div className='menu-inner'>
         {menuConfig.map((menu, index) => 
          <InnerMenus menus={menu} closeMenu={toggleVisibility} key={index} keyId={menu.keyId} menuIndex={menuIndex} />
            // <>
            // {menu.keyId === menuIndex && <InnerMenus menus={menu} closeMenu={toggleVisibility} key={index}/>} 
            // </>
          )}

       </div>
       </div>
        {/* <ul className='dd-ul'> 
        {menuConfig.map(items => 
          <>
            {items.keyId === keyId && 
            <>
              <li className='menu-title'><p>{items.menuName}</p></li>
              {items.options.map((link, index) => 
                <MenuItem link={link} key={index} closeMenu={closeMenu}/>
              )}  
            </>              
            }
          </>)}
        </ul> */}
    </div> 
  )
}

export default Menu;

const menuConfig = [
  {
    keyId: 2,
    menu1: {
      menuName: 'About',
      options: [
        { title: "About Us", desc: "Learn about our story", icon : "", url: '/about' },
        { title: "Our Occupational Therapist", desc: "Meet our occupational therapist", icon : "", url: '/occupational-therapist' },
        { title: "Trade In", desc: "Learn about our trade in offer", icon : "", url: '/trade-in' },
        { title: "Testimonials and Reviews", desc: "See what our customers think", icon : "", url: '/testimonials-and-reviews' },
        { title: "British Made", desc: "Proud British manufacturing", icon : "", url: '/british-made' },
        
        
      ],
    },
    menu2: {
      menuName: 'Customer Support',
      options: [
        { title: "Delivery and Installation", desc: "Learn how we deliver to you", icon : "", url: '/delivery-and-installation' },
        { title: "VAT Exempt Eligibility", desc: "See if you’re eligible for VAT exemption", icon : "", url: '/vat-exempt-eligibility' },
        { title: "Chair Price Guide", desc: "Understand our chair prices", icon : "", url: '/price-guide-chair' },
        { title: "Bed Price Guide", desc: "Understand our bed prices", icon : "", url: '/price-guide-bed' },
      ],
    }
  },
  {
    keyId: 3,
    menu1: {
      menuName: 'Rise and Recline Chairs',
      options: [
              { title: "The Oak", desc: "", icon : "/icons/products/navigation/oak.svg", url: '/chairs/the-oak' },
              { title: "The Maple", desc:"", icon : "/icons/products/navigation/maple.svg", url: '/chairs/the-oak' },
              { title: "The Cedar", desc:"", icon : "/icons/products/navigation/cedar.svg", url: '/chairs/the-oak' },
              { title: "The Rowan", desc:"", icon : "/icons/products/navigation/rowan.svg", url: '/chairs/the-oak' },
              { title: "The Tulip", desc:"", icon : "/icons/products/navigation/tulip.svg", url: '/chairs/the-oak' },
              { title: "All Chairs", desc:"View our whole collection of chairs", icon : "all", url: '/chairs' },
            ],
    },
    menu2: {
      menuName: 'Helpful Advice',
      options: [
        { title: "Delivery and Installation", desc: "Learn how we deliver to you", icon : "", url: '/delivery-and-installation' },
        { title: "VAT Exempt Eligibility", desc: "See if you’re eligible for VAT exemption", icon : "", url: '/vat-exempt-eligibility' },
        { title: "Chair Price Guide", desc: "Understand our chair prices", icon : "", url: '/price-guide-chair' },
      ],
    }
  },
  {
    keyId: 4,
    menu1: {
      menuName: 'Adjustable Beds',
      options: [
              { title: "The Poplar", desc:"", icon : "/icons/products/navigation/poplar.svg", url: '/adjustable-beds/the-hazel' },
              { title: "The Lilac", desc:"", icon : "/icons/products/navigation/lilac.svg", url: '/adjustable-beds/the-hazel' },
              { title: "The Hazel", desc:"", icon : "/icons/products/navigation/hazel.svg", url: '/adjustable-beds/the-hazel' },
              { title: "The Hesper", desc:"", icon : "/icons/products/navigation/hesper.svg", url: '/adjustable-beds/the-hazel' },
              { title: "The Oysterwood", desc:"", icon : "/icons/products/navigation/oysterwood.svg", url: '/adjustable-beds/the-hazel' },
              { title: "The Birch", desc:"", icon : "/icons/products/navigation/birch.svg", url: '/adjustable-beds/the-hazel' },
              { title: "All Beds", desc:"View our whole collection of beds", icon : "all", url: '/adjustable-beds' },
            ],
    },
    menu2: {
      menuName: 'Helpful Advice',
      options: [
        { title: "Delivery and Installation", desc: "Learn how we deliver to you", icon : "", url: '/delivery-and-installation' },
        { title: "VAT Exempt Eligibility", desc: "See if you’re eligible for VAT exemption", icon : "", url: '/vat-exempt-eligibility' },
        { title: "Bed Price Guide", desc: "Understand our Bed prices", icon : "", url: '/price-guide-bed' },
      ],
    }
  },
  {
    keyId: 5,
    menu1: {
      menuName: 'Bath Lifts',
      options: [
           
              { title: "Oak Tree Bath Lifts", desc: "View our whole collection of bath lifts", icon : "", url: '/bath-lifts' },
              { title: "The Riviera Plus", desc: "",icon : "/icons/products/navigation/riviera.svg", url: '/bath-lifts/the-riviera-plus' },
            ],
    },
    menu2: {
      menuName: 'Helpful Advice',
      options: [
        { title: "Delivery and Installation", desc: "Learn how we deliver to you", icon : "", url: '/delivery-and-installation' },
        { title: "VAT Exempt Eligibility", desc: "See if you’re eligible for VAT exemption", icon : "", url: '/vat-exempt-eligibility' },
      ],
    }
  },
];
// const menuConfig = [
//   {
//     keyId: 2,
//     menu1: {
//       menuName: 'About',
//       options: [
//         { title: "About Us", icon : "", url: '/about' },
//         { title: "Our Occupational Therapist", icon : "", url: '/occupational-therapist' },
//         { title: "Testimonials and Reviews", icon : "", url: '/testimonials-and-reviews' },
//         { title: "Delivery and Installation", icon : "", url: '/delivery-and-installation' },
//         { title: "VAT Exempt Eligibility", icon : "", url: '/vat-exempt-eligibility' },
//         { title: "Chair Price Guide", icon : "", url: '/price-guide-chair' },
//         { title: "Bed Price Guide", icon : "", url: '/price-guide-bed' },
//         { title: "British Made", icon : "", url: '/british-made' },
//       ],
//     },
//     menu2: {
//       menuName: 'About Oak Tree',
//       options: [
//         { title: "About Us", icon : "", url: '/about' },
//         { title: "Our Occupational Therapist", icon : "", url: '/occupational-therapist' },
//         { title: "Testimonials and Reviews", icon : "", url: '/testimonials-and-reviews' },
//         { title: "Delivery and Installation", icon : "", url: '/delivery-and-installation' },
//         { title: "VAT Exempt Eligibility", icon : "", url: '/vat-exempt-eligibility' },
//         { title: "Chair Price Guide", icon : "", url: '/price-guide-chair' },
//         { title: "Bed Price Guide", icon : "", url: '/price-guide-bed' },
//         { title: "British Made", icon : "", url: '/british-made' },
//       ],
//     }
//   },
//   {
//     keyId: 3,
//     menuName: 'Rise and Recline Chairs',
//     options: [
//       { title: "The Oak", icon : "/icons/products/icon-oak.svg", url: '/chairs/the-oak' },
//       { title: "The Maple", icon : "/icons/products/icon-maple.svg", url: '/chairs/the-maple' },
//       { title: "The Cedar", icon : "/icons/products/icon-cedar.svg", url: '/chairs/the-cedar' },
//       { title: "The Rowan", icon : "/icons/products/icon-rowan.svg", url: '/chairs/the-rowan' },
//       { title: "The Tulip", icon : "/icons/products/icon-tulip.svg", url: '/chairs/the-tulip' },
//       { title: "All Chairs", icon : "", url: '/chairs' },
//     ],
//   },
//   {
//     keyId: 4,
//     menuName: 'Adjustable Beds',
//     options: [
//       { title: "The Poplar", icon : "/icons/products/icon-poplar.svg", url: '/adjustable-beds/the-poplar' },
//       { title: "The Lilac", icon : "/icons/products/icon-lilac.svg", url: '/adjustable-beds/the-lilac' },
//       { title: "The Hazel", icon : "/icons/products/icon-hazel.svg", url: '/adjustable-beds/the-hazel' },
//       { title: "The Hesper", icon : "/icons/products/icon-hesper.svg", url: '/adjustable-beds/the-hesper' },
//       { title: "The Oysterwood", icon : "/icons/products/icon-oysterwood.svg", url: '/adjustable-beds/the-oysterwood' },
//       { title: "The Birch", icon : "/icons/products/icon-birch.svg", url: '/adjustable-beds/the-birch' },
//       { title: "All Beds", icon : "", url: '/adjustable-beds' },
//     ],
//   },
//   {
//     keyId: 5,
//     menuName: 'Bath Lifts',
//     options: [
//       { title: "The Riviera Plus", icon : "/icons/products/icon-riviera.svg", url: '/bath-lifts/the-riviera-plus' },
//       { title: "Oak Tree Bath Lifts", icon : "", url: '/bath-lifts' },
//     ],
//   },
// ];