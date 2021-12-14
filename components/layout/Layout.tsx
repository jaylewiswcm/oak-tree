import React from 'react'
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import StickyFooter from "../elements/sticky/StickyFooter";

interface ComponentProps  {
    children: any
}

 const Layout = ({ children }:ComponentProps) => {
    return (
        <>
        <Head>
            
        {/* <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaLightItalic.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaBoldItalic.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaBoldRegular.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaBlackItalic.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaSemiboldItalic.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaLightRegular.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaSemiboldRegular.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaExtraboldRegular.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaExtraboldItalic.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaBlackRegular.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaRegular.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaItalic.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaThinItalic.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaExtrathinItalic.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaThinRegular.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Averta/FONTSPRINGDEMO-AvertaExtrathinRegular.woff2" as="font" type="font/woff2" crossOrigin='' /> */}
        {/* <link
            href="/fonts/Averta/FONTSPRINGDEMO-AvertaRegular.woff2"
            rel="preload"
            as="font"
            crossOrigin=""
          />
        <link
            href="/fonts/Averta/FONTSPRINGDEMO-AvertaSemiboldRegular.woff2"
            rel="preload"
            as="font"
            crossOrigin=""
          />
        <link
            href="/fonts/Averta/FONTSPRINGDEMO-AvertaLightRegular.woff2"
            rel="preload"
            as="font"
            crossOrigin=""
          />
        <link
            href="/fonts/Averta/FONTSPRINGDEMO-AvertaExtrathinRegular.woff2"
            rel="preload"
            as="font"
            crossOrigin=""
          />
        <link
            href="/fonts/Averta/FONTSPRINGDEMO-AvertaExtraboldRegular.woff2"
            rel="preload"
            as="font"
            crossOrigin=""
          />
        <link
            href="/fonts/Averta/FONTSPRINGDEMO-AvertaBoldRegular.woff2"
            rel="preload"
            as="font"
            crossOrigin=""
          />
        <link
            href="/fonts/Averta/FONTSPRINGDEMO-AvertaBlackRegular.woff2"
            rel="preload"
            as="font"
            crossOrigin=""
          /> */}
          {/* <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-Medium.ttf"
            as="font"
            crossOrigin=""
          /> */}
        </Head>
       
        <div className='main'>
            <Header />
            {/* <BreadCrumbs /> */}
            { children }
            <StickyFooter />
            <Footer />
        </div>
        </>
    )
}

export default Layout;