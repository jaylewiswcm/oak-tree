import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
// Components 
import Menu from './Menu';

interface ComponentProps {
  keyId: number
  type: string
  closeMenu: any
}

const DropDown = ({keyId, type, closeMenu}:ComponentProps) => {

  return (
  <div className='dd-menu-wrapper'>
    <div className='header-arrow'></div>
    <Menu type={type} keyId={keyId} closeMenu={closeMenu}/>
   </div>
  )
}

export default DropDown;
