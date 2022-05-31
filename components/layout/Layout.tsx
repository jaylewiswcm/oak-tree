import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/state'
// Components
import Header from "./Header";
import Footer from "./Footer";
import { BottomBar } from './ctaBar/BottomBar';
import {UspOverlay} from '../overlay/UspOverlay';
import BreadcrumbNav from './breadcrumbs/BreadcrumbNav';

interface ComponentProps  {
    children: any
}

 const Layout = ({ children }:ComponentProps) => {
    // const [hideClass, setHideClass] = useState('hide-bar')
    const [overlayClass, setOverlayClass] = useState('british-made-overlay')
    const [overlay, hideOverlay] = useState(true);


   const { hideBottomBar, setToHideBottomBar, productPage } = useAppContext();

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    const handleScroll = () => {
      const position = window.pageYOffset;
      let setPosition = 80;
      if(productPage) {
        setToHideBottomBar("hide-bar") 
      } else {
        if(position < setPosition) {
          setToHideBottomBar("hide-bar") 
          setOverlayClass('british-made-overlay')
      } else {
          setToHideBottomBar("") 
          setOverlayClass('british-made-overlay increased-bottom-margin')
      }
      }
    };


    return (
        <>
          <div className='main'>
              <Header />
              <BreadcrumbNav />
              { children }
              <BottomBar className={hideBottomBar}/>
              {overlay && <UspOverlay className={overlayClass} hideOverlay={hideOverlay} />}
              <Footer />
          </div>
        </>
    )
}

export default Layout;