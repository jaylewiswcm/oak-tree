import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import StickyFooter from "../elements/sticky/StickyFooter";


interface ComponentProps  {
    children: any
}

 const Layout = ({ children }:ComponentProps) => {
    return (
        <>
          <div className='main'>
              <Header />
              { children }
              <StickyFooter />
              <Footer />
          </div>
        </>
    )
}

export default Layout;