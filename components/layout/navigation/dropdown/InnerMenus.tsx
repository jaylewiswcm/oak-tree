import React, { useEffect } from 'react'
// Component Props
import {MenuItem} from './MenuItem';


type MenuArray = {
    title: string;
    desc: string;
    url: string;
    icon: string;
}

interface ComponentProps {
    menus: {
        menu1: {
            menuName: string
            options: Array<MenuArray>
        }
        menu2: {
            menuName: string
            options: Array<MenuArray>
        }
    }
    keyId: number
    menuIndex: number
    closeMenu: any
}

export const InnerMenus = ({menus, closeMenu, keyId,menuIndex }: ComponentProps) => {
    const {menu1, menu2} = menus

    if(keyId !== menuIndex) {
        return null;
    }

  return (
    <>
        <div className='menus'>
            <p className='menu-title'>{menu1.menuName}</p>
            <ul>
                {menu1.options.map((item, index) =><MenuItem item={item} key={index} closeMenu={closeMenu}/> )}
            </ul>
        </div>
        <div className='menus'>
            <p className='menu-title'>{menu2.menuName}</p>
            <ul>
                {menu2.options.map((item, index) =><MenuItem item={item} key={index} closeMenu={closeMenu}/> )}
            </ul>
        </div>
    </>
  )
}
