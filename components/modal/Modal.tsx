import React, { useEffect } from 'react'

interface ComponentProps {
    classNames: string
    children: any
    setShow: any
}

const Modal = ({children, classNames, setShow}: ComponentProps) => {
    useEffect(() => {
            const dd = document.body;
            dd.classList.add('freeze');
            return () => dd.classList.remove('freeze');                
    })
  return (
    <div className='modal show-modal' >
      <div className='modal-bg-btn' onClick={() => setShow(false)}></div>
        <div className={`modal-inner ${classNames}`}>
        { children }
        </div>
    </div>
  )
}

export default Modal;