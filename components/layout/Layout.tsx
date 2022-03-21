import React from 'react'
// Components
import Header from "./Header";
import Footer from "./Footer";

interface ComponentProps  {
    children: any
}

 const Layout = ({ children }:ComponentProps) => {
    return (
        <>
          <div className='main'>
              <Header />
              { children }
              <Footer />
          </div>
        </>
    )
}

export default Layout;