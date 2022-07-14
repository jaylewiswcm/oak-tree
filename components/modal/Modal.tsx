import React, { useEffect } from 'react'

interface ComponentProps {
    classNames: string
    children: any
    setShow: any
    visible: boolean
}

const Modal = ({children, classNames, setShow, visible}: ComponentProps) => {
    useEffect(() => {
      console.log(visible)
      if(visible) {
        const dd = document.body;
        dd.classList.add('freeze');
        return () => dd.classList.remove('freeze');    
      } 
      // return () => setShow(false)       
    })
  return (
    <div className={`modal show-modal ${visible ? 'visible' : ''}`} >
      <div className='modal-bg-btn' onClick={() => setShow(false)}></div>
        <div className={`modal-inner ${classNames}`}>
        { children }
        </div>
    </div>
  )
}

export default Modal;