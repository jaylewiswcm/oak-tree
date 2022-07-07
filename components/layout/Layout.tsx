import React, { useEffect, useState } from 'react'
import { useRouter }  from 'next/router';
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
    
    return (
        <>
          <div className='main'>
              <Header />
              <BreadcrumbNav />
              { children }
             
              <BottomBar className={hideClass}/>
              {overlay && <UspOverlay className={overlayClass} hideOverlay={hideOverlay} />}
              {formModal &&  <Modal classNames='form-modal' setShow={setFormModal}><PopupBrochureRequestForm setShow={setFormModal} /></Modal>}
              <Footer />
          </div>
        </>
    )
}

export default Layout;