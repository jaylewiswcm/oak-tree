import React, { useEffect, useState } from 'react'
import Link from 'next/link';
// Components
import { MenuItem } from './MenuItem';
import DropDown from './dropdown/DropDown';

export const Menu = () => {
    const [isVisible, setVisible] = useState(false)
    const [menuType, setMenuType] = useState('');
    const [isHover, setHover] = useState(0)

    console.log(isVisible)
  return (
    <nav className='main-nav'>
        <ul className='main-ul'>
            {menuConfig.map((item, index) => <MenuItem item={item} setMenuType={setMenuType} menuType={menuType} key={index} setHover={setHover} isHover={isHover} setVisible={setVisible}/> )}
            <DropDown type={menuType} keyId={isHover} toggleVisibility={setVisible} isVisible={isVisible} setVisible={setVisible} setHover={setHover}/>
        </ul>
       
    </nav>
  )
}


// Menu Items
const menuConfig = [
    {   
        id: 1,
        menuName: 'Home',
        menuType:'home',
        expand: false,
        url: '/'
    },
    {
        id: 2,
        menuName: 'About',
        menuType:'about',
        expand: true,
        url: ''
    },
    {
        id: 3,
        menuName: 'Chairs',
        menuType:'chairs',
        expand: true,
        url: ''
    },
    {
        id: 4,
        menuName: 'Beds',
        menuType:'beds',
        expand: true,
        url: ''
    },
    {
        id: 5,
        menuName: 'Bath Lifts',
        menuType:'bath-lifts',
        expand: true,
        url: ''
    },
    {
        id: 6,
        menuName: 'Express Delivery',
        menuType:'express-delivery',
        expand: false,
        url: '/'
    },
]