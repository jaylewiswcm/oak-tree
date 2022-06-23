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
          )}

       </div>
       </div>
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
        { title: "Frequently Asked Questions", desc: "See if we answered your question", icon : "", url: '/frequently-asked-questions' },
        
      ],
    }
  },
  {
    keyId: 3,
    menu1: {
      menuName: 'Rise and Recline Chairs',
      options: [
              { title: "The Oak", desc: "A Touch of Elegance", icon : "/images/products/chairs/oak/oak-cutout-leg-lift.png", url: '/chairs/the-oak' },
              { title: "The Maple", desc:"Stylish and Modern", icon : "/images/products/chairs/maple/maple-cutout.png", url: '/chairs/the-maple' },
              { title: "The Cedar", desc:"Distinguished and Charming", icon : "/images/products/chairs/cedar/cedar-cutout.png", url: '/chairs/the-cedar' },
              { title: "The Rowan", desc:"Sleek and Sumptous", icon : "/images/products/chairs/rowan/rowan-cutout.png", url: '/chairs/the-rowan' },
              { title: "The Tulip", desc:"Truly Superior Comfort", icon : "/images/products/chairs/tulip/tulip-cutout.png", url: '/chairs/the-tulip' },
              { title: "All Chairs", desc:"View our whole collection of chairs", icon : "all", url: '/chairs' },
            ],
    },
    menu2: {
      menuName: 'Helpful Advice',
      options: [
        { title: "Chair Price Guide", desc: "Understand our chair prices", icon : "", url: '/price-guide-chair' },
        { title: "Delivery and Installation", desc: "Learn how we deliver to you", icon : "", url: '/delivery-and-installation' },
        { title: "VAT Exempt Eligibility", desc: "See if you’re eligible for VAT exemption", icon : "", url: '/vat-exempt-eligibility' }
      ],
    }
  },
  {
    keyId: 4,
    menu1: {
      menuName: 'Adjustable Beds',
      options: [
              { title: "The Poplar", desc:"Innovative Comfort and Great Design", icon : "/images/products/beds/poplar/poplar-product.jpeg", url: '/adjustable-beds/the-poplar' },
              { title: "The Lilac", desc:"Innovation and stylish", icon : "/images/products/beds/lilac/lilac-product.jpeg", url: '/adjustable-beds/the-lilac' },
              { title: "The Hazel", desc:"An Elegant and Refined Bed", icon : "/images/products/beds/hazel/hazel-product.jpeg", url: '/adjustable-beds/the-hazel' },
              { title: "The Hesper", desc:"Eye Catching With Style", icon : "/images/products/beds/hesper/hesper-product.jpeg", url: '/adjustable-beds/the-hesper' },
              { title: "The Oysterwood", desc:"A Versatile Bed With Plenty of Style", icon : "/images/products/beds/oysterwood/oysterwood-product.jpeg", url: '/adjustable-beds/the-oysterwood' },
              { title: "The Birch", desc:"Modern Technology and British Style", icon : "/images/products/beds/birch/birch-product.jpeg", url: '/adjustable-beds/the-birch' },
              { title: "All Beds", desc:"View our whole collection of beds", icon : "all", url: '/adjustable-beds' },
            ],
    },
    menu2: {
      menuName: 'Helpful Advice',
      options: [
        { title: "Bed Price Guide", desc: "Understand our Bed prices", icon : "", url: '/price-guide-bed' },
        { title: "Delivery and Installation", desc: "Learn how we deliver to you", icon : "", url: '/delivery-and-installation' },
        { title: "VAT Exempt Eligibility", desc: "See if you’re eligible for VAT exemption", icon : "", url: '/vat-exempt-eligibility' }
      ],
    }
  },
  {
    keyId: 5,
    menu1: {
      menuName: 'Bath Lifts',
      options: [
              { title: "The Riviera Plus", desc: "Enjoy a Nice Hot Bath Again", icon : "/images/products/bath-lifts/the-riviera/riviera-product-7.png", url: '/bath-lifts/the-riviera-plus' },
              { title: "Oak Tree Bath Lifts", desc: "View our whole collection of bath lifts", icon : "all", url: '/bath-lifts' }
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