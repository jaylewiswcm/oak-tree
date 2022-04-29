import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
// Components 
import Menu from './Menu';

interface ComponentProps {
  keyId: number
  type: string
  toggleVisibility: any
  isVisible: boolean
  setVisible: any
  setHover: any
}

const DropDown = ({keyId, type, toggleVisibility, isVisible,setVisible, setHover} :ComponentProps) => {
  return (
  <div className={`dd-menu-wrapper ${isVisible ? 'is-visible' : ''}`}>
      <Menu type={type} keyId={keyId} toggleVisibility={toggleVisibility} setVisible={setVisible} setHover={setHover} />
   </div>
  )
}

export default DropDown;
