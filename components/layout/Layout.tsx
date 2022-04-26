import React, { useEffect, useState } from 'react'
// Components
import Header from "./Header";
import Footer from "./Footer";
import { BottomBar } from './ctaBar/BottomBar';
import {BritishMade} from '../overlay/BritishMade';

interface ComponentProps  {
    children: any
}

 const Layout = ({ children }:ComponentProps) => {
    const [hideClass, setHideClass] = useState('bottom-bar hide-bar')
    const [overlayClass, setOverlayClass] = useState('british-made-overlay')
    const [overlay, hideOverlay] = useState(true);
 

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    const handleScroll = () => {
      const position = window.pageYOffset;
        if(position < 80) {
            setHideClass('bottom-bar hide-bar');
            setOverlayClass('british-made-overlay')
        } else {
            setHideClass('bottom-bar')
            setOverlayClass('british-made-overlay increased-bottom-margin')
        }
    };


    return (
        <>
          <div className='main'>
              <Header />
              { children }
              <BottomBar className={hideClass}/>
              {overlay && <BritishMade className={overlayClass} hideOverlay={hideOverlay} />}
              <Footer />
          </div>
        </>
    )
}

export default Layout;