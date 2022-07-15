import React, { useEffect, useState } from 'react'
import { useRouter }  from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
// Context
import { useAppContext } from '../../context/state'
// Layout Components
import Header from "./Header";
import Footer from "./Footer";
import { BottomBar } from './ctaBar/BottomBar';
// Navigation Components
import BreadcrumbNav from './breadcrumbs/BreadcrumbNav';
// Form Components
import Modal from '../modal/Modal';
import PopupBrochureRequestForm from '../forms/PopupBrochureRequestForm';
// USP Components
import {UspOverlay} from '../overlay/UspOverlay';
import { FormSubmissionErrorPopup } from '../forms/error/FormSubmissionErrorPopup';

interface ComponentProps  {
    children: any
}

 const Layout = ({ children }:ComponentProps) => {
    const [hideClass, setHideClass] = useState('hide-bar') 
    const [overlayClass, setOverlayClass] = useState('british-made-overlay')
    const [overlay, hideOverlay] = useState(true);

   const { productPage, formModal, setFormModal} = useAppContext();
    const router = useRouter()
    useEffect(() => {  
      if (!getCookie('exitIntentShown')) {
        setTimeout(() => {
            window.addEventListener('mouseout', exitIntentEvent);
        }, 3_000);
      }
  

      const handleScroll = () => {
        const position = window.pageYOffset;
        
        if(router.pathname.includes('/rise-and-recline-chairs/') || router.pathname.includes('/beds/')) {
          setHideClass("hide-bar") 
        } else {
            if(position < 500) {
              setHideClass("hide-bar") 
              setOverlayClass('')
          } else if(!productPage) {
              setHideClass("") 
              setOverlayClass('increased-bottom-margin')
          }  
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }; 

    }, [productPage, setHideClass, setOverlayClass, router]);
    
    const exitIntentEvent = (e:any) => {
      const shouldShowExitIntent = 
          e.relatedTarget === null &&
          e.clientY < 10;
  
      if (shouldShowExitIntent) {
          window.removeEventListener('mouseout', exitIntentEvent);
          
          setFormModal(true);
          
          setCookie('exitIntentShown', true)
      }
  };


    return (
        <>
          <div className='main'>
              <Header/> 
              <BreadcrumbNav />
              { children }
              <BottomBar className={hideClass}/>
              
              <Modal classNames='form-modal' visible={formModal} setShow={setFormModal}><PopupBrochureRequestForm setShow={setFormModal} /></Modal>
              <FormSubmissionErrorPopup />
              <Footer />
              {!getCookie('UspOverlayHidden')  && overlay && <UspOverlay className={overlayClass} hideOverlay={hideOverlay} />}
          </div>
        </>
    )
}

export default Layout;