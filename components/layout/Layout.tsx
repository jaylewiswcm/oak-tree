import React, { useEffect, useState } from 'react'
// Components
import Header from "./Header";
import Footer from "./Footer";
import { BottomBar } from './ctaBar/BottomBar';

interface ComponentProps  {
    children: any
}

 const Layout = ({ children }:ComponentProps) => {
    const [hideClass, setHideClass] = useState('bottom-bar hide-bar')
 

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    const handleScroll = () => {
      const position = window.pageYOffset;
        if(position < 80) {
            setHideClass('bottom-bar hide-bar')
        } else {
            setHideClass('bottom-bar')
        }
    };


    return (
        <>
          <div className='main'>
              <Header />
              { children }
              <BottomBar className={hideClass}/>
              <Footer />
          </div>
        </>
    )
}

export default Layout;