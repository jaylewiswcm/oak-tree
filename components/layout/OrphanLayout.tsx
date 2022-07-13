import React, { useState, useEffect } from 'react'
// Context
import { useAppContext } from '../../context/state'
// Components
import { BottomBar } from './ctaBar/BottomBar';
import Header from './orphan/Header';
// Form Components
import Modal from '../modal/Modal';
import PopupBrochureRequestForm from '../forms/PopupBrochureRequestForm';
import { FormSubmissionErrorPopup } from '../forms/error/FormSubmissionErrorPopup';

interface ComponentProps  {
    children: any
}


 const OrphanLayout = ({ children }:ComponentProps) => {
    const [hideClass, setHideClass] = useState('bottom-bar hide-bar orphan-bottom-bar')
 
    const { formModal, setFormModal} = useAppContext();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      
    const handleScroll = () => {
      const position = window.pageYOffset;
        if(position < 80) {
            setHideClass('bottom-bar hide-bar orphan-bottom-bar')
        } else {
            setHideClass('bottom-bar orphan-bottom-bar')
        }
    };

    return (
        <>
            <Header /> 
            { children }
            <BottomBar className={hideClass} />
            {formModal &&  <Modal classNames='form-modal' setShow={setFormModal}><PopupBrochureRequestForm setShow={setFormModal} /></Modal>}
            <FormSubmissionErrorPopup />
        </>
    )
}

export default OrphanLayout;