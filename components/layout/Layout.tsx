import React from 'react'

import Header from "./Header";
import Footer from "./Footer";

interface ComponentProps  {
    children: any
}

 const Layout = ({ children }:ComponentProps) => {
    return (
        <>
            <Header />
            {/* <BreadCrumbs /> */}
            { children }
            <Footer />
        </>
    )
}

export default Layout;