import React, { useState, useEffect } from 'react'
import { BottomBar } from './ctaBar/BottomBar';
import Header from './orphan/Header';

interface ComponentProps  {
    children: any
}


 const OrphanLayout = ({ children }:ComponentProps) => {
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
        </>
    )
}

export default OrphanLayout;