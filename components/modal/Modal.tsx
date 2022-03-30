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
    <div className='modal show-modal'>
        <div className={`modal-inner ${classNames}`}>
        <div className='exit-modal'>
            <button className='exit-btn' onClick={() => setShow(false) }>Close</button>
        </div>
        { children }
        </div>
    </div>
  )
}

export default Modal;