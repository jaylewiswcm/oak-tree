import React, { useEffect } from 'react';
import '../sass/app.css';
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion';
import Script from 'next/script';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// Component
import { AppWrapper } from '../context/state'
import Layout from '../components/layout/Layout';
import OrphanLayout from '../components/layout/OrphanLayout'
import Head from 'next/head';
import { SetCookies, GetCookies } from '../utils/cookies';

function App({ Component, pageProps, router }:AppProps) {
  
  if (router.pathname.startsWith('/request')) {
    return (
      <GoogleReCaptchaProvider
      reCaptchaKey="6LeJqdAgAAAAAOE-C-IGC0F7Tiao-LwvLdi-dC0X"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <AppWrapper>
        <OrphanLayout>   
            <Component {...pageProps}></Component>
        </OrphanLayout>
        <SetCookies/>
        <GetCookies />
      </AppWrapper>
      </GoogleReCaptchaProvider>
    )
  }

  return (
      <AppWrapper>
        <Head>
          <script id="google-tag-manager" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P7PMSLV');`}}></script>
        </Head> 
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7PMSLV" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        <Layout>
            <Component {...pageProps}></Component>
        </Layout>
        <SetCookies/>
        <GetCookies />
      </AppWrapper>
  )
}


export default App 
